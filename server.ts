import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Support JSON payload for base64 image uploads (limit up to 50MB)
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const manifestPath = path.join(uploadsDir, "manifest.json");

  function getManifest(): Record<string, string> {
    try {
      if (fs.existsSync(manifestPath)) {
        return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      }
    } catch (e) {
      console.error("Error reading manifest:", e);
    }
    return {};
  }

  function saveManifest(data: Record<string, string>) {
    try {
      fs.writeFileSync(manifestPath, JSON.stringify(data, null, 2), "utf8");
    } catch (e) {
      console.error("Error saving manifest:", e);
    }
  }

  // Serve static uploads
  app.use("/uploads", express.static(uploadsDir));

  // Also serve public directory static files
  app.use(express.static(path.join(process.cwd(), "public")));

  // API endpoints
  app.get("/api/images", (req, res) => {
    const manifest = getManifest();
    res.json({ success: true, images: manifest });
  });

  app.post("/api/upload-image", (req, res) => {
    try {
      const { id, dataUrl } = req.body;
      if (!id || !dataUrl) {
        return res.status(400).json({ success: false, message: "Missing id or dataUrl" });
      }

      if (typeof dataUrl === "string" && dataUrl.startsWith("data:image/")) {
        const matches = dataUrl.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        let ext = ".png";
        if (matches && matches.length === 3) {
          const mime = matches[1];
          if (mime.includes("jpeg") || mime.includes("jpg")) ext = ".jpg";
          else if (mime.includes("webp")) ext = ".webp";
          else if (mime.includes("svg")) ext = ".svg";
          const buffer = Buffer.from(matches[2], "base64");

          const safeId = id.replace(/[^a-zA-Z0-9_-]/g, "_");
          const savedFileName = `${safeId}${ext}`;
          const filePath = path.join(uploadsDir, savedFileName);

          fs.writeFileSync(filePath, buffer);

          const distUploads = path.join(process.cwd(), "dist", "uploads");
          if (fs.existsSync(distUploads)) {
            fs.writeFileSync(path.join(distUploads, savedFileName), buffer);
          }

          const publicUrl = `/uploads/${savedFileName}`;
          const manifest = getManifest();
          manifest[id] = publicUrl;
          saveManifest(manifest);

          return res.json({ success: true, url: publicUrl, manifest });
        }
      } else if (typeof dataUrl === "string" && dataUrl.startsWith("/")) {
        const manifest = getManifest();
        manifest[id] = dataUrl;
        saveManifest(manifest);
        return res.json({ success: true, url: dataUrl, manifest });
      }

      return res.status(400).json({ success: false, message: "Invalid image data format" });
    } catch (err: any) {
      console.error("Upload error:", err);
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Batch sync endpoint
  app.post("/api/sync-images", (req, res) => {
    try {
      const { images } = req.body;
      if (!images || typeof images !== "object") {
        return res.status(400).json({ success: false, message: "Invalid images payload" });
      }

      const manifest = getManifest();
      let updated = false;

      for (const [id, dataUrl] of Object.entries(images)) {
        if (typeof dataUrl === "string" && dataUrl.startsWith("data:image/")) {
          const matches = dataUrl.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
          if (matches && matches.length === 3) {
            const mime = matches[1];
            let ext = ".png";
            if (mime.includes("jpeg") || mime.includes("jpg")) ext = ".jpg";
            else if (mime.includes("webp")) ext = ".webp";
            else if (mime.includes("svg")) ext = ".svg";

            const safeId = id.replace(/[^a-zA-Z0-9_-]/g, "_");
            const savedFileName = `${safeId}${ext}`;
            const filePath = path.join(uploadsDir, savedFileName);
            const buffer = Buffer.from(matches[2], "base64");

            fs.writeFileSync(filePath, buffer);

            const distUploads = path.join(process.cwd(), "dist", "uploads");
            if (fs.existsSync(distUploads)) {
              try {
                fs.writeFileSync(path.join(distUploads, savedFileName), buffer);
              } catch {}
            }

            manifest[id] = `/uploads/${savedFileName}`;
            updated = true;
          }
        } else if (typeof dataUrl === "string" && dataUrl.startsWith("/")) {
          manifest[id] = dataUrl;
          updated = true;
        }
      }

      if (updated) {
        saveManifest(manifest);
      }

      res.json({ success: true, manifest });
    } catch (err: any) {
      console.error("Batch sync error:", err);
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
