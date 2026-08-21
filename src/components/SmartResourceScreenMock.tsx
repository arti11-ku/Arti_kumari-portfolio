import React from 'react';
import { 
  BarChart3, 
  MapPin, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Heart, 
  Layers, 
  FileText, 
  Compass, 
  ChevronDown, 
  Eye, 
  RefreshCw, 
  Search, 
  Send, 
  Lock, 
  Mail, 
  UserCheck, 
  Briefcase, 
  Building2, 
  Activity, 
  Filter,
  Check,
  X,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { ScreenshotItem } from '../data/resourceAllocationScreenshots';

interface SmartResourceScreenMockProps {
  screenshot: ScreenshotItem;
  className?: string;
  isHighRes?: boolean;
}

export const SmartResourceScreenMock: React.FC<SmartResourceScreenMockProps> = ({
  screenshot,
  className = '',
  isHighRes = false,
}) => {
  // If user provided a custom image URL for this screenshot, render it directly with high quality
  if (screenshot.customImageUrl) {
    return (
      <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden ${className}`}>
        <img
          src={screenshot.customImageUrl}
          alt={screenshot.title}
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Render the tailored UI mockup matching the exact uploaded screenshots
  switch (screenshot.screenType) {
    case 'ngo-dashboard':
      return <NgoDashboardMock isHighRes={isHighRes} className={className} />;
    case 'ai-allocation-assistant':
      return <AiAllocationAssistantMock isHighRes={isHighRes} className={className} />;
    case 'demand-supply-map':
      return <DemandSupplyMapMock isHighRes={isHighRes} className={className} />;
    case 'volunteer-roster':
      return <VolunteerRosterMock isHighRes={isHighRes} className={className} />;
    case 'proof-verification':
      return <ProofVerificationMock isHighRes={isHighRes} className={className} />;
    case 'donor-impact':
      return <DonorImpactMock isHighRes={isHighRes} className={className} />;
    case 'issue-reporting':
      return <IssueReportingMock isHighRes={isHighRes} className={className} />;
    case 'login-role':
      return <LoginRoleMock isHighRes={isHighRes} className={className} />;
    default:
      return <NgoDashboardMock isHighRes={isHighRes} className={className} />;
  }
};

/* --- 1. NGO DASHBOARD SCREENSHOT --- */
const NgoDashboardMock: React.FC<{ isHighRes?: boolean; className?: string }> = ({ isHighRes, className }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans flex flex-col select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Top Navbar */}
      <div className="h-10 bg-white border-b border-zinc-200 px-3 sm:px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 font-black text-amber-600 text-xs sm:text-sm tracking-tight">
            <span className="text-orange-500 font-black">SAHARA</span>
          </div>
          <span className="text-zinc-400">/</span>
          <span className="font-semibold text-zinc-800 text-[11px] sm:text-xs">Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-[9px]">
            3
          </div>
          <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px]">
            GV
          </div>
          <div className="hidden sm:flex flex-col text-right leading-none">
            <span className="font-bold text-[10px] text-zinc-900">G Vandana2495</span>
            <span className="text-[8px] text-zinc-500">NGO Admin</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-24 sm:w-36 bg-white border-r border-zinc-200 p-2 hidden xs:flex flex-col gap-1 shrink-0">
          <div className="text-[9px] uppercase tracking-wider font-bold text-zinc-400 px-2 py-1">NGO Panel</div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-orange-500 text-white font-semibold text-[10px] shadow-xs">
            <Layers className="w-3 h-3" /> Dashboard
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-zinc-600 hover:bg-zinc-100 text-[10px]">
            <Users className="w-3 h-3 text-zinc-400" /> Volunteers
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-zinc-600 hover:bg-zinc-100 text-[10px]">
            <CheckCircle2 className="w-3 h-3 text-zinc-400" /> Tasks
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-zinc-600 hover:bg-zinc-100 text-[10px]">
            <ShieldCheck className="w-3 h-3 text-zinc-400" /> Proof Verify
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-zinc-600 hover:bg-zinc-100 text-[10px]">
            <MapPin className="w-3 h-3 text-zinc-400" /> Resource Map
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-[#fafafa]">
          {/* Header */}
          <div>
            <h3 className="font-extrabold text-xs sm:text-sm text-zinc-900">NGO Dashboard Overview</h3>
            <p className="text-[9px] sm:text-[10px] text-zinc-500">Monitor tasks, volunteers, and resources at a glance.</p>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            <div className="bg-white p-2.5 rounded-xl border border-zinc-200/80 shadow-xs">
              <div className="w-5 h-5 rounded-md bg-orange-500 text-white flex items-center justify-center mb-1">
                <FileText className="w-3 h-3" />
              </div>
              <div className="text-base sm:text-lg font-black text-zinc-900 leading-tight">1</div>
              <div className="text-[8px] font-bold text-zinc-600 uppercase">ACTIVE TASKS</div>
              <div className="text-[7px] text-amber-600 font-medium truncate">Currently running</div>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-zinc-200/80 shadow-xs">
              <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center mb-1">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <div className="text-base sm:text-lg font-black text-zinc-900 leading-tight">1</div>
              <div className="text-[8px] font-bold text-zinc-600 uppercase">COMPLETED</div>
              <div className="text-[7px] text-zinc-500 truncate">This week</div>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-zinc-200/80 shadow-xs">
              <div className="w-5 h-5 rounded-md bg-blue-500 text-white flex items-center justify-center mb-1">
                <Clock className="w-3 h-3" />
              </div>
              <div className="text-base sm:text-lg font-black text-zinc-900 leading-tight">3</div>
              <div className="text-[8px] font-bold text-zinc-600 uppercase">PENDING</div>
              <div className="text-[7px] text-zinc-500 truncate">Awaiting start</div>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-zinc-200/80 shadow-xs">
              <div className="w-5 h-5 rounded-md bg-purple-500 text-white flex items-center justify-center mb-1">
                <Users className="w-3 h-3" />
              </div>
              <div className="text-base sm:text-lg font-black text-zinc-900 leading-tight">5</div>
              <div className="text-[8px] font-bold text-zinc-600 uppercase">VOLUNTEERS</div>
              <div className="text-[7px] text-zinc-500 truncate">Registered</div>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-zinc-200/80 shadow-xs col-span-2 sm:col-span-1">
              <div className="w-5 h-5 rounded-md bg-teal-500 text-white flex items-center justify-center mb-1">
                <Layers className="w-3 h-3" />
              </div>
              <div className="text-base sm:text-lg font-black text-zinc-900 leading-tight">930</div>
              <div className="text-[8px] font-bold text-zinc-600 uppercase">RESOURCES</div>
              <div className="text-[7px] text-zinc-500 truncate">Total units</div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {/* Bar Chart */}
            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-zinc-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[10px] sm:text-[11px] text-zinc-800">Task Progress — Bar Chart</span>
                <div className="flex items-center gap-2 text-[8px]">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-xs bg-orange-500" /> Active</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-xs bg-emerald-500" /> Completed</span>
                </div>
              </div>
              {/* Simulated Bars */}
              <div className="h-28 sm:h-32 flex items-end justify-between gap-2 pt-3 px-2 border-b border-zinc-100">
                {[
                  { day: 'Apr 17', active: 55, comp: 35 },
                  { day: 'Apr 18', active: 75, comp: 50 },
                  { day: 'Apr 19', active: 40, comp: 80 },
                  { day: 'Apr 20', active: 90, comp: 60 },
                  { day: 'Apr 21', active: 70, comp: 95 },
                  { day: 'Apr 22', active: 60, comp: 70 },
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex items-end justify-center gap-1 h-20">
                      <div style={{ height: `${item.active}%` }} className="w-2.5 bg-orange-500 rounded-t-xs" />
                      <div style={{ height: `${item.comp}%` }} className="w-2.5 bg-emerald-500 rounded-t-xs" />
                    </div>
                    <span className="text-[7px] text-zinc-400">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie / Donut Chart */}
            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-zinc-200/80 shadow-xs flex flex-col justify-between">
              <div className="font-bold text-[10px] sm:text-[11px] text-zinc-800 mb-1">Resource Distribution — Donut Chart</div>
              <div className="flex items-center justify-around py-1">
                {/* Visual Donut representation */}
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                  <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="35, 100" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#f97316" strokeWidth="4" strokeDasharray="25, 100" strokeDashoffset="-35" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="20, 100" strokeDashoffset="-60" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#a855f7" strokeWidth="4" strokeDasharray="20, 100" strokeDashoffset="-80" />
                  </svg>
                  <div className="absolute text-[8px] font-extrabold text-zinc-700 text-center leading-none">
                    930<br/><span className="text-[6px] text-zinc-400 font-normal">Units</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-[8px]">
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Food (35%)</div>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500" /> Health (25%)</div>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500" /> Relief (20%)</div>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500" /> Education (20%)</div>
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-100 flex justify-between text-[8px] text-zinc-500 px-1">
                <span>🟢 Available: 3</span>
                <span>🟠 Allocated: 1</span>
                <span>🔴 Depleted: 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 2. AI ALLOCATION ASSISTANT & TASK PRIORITIZATION --- */
const AiAllocationAssistantMock: React.FC<{ isHighRes?: boolean; className?: string }> = ({ isHighRes, className }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans flex flex-col select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Top Bar */}
      <div className="h-10 bg-white border-b border-zinc-200 px-3 sm:px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-black text-xs sm:text-sm">SAHARA</span>
          <span className="text-zinc-400">/</span>
          <span className="font-semibold text-zinc-800 text-[11px] sm:text-xs">Task Allocation & AI Assistant</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px]">
            GV
          </div>
          <span className="text-[10px] font-semibold text-zinc-700 hidden sm:inline">NGO Admin</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden p-3 sm:p-4 gap-3 bg-[#fafafa]">
        {/* Left Column: Task Queue */}
        <div className="flex-1 space-y-2.5 overflow-y-auto">
          {/* AI Banner */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-zinc-900 text-[11px] sm:text-xs">AI Allocation Assistant</span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-200 text-amber-800 text-[7px] font-bold">GEMINI</span>
                </div>
                <p className="text-[8px] sm:text-[9px] text-zinc-600">Gemini-powered resource & volunteer matching engine</p>
              </div>
            </div>
            <span className="text-[8px] text-orange-700 font-semibold underline hidden sm:inline">Customize report details</span>
          </div>

          <div className="text-[9px] font-bold text-zinc-500 flex justify-between px-1">
            <span>5 resources · 5 volunteers available</span>
            <span className="text-emerald-600 font-semibold">● Auto-matching ready</span>
          </div>

          {/* Task cards */}
          <div className="space-y-1.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Free Medical Camp</div>
                <div className="text-[8px] text-zinc-500">Assigned to Aarav Patel · Apr 28, 2026</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-bold text-[8px]">High</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold text-[8px]">Assigned</span>
              </div>
            </div>

            <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Literacy Workshop</div>
                <div className="text-[8px] text-zinc-500">Assigned to Sneha Reddy · May 2, 2026</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold text-[8px]">Medium</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[8px]">In Progress</span>
              </div>
            </div>

            <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Blood Donation Camp</div>
                <div className="text-[8px] text-zinc-500">Assigned to Deepika Nair · May 5, 2026</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-bold text-[8px]">High</span>
                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-bold text-[8px]">Reviewing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Floating AI Assistant Window */}
        <div className="w-56 sm:w-64 bg-white rounded-2xl border border-orange-300/80 shadow-lg flex flex-col overflow-hidden shrink-0">
          <div className="p-2.5 bg-linear-to-r from-orange-500 to-amber-500 text-white flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <div>
                <div className="font-bold text-[10px] leading-tight">SAHARA AI Assistant</div>
                <div className="text-[7px] opacity-90">Smart help for NGOs · Gemini</div>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
          </div>

          <div className="flex-1 p-2.5 space-y-2 text-[9px] bg-orange-50/20 overflow-y-auto">
            <div className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-700 leading-relaxed shadow-2xs">
              Hi G! I'm SAHARA AI — powered by Gemini. Ask me anything about your dashboard or how to get things done.
            </div>

            <div className="space-y-1">
              <div className="px-2 py-1 rounded-lg bg-orange-100/80 text-orange-800 font-medium text-[8px] hover:bg-orange-200 cursor-pointer transition">
                ⚡ Show pending tasks
              </div>
              <div className="px-2 py-1 rounded-lg bg-orange-100/80 text-orange-800 font-medium text-[8px] hover:bg-orange-200 cursor-pointer transition">
                🔥 Which tasks are urgent?
              </div>
              <div className="px-2 py-1 rounded-lg bg-orange-500 text-white font-bold text-[8px] hover:bg-orange-600 cursor-pointer transition flex items-center justify-between">
                <span>Run AI allocation</span>
                <Sparkles className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>

          <div className="p-2 bg-white border-t border-zinc-200 flex items-center gap-1.5">
            <input
              type="text"
              readOnly
              value="Ask anything..."
              className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-2 py-1 text-[8px] text-zinc-400"
            />
            <button className="w-6 h-6 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0">
              <Send className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 3. DEMAND VS SUPPLY GEOSPATIAL MAP --- */
const DemandSupplyMapMock: React.FC<{ isHighRes?: boolean; className?: string }> = ({ isHighRes, className }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans flex flex-col select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Header */}
      <div className="h-10 bg-white border-b border-zinc-200 px-3 sm:px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-black text-xs sm:text-sm">SAHARA</span>
          <span className="text-zinc-400">/</span>
          <span className="font-semibold text-zinc-800 text-[11px] sm:text-xs">Resource Map</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-500 text-white font-semibold text-[9px] shadow-xs">
            <RefreshCw className="w-2.5 h-2.5" /> Refresh
          </button>
        </div>
      </div>

      <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2.5 bg-[#fafafa]">
        <div>
          <h3 className="font-extrabold text-xs sm:text-sm text-zinc-900">Resource Demand vs Supply Map</h3>
          <p className="text-[9px] text-zinc-500">India · 30 locations · last refreshed just now</p>
        </div>

        {/* Shortage Badges */}
        <div className="flex flex-wrap items-center gap-2 text-[8px] sm:text-[9px] font-semibold">
          <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" /> 8 Critical Shortage
          </span>
          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" /> 6 Moderate Shortage
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> 11 Surplus / Balanced
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 text-[8px]">
          <span className="px-2.5 py-1 rounded-lg bg-orange-500 text-white font-bold">All</span>
          <span className="px-2 py-1 rounded-lg bg-white border border-zinc-200 text-zinc-600">🍲 Food</span>
          <span className="px-2 py-1 rounded-lg bg-white border border-zinc-200 text-zinc-600">💊 Medical</span>
          <span className="px-2 py-1 rounded-lg bg-white border border-zinc-200 text-zinc-600">💧 Water</span>
          <span className="px-2 py-1 rounded-lg bg-white border border-zinc-200 text-zinc-600">📚 Education</span>
          <span className="px-2 py-1 rounded-lg bg-white border border-zinc-200 text-zinc-600">⛺ Shelter</span>
        </div>

        {/* Map Canvas Frame */}
        <div className="flex-1 min-h-[160px] rounded-xl border border-zinc-300 relative overflow-hidden bg-[#dcfce7]/40 flex items-center justify-center shadow-inner">
          {/* Topographical grid lines simulation */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Simulated Geographic Labels & Hubs */}
          <div className="absolute top-6 left-12 text-[8px] font-bold text-zinc-500">Varanasi</div>
          <div className="absolute top-10 right-20 text-[8px] font-bold text-zinc-500">Kolkata</div>
          <div className="absolute bottom-8 left-16 text-[8px] font-bold text-zinc-500">Bhilai / Raipur</div>
          <div className="absolute bottom-6 right-24 text-[8px] font-bold text-zinc-500">Bhubaneswar</div>
          
          {/* Centered Hotspot Marker (Ranchi) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-red-500/30 animate-ping absolute" />
            <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow-md font-bold text-[9px] border-2 border-white">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="bg-white/90 px-1.5 py-0.5 rounded text-[8px] font-bold text-zinc-900 shadow-xs mt-0.5">
              Ranchi Hub (Critical)
            </span>
          </div>

          {/* Additional Map Pin Hotspots */}
          <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[7px] font-bold border border-white">
            ●
          </div>
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[7px] font-bold border border-white">
            ●
          </div>
          <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[7px] font-bold border border-white">
            ●
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-2 right-2 bg-white/90 rounded-md border border-zinc-300 p-1 flex flex-col gap-1 text-[8px] font-bold text-zinc-700">
            <span className="px-1 hover:bg-zinc-100 cursor-pointer">+</span>
            <span className="px-1 border-t border-zinc-200 hover:bg-zinc-100 cursor-pointer">-</span>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white p-1.5 rounded-lg border border-zinc-200 flex flex-wrap items-center justify-between text-[7px] text-zinc-600 px-2">
          <span className="font-bold text-zinc-800">LEGEND:</span>
          <span>🔴 Critical (&lt;40% demand)</span>
          <span>🟠 Moderate (40-65%)</span>
          <span>🟡 Slight (65-85%)</span>
          <span>🟢 Balanced (85-115%)</span>
          <span>🔵 Surplus (&gt;115%)</span>
        </div>
      </div>
    </div>
  );
};

/* --- 4. VOLUNTEER ROSTER & SKILL-BASED ALLOCATION --- */
const VolunteerRosterMock: React.FC<{ isHighRes?: boolean; className?: string }> = ({ isHighRes, className }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans flex flex-col select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Top Navbar */}
      <div className="h-10 bg-white border-b border-zinc-200 px-3 sm:px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-black text-xs sm:text-sm">SAHARA</span>
          <span className="text-zinc-400">/</span>
          <span className="font-semibold text-zinc-800 text-[11px] sm:text-xs">Volunteers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px]">
            GV
          </div>
          <span className="text-[10px] font-semibold text-zinc-700 hidden sm:inline">NGO Admin</span>
        </div>
      </div>

      <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-[#fafafa]">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-3 h-3 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            readOnly
            value="Search volunteers or skills..."
            className="w-full bg-white border border-zinc-200 rounded-xl pl-7 pr-3 py-1.5 text-[9px] sm:text-[10px] text-zinc-400 shadow-2xs"
          />
        </div>

        {/* Volunteer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Volunteer Card 1 */}
          <div className="bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-xs shrink-0">
                PS
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Priya Singh</div>
                <div className="text-[8px] text-zinc-400">+91 98100 11111 · ⏱ Full Time</div>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  <span className="px-1.5 py-0.2 rounded bg-orange-100 text-orange-800 text-[7px] font-semibold">First Aid</span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[7px] font-semibold">Teaching</span>
                </div>
                <div className="text-[8px] text-orange-600 font-medium mt-1">📌 Food Distribution Drive</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-zinc-100">
              <button className="flex-1 py-1 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium text-[8px] text-center">Edit</button>
              <button className="flex-1 py-1 rounded bg-blue-50 text-blue-700 font-bold text-[8px] text-center">Assign</button>
            </div>
          </div>

          {/* Volunteer Card 2 */}
          <div className="bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs shrink-0">
                AP
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Aarav Patel</div>
                <div className="text-[8px] text-zinc-400">+91 98200 22222 · ⏱ Full Time</div>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  <span className="px-1.5 py-0.2 rounded bg-orange-100 text-orange-800 text-[7px] font-semibold">Driving</span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[7px] font-semibold">Logistics</span>
                </div>
                <div className="text-[8px] text-orange-600 font-medium mt-1">📌 Medical Camp</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-zinc-100">
              <button className="flex-1 py-1 rounded bg-zinc-100 text-zinc-700 font-medium text-[8px] text-center">Edit</button>
              <button className="flex-1 py-1 rounded bg-blue-50 text-blue-700 font-bold text-[8px] text-center">Assign</button>
            </div>
          </div>

          {/* Volunteer Card 3 */}
          <div className="bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-xs shrink-0">
                SR
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Sneha Reddy</div>
                <div className="text-[8px] text-zinc-400">+91 98300 33333 · ⏱ Evenings</div>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  <span className="px-1.5 py-0.2 rounded bg-orange-100 text-orange-800 text-[7px] font-semibold">Counselling</span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[7px] font-semibold">Teaching</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-zinc-100">
              <button className="flex-1 py-1 rounded bg-zinc-100 text-zinc-700 font-medium text-[8px] text-center">Edit</button>
              <button className="flex-1 py-1 rounded bg-blue-50 text-blue-700 font-bold text-[8px] text-center">Assign</button>
            </div>
          </div>

          {/* Volunteer Card 4 */}
          <div className="bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                RM
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Rohan Mehta</div>
                <div className="text-[8px] text-zinc-400">+91 98400 44444 · ⏱ Weekends</div>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  <span className="px-1.5 py-0.2 rounded bg-orange-100 text-orange-800 text-[7px] font-semibold">Construction</span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[7px] font-semibold">Plumbing</span>
                </div>
                <div className="text-[8px] text-orange-600 font-medium mt-1">📌 Free Medical Camp</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-zinc-100">
              <button className="flex-1 py-1 rounded bg-zinc-100 text-zinc-700 font-medium text-[8px] text-center">Edit</button>
              <button className="flex-1 py-1 rounded bg-blue-50 text-blue-700 font-bold text-[8px] text-center">Assign</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 5. PROOF VERIFICATION & AI AUDITING --- */
const ProofVerificationMock: React.FC<{ isHighRes?: boolean; className?: string }> = ({ isHighRes, className }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans flex flex-col select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Top Navbar */}
      <div className="h-10 bg-white border-b border-zinc-200 px-3 sm:px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-black text-xs sm:text-sm">SAHARA</span>
          <span className="text-zinc-400">/</span>
          <span className="font-semibold text-zinc-800 text-[11px] sm:text-xs">Proof Verification</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px]">
            GV
          </div>
          <span className="text-[10px] font-semibold text-zinc-700 hidden sm:inline">NGO Admin</span>
        </div>
      </div>

      <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-[#fafafa]">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-xs sm:text-sm text-zinc-900">Proof Verification Queue</h3>
          <span className="text-[8px] text-zinc-500">Automated AI confidence auditing</span>
        </div>

        {/* Verification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-zinc-200 shadow-xs overflow-hidden">
            <div className="h-20 bg-rose-50 flex items-center justify-center relative">
              <div className="w-8 h-10 rounded-full bg-rose-500/80 text-white flex items-center justify-center text-[10px] font-bold">
                🩸
              </div>
              <span className="absolute top-2 left-2 px-1.5 py-0.2 rounded bg-white text-zinc-700 font-bold text-[7px]">blood</span>
              <span className="absolute top-2 right-2 px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[7px]">approved</span>
            </div>
            <div className="p-2.5">
              <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Blood Donation Camp</div>
              <div className="text-[8px] text-zinc-500">👤 Deepika Nair · May 5 · 4:30 PM</div>
              <div className="mt-2 px-2 py-1 rounded bg-emerald-50 text-emerald-700 font-bold text-[8px] flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> AI: Verified · 94%
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-zinc-200 shadow-xs overflow-hidden">
            <div className="h-20 bg-amber-50 flex items-center justify-center relative">
              <div className="w-10 h-8 rounded-lg bg-amber-500/80 text-white flex items-center justify-center text-[10px] font-bold">
                🍱
              </div>
              <span className="absolute top-2 left-2 px-1.5 py-0.2 rounded bg-white text-zinc-700 font-bold text-[7px]">food</span>
              <span className="absolute top-2 right-2 px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[7px]">approved</span>
            </div>
            <div className="p-2.5">
              <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Food Distribution Drive</div>
              <div className="text-[8px] text-zinc-500">👤 Priya Sharma · Apr 23 · 2:00 PM</div>
              <div className="mt-2 px-2 py-1 rounded bg-amber-50 text-amber-700 font-bold text-[8px] flex items-center gap-1">
                <AlertTriangle className="w-2.5 h-2.5" /> AI: Suspicious · 44%
              </div>
              <div className="text-[7px] text-zinc-400 italic mt-0.5">"Well documented, great work!"</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-zinc-200 shadow-xs overflow-hidden">
            <div className="h-20 bg-emerald-50 flex items-center justify-center relative">
              <div className="w-10 h-10 rounded-full bg-emerald-500/80 text-white flex items-center justify-center text-[10px] font-bold">
                🌳
              </div>
              <span className="absolute top-2 left-2 px-1.5 py-0.2 rounded bg-white text-zinc-700 font-bold text-[7px]">tree</span>
              <span className="absolute top-2 right-2 px-2 py-0.2 rounded-full bg-rose-100 text-rose-700 font-bold text-[7px]">rejected</span>
            </div>
            <div className="p-2.5">
              <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Tree Plantation Drive</div>
              <div className="text-[8px] text-zinc-500">👤 Rohan Mehta · May 8 · 10:15 AM</div>
              <div className="mt-2 px-2 py-1 rounded bg-rose-50 text-rose-700 font-bold text-[8px] flex items-center gap-1">
                <AlertTriangle className="w-2.5 h-2.5" /> AI: Suspicious · 40%
              </div>
            </div>
          </div>

          {/* Card 4: System Architecture / Flow */}
          <div className="bg-white rounded-xl border border-zinc-200 shadow-xs overflow-hidden">
            <div className="h-20 bg-blue-50 flex items-center justify-center relative">
              <div className="flex items-center gap-1 text-[7px] font-bold text-zinc-700">
                <span className="px-1 py-0.5 bg-emerald-100 rounded">1. Apps</span> → 
                <span className="px-1 py-0.5 bg-blue-100 rounded">2. Backend API</span> → 
                <span className="px-1 py-0.5 bg-purple-100 rounded">3. Gemini AI</span>
              </div>
              <span className="absolute top-2 right-2 px-2 py-0.2 rounded-full bg-rose-100 text-rose-700 font-bold text-[7px]">rejected</span>
            </div>
            <div className="p-2.5">
              <div className="font-bold text-[10px] sm:text-[11px] text-zinc-900">Free Medical Camp</div>
              <div className="text-[8px] text-zinc-500">👤 Aarav Patel · Apr 20 · 11:00 AM</div>
              <div className="mt-2 px-2 py-1 rounded bg-emerald-50 text-emerald-700 font-bold text-[8px] flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> AI: Verified · 84%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 6. DONOR IMPACT & ALLOCATION ANALYTICS --- */
const DonorImpactMock: React.FC<{ isHighRes?: boolean; className?: string }> = ({ isHighRes, className }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans flex flex-col select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Top Bar */}
      <div className="h-10 bg-white border-b border-zinc-200 px-3 sm:px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-black text-xs sm:text-sm">SAHARA</span>
          <span className="text-zinc-400">/</span>
          <span className="font-semibold text-zinc-800 text-[11px] sm:text-xs">Impact</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px]">
            GV
          </div>
          <span className="text-[10px] font-semibold text-zinc-700 hidden sm:inline">Donor / NGO</span>
        </div>
      </div>

      <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-[#fafafa]">
        <div>
          <h3 className="font-extrabold text-xs sm:text-sm text-zinc-900">Your Impact</h3>
          <p className="text-[9px] text-zinc-500">See the real difference your donations and allocations are making.</p>
        </div>

        {/* 4 Big KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs text-center">
            <Users className="w-4 h-4 text-purple-600 mx-auto mb-1" />
            <div className="text-base sm:text-lg font-black text-zinc-900">1,240+</div>
            <div className="text-[8px] font-bold text-zinc-700">People Benefited</div>
            <div className="text-[7px] text-zinc-400">Across all NGOs</div>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs text-center">
            <Building2 className="w-4 h-4 text-amber-600 mx-auto mb-1" />
            <div className="text-base sm:text-lg font-black text-zinc-900">18</div>
            <div className="text-[8px] font-bold text-zinc-700">Areas Served</div>
            <div className="text-[7px] text-zinc-400">Districts</div>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs text-center">
            <Heart className="w-4 h-4 text-rose-600 mx-auto mb-1" />
            <div className="text-base sm:text-lg font-black text-zinc-900">4,500+</div>
            <div className="text-[8px] font-bold text-zinc-700">Meals Provided</div>
            <div className="text-[7px] text-zinc-400">This month</div>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs text-center">
            <Activity className="w-4 h-4 text-teal-600 mx-auto mb-1" />
            <div className="text-base sm:text-lg font-black text-zinc-900">12</div>
            <div className="text-[8px] font-bold text-zinc-700">Medical Camps</div>
            <div className="text-[7px] text-zinc-400">Organized</div>
          </div>
        </div>

        {/* Donation Impact by Category Bar */}
        <div className="bg-white p-3 rounded-xl border border-zinc-200 shadow-xs">
          <div className="font-bold text-[10px] sm:text-[11px] text-zinc-800 mb-2">Donation Impact by Category</div>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[8px] font-semibold text-zinc-700 mb-0.5">
                <span>Health</span>
                <span>42%</span>
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                <div className="bg-rose-500 h-full rounded-full" style={{ width: '42%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[8px] font-semibold text-zinc-700 mb-0.5">
                <span>Food</span>
                <span>28%</span>
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '28%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[8px] font-semibold text-zinc-700 mb-0.5">
                <span>Education</span>
                <span>19%</span>
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: '19%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[8px] font-semibold text-zinc-700 mb-0.5">
                <span>Relief</span>
                <span>11%</span>
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '11%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 7. ISSUE REPORTING & GEOLOCATION MAPPING --- */
const IssueReportingMock: React.FC<{ isHighRes?: boolean; className?: string }> = ({ isHighRes, className }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans flex flex-col select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Header */}
      <div className="h-10 bg-white border-b border-zinc-200 px-3 sm:px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-black text-xs sm:text-sm">SAHARA</span>
          <span className="text-zinc-400">/</span>
          <span className="font-semibold text-zinc-800 text-[11px] sm:text-xs">Issues</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px]">
            GV
          </div>
          <span className="text-[10px] font-semibold text-zinc-700 hidden sm:inline">Reporter</span>
        </div>
      </div>

      <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-2.5 bg-[#fafafa]">
        {/* Form Inputs */}
        <div className="space-y-1">
          <label className="text-[8px] font-extrabold uppercase text-zinc-500">ISSUE TYPE</label>
          <div className="bg-white border border-zinc-200 rounded-xl px-2.5 py-1.5 flex justify-between items-center text-[9px] font-medium text-zinc-800 shadow-2xs">
            <span>Delay</span>
            <ChevronDown className="w-3 h-3 text-zinc-400" />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[8px] font-extrabold uppercase text-zinc-500">DESCRIPTION</label>
          <div className="bg-white border border-zinc-200 rounded-xl px-2.5 py-2 text-[9px] text-zinc-800 shadow-2xs min-h-[38px]">
            delay in reporting issue
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[8px] font-extrabold uppercase text-zinc-500">LOCATION (OPTIONAL)</label>
          <div className="bg-white border border-zinc-200 rounded-xl px-2.5 py-1 text-[8px] text-zinc-400 flex items-center gap-1.5 shadow-2xs mb-1.5">
            <Search className="w-2.5 h-2.5 text-zinc-400" />
            <span>Search a place or click on the map...</span>
          </div>

          {/* Map canvas */}
          <div className="h-24 sm:h-28 rounded-xl border border-zinc-300 relative bg-[#e0f2fe] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="text-[8px] font-bold text-zinc-600 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-orange-500 animate-bounce" />
              <span>Odisha / Bay of Bengal Coastal Zone</span>
            </div>
            <div className="absolute bottom-1 right-1 bg-white/80 px-1 rounded text-[6px] text-zinc-500">
              Leaflet | © OpenStreetMap
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button className="px-4 py-1.5 rounded-xl bg-orange-500 text-white font-bold text-[9px] shadow-xs hover:bg-orange-600">
            Submit Issue
          </button>
          <button className="px-3 py-1.5 rounded-xl bg-zinc-100 text-zinc-600 font-medium text-[9px]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- 8. LOGIN & ROLE-BASED ACCESS --- */
const LoginRoleMock: React.FC<{ isHighRes?: boolean; className?: string }> = ({ isHighRes, className }) => {
  return (
    <div className={`w-full h-full bg-linear-to-b from-[#faf5ef] to-[#f4ebe1] text-zinc-800 font-sans flex items-center justify-center select-none overflow-y-auto text-[10px] sm:text-xs p-3 sm:p-5 ${className}`}>
      {/* Center Auth Card */}
      <div className="w-full max-w-sm bg-white rounded-2xl border border-amber-200/90 shadow-xl p-4 sm:p-6 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center gap-1.5 font-black text-amber-600 text-base sm:text-lg mb-1">
          <span className="text-orange-500 font-black tracking-wider">SAHARA</span>
        </div>
        <h4 className="font-extrabold text-sm sm:text-base text-zinc-900 flex items-center gap-1">
          Sign in to SAHARA
        </h4>
        <p className="text-[8px] sm:text-[9px] text-zinc-500 mb-3">Resource & relief allocation management portal</p>

        {/* Input Fields */}
        <div className="w-full space-y-2.5 text-left">
          {/* Role Selection Grid */}
          <div>
            <label className="text-[8px] font-bold text-zinc-700 uppercase tracking-wider block mb-1">
              Select Your Role
            </label>
            <div className="grid grid-cols-5 gap-1">
              <div className="p-1 rounded-lg border-2 border-orange-500 bg-orange-50/80 text-center flex flex-col items-center justify-center">
                <span className="text-xs">🏛</span>
                <span className="text-[7px] font-bold text-orange-950 mt-0.5">NGO</span>
              </div>
              <div className="p-1 rounded-lg border border-zinc-200 bg-zinc-50/80 text-center flex flex-col items-center justify-center text-zinc-600">
                <span className="text-xs">📝</span>
                <span className="text-[7px] font-medium mt-0.5">Reporter</span>
              </div>
              <div className="p-1 rounded-lg border border-zinc-200 bg-zinc-50/80 text-center flex flex-col items-center justify-center text-zinc-600">
                <span className="text-xs">🛡</span>
                <span className="text-[7px] font-medium mt-0.5">Admin</span>
              </div>
              <div className="p-1 rounded-lg border border-zinc-200 bg-zinc-50/80 text-center flex flex-col items-center justify-center text-zinc-600">
                <span className="text-xs">🤝</span>
                <span className="text-[7px] font-medium mt-0.5">Volunteer</span>
              </div>
              <div className="p-1 rounded-lg border border-zinc-200 bg-zinc-50/80 text-center flex flex-col items-center justify-center text-zinc-600">
                <span className="text-xs">💛</span>
                <span className="text-[7px] font-medium mt-0.5">Donor</span>
              </div>
            </div>
          </div>

          <div>
            <label className="text-[8px] font-bold text-zinc-700 uppercase tracking-wider block mb-0.5">Email Address</label>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-50 border border-zinc-200 rounded-xl text-[9px] text-zinc-800 shadow-2xs">
              <Mail className="w-3 h-3 text-orange-500 shrink-0" />
              <span className="truncate">arti09834@gmail.com</span>
            </div>
          </div>

          <div>
            <label className="text-[8px] font-bold text-zinc-700 uppercase tracking-wider block mb-0.5">Password</label>
            <div className="flex items-center justify-between px-2.5 py-1.5 bg-zinc-50 border border-zinc-200 rounded-xl text-[9px] text-zinc-800 shadow-2xs">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-orange-500 shrink-0" />
                <span>••••••••••••</span>
              </div>
              <Eye className="w-3 h-3 text-zinc-400" />
            </div>
          </div>

          <button className="w-full py-2 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-[9px] sm:text-[10px] shadow-sm shadow-orange-500/20 transition cursor-pointer">
            Sign In to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
