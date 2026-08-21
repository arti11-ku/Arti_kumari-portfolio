// Asset resolution & permanent persistence utility for production & deployment environments

let serverManifest: Record<string, string> = {};
let manifestFetched = false;
let manifestFetchPromise: Promise<Record<string, string>> | null = null;

export async function fetchServerManifest(): Promise<Record<string, string>> {
  if (manifestFetched) return serverManifest;
  if (manifestFetchPromise) return manifestFetchPromise;

  manifestFetchPromise = (async () => {
    try {
      const res = await fetch('/api/images');
      if (res.ok) {
        const data = await res.json();
        if (data && data.images) {
          serverManifest = { ...data.images };
          manifestFetched = true;
        }
      }
    } catch {
      // Offline / client-only fallback
    }
    return serverManifest;
  })();

  return manifestFetchPromise;
}

/**
 * Checks if an image URL can be loaded successfully.
 * Caches positive/negative results to avoid duplicate network requests.
 */
const imageLoadCache = new Map<string, Promise<boolean>>();

export function checkImageExists(url: string): Promise<boolean> {
  if (!url) return Promise.resolve(false);
  
  if (imageLoadCache.has(url)) {
    return imageLoadCache.get(url)!;
  }

  const promise = new Promise<boolean>((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }

    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });

  imageLoadCache.set(url, promise);
  return promise;
}

/**
 * Saves an uploaded image (data URL or blob) permanently to the backend server.
 */
export async function saveImageToServer(id: string, dataUrl: string): Promise<string | null> {
  try {
    const res = await fetch('/api/upload-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, dataUrl }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.url) {
        serverManifest[id] = data.url;
        return data.url;
      }
    }
  } catch (err) {
    console.warn('Failed to upload image to server persistence:', err);
  }
  return null;
}

/**
 * Scans localStorage and syncs any uploaded images to the server
 * so they become permanent project assets for all visitors.
 */
export async function autoSyncLocalImagesToServer() {
  if (typeof window === 'undefined') return;

  try {
    const imagesToSync: Record<string, string> = {};

    // 1. Check all portfolio_img_* items
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('portfolio_img_')) {
        const id = key.replace('portfolio_img_', '');
        const val = localStorage.getItem(key);
        if (val && (val.startsWith('data:image/') || val.startsWith('/'))) {
          imagesToSync[id] = val;
        }
      } else if (key && key.startsWith('custom_')) {
        const id = key.replace('custom_', '');
        const val = localStorage.getItem(key);
        if (val && (val.startsWith('data:image/') || val.startsWith('/'))) {
          imagesToSync[id] = val;
        }
      }
    }

    // 2. Check smart_resource_screenshots
    const srSaved = localStorage.getItem('smart_resource_screenshots');
    if (srSaved) {
      try {
        const parsed = JSON.parse(srSaved);
        if (Array.isArray(parsed)) {
          parsed.forEach((item) => {
            if (item.id && item.customImageUrl && item.customImageUrl.startsWith('data:image/')) {
              imagesToSync[item.id] = item.customImageUrl;
            }
          });
        }
      } catch {}
    }

    if (Object.keys(imagesToSync).length > 0) {
      const res = await fetch('/api/sync-images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: imagesToSync }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.manifest) {
          serverManifest = { ...serverManifest, ...data.manifest };
        }
      }
    }
  } catch (e) {
    console.warn('Auto-sync error:', e);
  }
}

/**
 * Resolves the first valid image source from a list of potential static candidate paths,
 * checking server permanent uploads first, then candidate paths, then fallback/localStorage.
 */
export async function resolveFirstValidImage(
  candidates: string[],
  fallbackUrl?: string | null,
  id?: string
): Promise<string | null> {
  // 1. Check server manifest if id is provided
  if (id) {
    const manifest = await fetchServerManifest();
    if (manifest[id]) {
      const exists = await checkImageExists(manifest[id]);
      if (exists) return manifest[id];
    }
  }

  // Also check if any candidate matches server manifest key
  const manifest = await fetchServerManifest();
  for (const [key, url] of Object.entries(manifest)) {
    if (id && key === id) {
      const exists = await checkImageExists(url);
      if (exists) return url;
    }
  }

  // 2. Check candidate paths
  for (const path of candidates) {
    const exists = await checkImageExists(path);
    if (exists) {
      return path;
    }
  }

  // 3. Check fallback URL
  if (fallbackUrl) {
    return fallbackUrl;
  }

  return null;
}
