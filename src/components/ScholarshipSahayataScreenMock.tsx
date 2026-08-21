import React from 'react';
import { 
  GraduationCap, 
  Rocket, 
  ShieldCheck, 
  CreditCard, 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  UserCheck, 
  Sparkles, 
  Search, 
  Loader2,
  Lock,
  IndianRupee,
  Smartphone,
  Check
} from 'lucide-react';

interface ScreenProps {
  isHighRes?: boolean;
  className?: string;
}

/* =========================================================================
   1. WELCOME & REGISTRATION SCREEN (Unlock Your Future)
   ========================================================================= */
export const ScholarshipWelcomeScreen: React.FC<ScreenProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans grid grid-cols-1 md:grid-cols-2 select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Left Teal Banner */}
      <div className="relative bg-linear-to-br from-[#0d8275] via-[#109385] to-[#14b8a6] text-white p-5 sm:p-7 flex flex-col justify-between overflow-hidden">
        {/* Subtle decorative background student silhouette/library overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)`
        }} />

        {/* Brand App Icon */}
        <div className="relative z-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-b from-[#6ee7b7] via-[#2dd4bf] to-[#0f766e] shadow-xl p-0.5 flex flex-col items-center justify-center text-center border border-white/30">
            <div className="w-full h-full bg-linear-to-b from-white/20 to-teal-900/30 rounded-[14px] flex flex-col items-center justify-center p-1">
              <div className="relative">
                <GraduationCap className="w-7 h-7 text-white drop-shadow-md" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 font-black text-[9px] text-amber-300 drop-shadow">₹</span>
              </div>
              <span className="text-[6px] font-black tracking-tighter text-white uppercase leading-none mt-0.5">
                Scholarship<br />Sahayata
              </span>
            </div>
          </div>
        </div>

        {/* Hero Title & Description */}
        <div className="relative z-10 my-auto py-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight mb-2 sm:mb-3 drop-shadow-xs">
            Unlock Your Future
          </h2>
          <p className="text-teal-50 text-[9px] sm:text-[11px] leading-relaxed max-w-xs opacity-95">
            Scholarship Sahayata is your dedicated partner in navigating the world of educational funding. We simplify the process so you can focus on what matters most: your studies.
          </p>
        </div>
      </div>

      {/* Right Content Pane - Welcome to Sahayata */}
      <div className="bg-white p-5 sm:p-7 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-5">
        {/* Graduate Celebration Illustration */}
        <div className="w-full max-w-[200px] sm:max-w-[230px] aspect-4/3 rounded-2xl bg-teal-50/60 border border-teal-100/80 p-3 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
          {/* Confetti & Caps flying */}
          <div className="absolute top-2 left-4 text-xs">🎓</div>
          <div className="absolute top-3 right-5 text-xs">✨</div>
          <div className="absolute top-6 left-1/2 text-[10px]">🎉</div>

          {/* Three Graduates Vector Style Representation */}
          <div className="flex items-end justify-center gap-2 mt-3">
            {/* Student 1 */}
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 border border-amber-300 flex items-center justify-center text-[8px]">🙋‍♂️</div>
              <div className="w-8 h-10 bg-linear-to-b from-blue-950 to-indigo-950 rounded-t-lg -mt-1 flex flex-col items-center pt-1">
                <div className="w-2 h-3 bg-teal-400 rounded-xs" />
              </div>
            </div>
            {/* Center Student 2 (Female Graduate) */}
            <div className="flex flex-col items-center -mx-1 z-10">
              <div className="text-[10px] -mb-1 animate-bounce">🎓</div>
              <div className="w-6 h-6 rounded-full bg-orange-200 border border-orange-300 flex items-center justify-center text-[9px]">🙋‍♀️</div>
              <div className="w-10 h-12 bg-linear-to-b from-blue-900 to-indigo-900 rounded-t-lg -mt-1 flex flex-col items-center pt-1 shadow-md">
                <div className="w-3 h-4 bg-amber-400 rounded-xs" />
              </div>
            </div>
            {/* Student 3 */}
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-[8px]">🙋‍♂️</div>
              <div className="w-8 h-10 bg-linear-to-b from-blue-950 to-indigo-950 rounded-t-lg -mt-1 flex flex-col items-center pt-1">
                <div className="w-2 h-3 bg-teal-400 rounded-xs" />
              </div>
            </div>
          </div>
          <span className="text-[8px] font-bold text-teal-800 tracking-wider mt-1.5">EMPOWERING STUDENTS</span>
        </div>

        {/* Heading */}
        <div className="space-y-1 sm:space-y-1.5 max-w-xs">
          <h3 className="text-base sm:text-xl font-extrabold text-[#0f2d4a] tracking-tight">
            Welcome to Sahayata
          </h3>
          <p className="text-[9px] sm:text-[10.5px] text-zinc-500 leading-relaxed">
            Your guide to securing scholarships and managing your educational funds with ease.
          </p>
        </div>

        {/* Action Button */}
        <div className="w-full max-w-xs pt-1">
          <button className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-linear-to-r from-[#0d3b66] via-[#028090] to-[#00a896] hover:from-[#082a4a] hover:to-[#028090] text-white font-bold text-[10px] sm:text-xs shadow-md shadow-teal-700/20 transition-all flex items-center justify-center gap-2 group cursor-pointer">
            <span>Register to Continue</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   2. CHECK DBT STATUS SCREEN (Ready for Takeoff! / Check Your Status)
   ========================================================================= */
export const ScholarshipCheckStatusScreen: React.FC<ScreenProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans grid grid-cols-1 md:grid-cols-2 select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Left Teal Banner with Rocket */}
      <div className="relative bg-linear-to-br from-[#0d8275] via-[#109385] to-[#14b8a6] text-white p-5 sm:p-7 flex flex-col justify-between overflow-hidden">
        {/* App Icon */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-b from-[#6ee7b7] via-[#2dd4bf] to-[#0f766e] shadow-lg p-0.5 flex flex-col items-center justify-center text-center border border-white/30">
            <div className="w-full h-full bg-linear-to-b from-white/20 to-teal-900/30 rounded-[14px] flex flex-col items-center justify-center p-1">
              <GraduationCap className="w-6 h-6 text-white drop-shadow-md" />
              <span className="text-[5.5px] font-black tracking-tighter text-white uppercase leading-none mt-0.5">
                Scholarship<br />Sahayata
              </span>
            </div>
          </div>
        </div>

        {/* Hero Title with Rocket */}
        <div className="relative z-10 my-auto py-3 space-y-2">
          <div className="inline-flex p-1.5 bg-white/15 backdrop-blur-xs rounded-xl border border-white/20">
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
            Ready for Takeoff!
          </h2>
          <p className="text-teal-50 text-[9px] sm:text-[11px] leading-relaxed max-w-xs opacity-95">
            Welcome to your personal dashboard. From here, you can check your DBT status, access helpful guides, and connect with our community.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div className="relative z-10 flex items-center gap-2 pt-2 border-t border-teal-400/30 text-[8px] text-teal-100">
          <span className="flex items-center gap-1 font-semibold">
            <Check className="w-3 h-3 text-amber-300" /> Aadhaar Seeding
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 font-semibold">
            <Check className="w-3 h-3 text-amber-300" /> Direct Bank Transfer
          </span>
        </div>
      </div>

      {/* Right Content Pane - Check Your Status */}
      <div className="bg-white p-5 sm:p-7 flex flex-col items-center justify-center text-center space-y-3.5 sm:space-y-4">
        {/* Security / Verification Shield Graphic */}
        <div className="w-full max-w-[180px] sm:max-w-[200px] aspect-4/3 rounded-2xl bg-indigo-50/70 border border-indigo-100 p-3 flex flex-col items-center justify-center relative shadow-inner">
          <div className="relative flex items-center justify-center">
            {/* Blue Shield with Lock */}
            <div className="w-14 h-16 bg-linear-to-b from-blue-600 to-indigo-700 rounded-b-2xl rounded-t-lg shadow-md flex items-center justify-center text-white border-2 border-indigo-200">
              <Lock className="w-7 h-7 text-amber-300 drop-shadow" />
            </div>
            {/* Verified gears & user silhouette */}
            <div className="absolute -bottom-1 -left-3 bg-amber-400 text-blue-950 p-1 rounded-md text-[8px] font-bold shadow">
              DBT ✓
            </div>
            <div className="absolute -top-1 -right-2 bg-teal-500 text-white p-1 rounded-full text-[8px] shadow">
              ⚙️
            </div>
          </div>
          <span className="text-[8px] font-bold text-indigo-900 tracking-wider mt-2">NPCI SEEDING ENGINE</span>
        </div>

        {/* Heading */}
        <div className="space-y-1 max-w-xs">
          <h3 className="text-base sm:text-xl font-extrabold text-[#0f2d4a] tracking-tight">
            Check Your Status
          </h3>
          <p className="text-[9px] sm:text-[10px] text-zinc-500 leading-relaxed">
            Enter your 12-digit Aadhaar number to instantly check your DBT linking status.
          </p>
        </div>

        {/* Aadhaar Input Box */}
        <div className="w-full max-w-xs space-y-2 text-left">
          <div>
            <label className="text-[8.5px] font-bold text-zinc-700 uppercase tracking-wider block mb-1">
              Aadhaar Number
            </label>
            <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-[10px] sm:text-xs font-mono font-medium text-zinc-800 shadow-2xs">
              <UserCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span className="tracking-widest">7578 5857 8578</span>
            </div>
          </div>

          {/* Checking Status Button with Spinner */}
          <div className="w-full pt-1">
            <button className="w-full py-2.5 px-4 rounded-xl bg-blue-100 border border-blue-300/80 text-blue-800 font-bold text-[9.5px] sm:text-[11px] shadow-xs flex items-center justify-center gap-2 cursor-wait">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
              <span>Checking...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. ACTION NEEDED SCREEN (Ready for Takeoff! / Action Needed!)
   ========================================================================= */
export const ScholarshipActionNeededScreen: React.FC<ScreenProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full bg-[#f8fafc] text-zinc-800 font-sans grid grid-cols-1 md:grid-cols-2 select-none overflow-hidden text-[10px] sm:text-xs ${className}`}>
      {/* Left Teal Banner with Rocket */}
      <div className="relative bg-linear-to-br from-[#0d8275] via-[#109385] to-[#14b8a6] text-white p-5 sm:p-7 flex flex-col justify-between overflow-hidden">
        {/* App Icon */}
        <div className="relative z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-b from-[#6ee7b7] via-[#2dd4bf] to-[#0f766e] shadow-lg p-0.5 flex flex-col items-center justify-center text-center border border-white/30">
            <div className="w-full h-full bg-linear-to-b from-white/20 to-teal-900/30 rounded-[14px] flex flex-col items-center justify-center p-1">
              <GraduationCap className="w-6 h-6 text-white drop-shadow-md" />
              <span className="text-[5.5px] font-black tracking-tighter text-white uppercase leading-none mt-0.5">
                Scholarship<br />Sahayata
              </span>
            </div>
          </div>
        </div>

        {/* Hero Title with Rocket */}
        <div className="relative z-10 my-auto py-3 space-y-2">
          <div className="inline-flex p-1.5 bg-white/15 backdrop-blur-xs rounded-xl border border-white/20">
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
            Ready for Takeoff!
          </h2>
          <p className="text-teal-50 text-[9px] sm:text-[11px] leading-relaxed max-w-xs opacity-95">
            Welcome to your personal dashboard. From here, you can check your DBT status, access helpful guides, and connect with our community.
          </p>
        </div>

        {/* Status Indicator */}
        <div className="relative z-10 flex items-center gap-2 pt-2 border-t border-teal-400/30 text-[8px] text-teal-100">
          <span className="flex items-center gap-1 font-semibold text-amber-300">
            <AlertCircle className="w-3 h-3" /> Action Required for Disbursement
          </span>
        </div>
      </div>

      {/* Right Content Pane - Action Needed! */}
      <div className="bg-white p-5 sm:p-7 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-5">
        {/* Red POS / Card Machine Alert Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500 shadow-xl shadow-red-500/25 border-4 border-red-100 flex items-center justify-center text-white">
          <div className="relative flex flex-col items-center justify-center">
            {/* POS Machine Illustration */}
            <div className="w-8 h-10 bg-white rounded-md p-1 flex flex-col items-center justify-between text-red-600 shadow-xs">
              <div className="w-full bg-red-100 h-2 rounded-[2px] flex items-center justify-center">
                <span className="text-[5px] font-black">₹</span>
              </div>
              <div className="grid grid-cols-3 gap-0.5 w-full">
                <div className="w-full h-1 bg-zinc-200 rounded-[1px]" />
                <div className="w-full h-1 bg-zinc-200 rounded-[1px]" />
                <div className="w-full h-1 bg-zinc-200 rounded-[1px]" />
                <div className="w-full h-1 bg-zinc-200 rounded-[1px]" />
                <div className="w-full h-1 bg-zinc-200 rounded-[1px]" />
                <div className="w-full h-1 bg-zinc-200 rounded-[1px]" />
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -right-2 top-0 w-6 h-4 bg-amber-400 rounded-[2px] border border-white shadow-xs rotate-12 flex items-center justify-center text-[4px] font-black text-blue-950">
              DBT
            </div>
          </div>
        </div>

        {/* Bold Title & Guidance */}
        <div className="space-y-1.5 max-w-xs">
          <h3 className="text-lg sm:text-2xl font-black text-[#0f2d4a] tracking-tight">
            Action Needed!
          </h3>
          <p className="text-[9.5px] sm:text-[11px] text-zinc-600 leading-relaxed font-medium">
            No bank account is ready for DBT. Let's fix this to avoid delays.
          </p>
        </div>

        {/* Vibrant Red CTA Button */}
        <div className="w-full max-w-xs pt-1">
          <button className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-[#e63946] hover:bg-[#d62839] text-white font-extrabold text-[10px] sm:text-xs shadow-md shadow-red-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-wider">
            <span>Show Me How to Fix This</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- Screen Dispatcher Component --- */
export const ScholarshipSahayataScreenMock: React.FC<{
  screenIndex: number;
  isHighRes?: boolean;
  className?: string;
}> = ({ screenIndex, isHighRes = false, className = '' }) => {
  switch (screenIndex) {
    case 0:
      return <ScholarshipWelcomeScreen isHighRes={isHighRes} className={className} />;
    case 1:
      return <ScholarshipCheckStatusScreen isHighRes={isHighRes} className={className} />;
    case 2:
      return <ScholarshipActionNeededScreen isHighRes={isHighRes} className={className} />;
    default:
      return <ScholarshipWelcomeScreen isHighRes={isHighRes} className={className} />;
  }
};
