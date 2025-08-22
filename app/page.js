'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Background image with zoom-in on load */}
      <img
        className="absolute inset-0 h-full w-full object-cover z-0 will-change-transform animate-[bg-zoom-in_6s_ease-out_forwards] origin-center"
        src="/backk.jpg"
        alt="Background"
      />

      {/* Gray transparent overlay */}
      <div className="absolute inset-0 bg-[#4f525740] z-10" />

      {/* Top bar (menu icon) */}
      <header className="absolute top-6 right-6 z-30">
        <button
          aria-label="Open Menu"
          onClick={() => setMenuOpen(true)}
          className="flex flex-col justify-center items-center gap-1"
        >
          <span className="h-[2px] w-7 bg-white" />
          <span className="h-[2px] w-7 bg-white" />
          <span className="h-[2px] w-7 bg-white" />
        </button>
      </header>

      {/* Centered content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        {/* Top pair */}
        <div className="grid grid-cols-2 gap-x-40 mb-6 w-5/12">
          <a
            href="#events"
            className="relative overflow-hidden text-center text-xl tracking-widest uppercase font-['Orbitron',_sans-serif] transition-all duration-200 ease-in-out hover:text-white bg-white/30 text-black w-64 h-12 flex items-center justify-center animate-[btn-wipe-blue_1.1s_ease-out_forwards]"
          >
            EVENTS
          </a>
          <a
            href="#artists"
            className="relative overflow-hidden text-center text-xl tracking-widest uppercase font-['Orbitron',_sans-serif] transition-all duration-200 ease-in-out hover:text-white bg-white/30 text-black w-64 h-12 flex items-center justify-center animate-[btn-wipe-yellow_1.1s_ease-out_forwards]"
          >
            ARTISTS
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <img src="/logo.png" alt="Logo" className="h-16 w-16 object-contain" />
        </div>

        {/* Bottom pair */}
        <div className="grid grid-cols-2 gap-x-40 mt-6 w-5/12">
          <a
            href="#calendar"
            className="relative overflow-hidden text-center text-xl tracking-widest uppercase font-['Orbitron',_sans-serif] transition-all duration-200 ease-in-out hover:text-white bg-white/30 text-black w-64 h-12 flex items-center justify-center animate-[btn-wipe-yellow_1.1s_ease-out_forwards_1000ms]"
          >
            CALENDAR
          </a>
          <a
            href="#contact"
            className="relative overflow-hidden text-center text-xl tracking-widest uppercase font-['Orbitron',_sans-serif] transition-all duration-200 ease-in-out hover:text-white bg-white/30 text-black w-64 h-12 flex items-center justify-center animate-[btn-wipe-yellow_1.1s_ease-out_forwards_1250ms]"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Essential animations only */}
      <style jsx global>{`
        @keyframes bg-zoom-in {
          0% { transform: scale(1); }
          100% { transform: scale(1.10); }
        }
        
        @keyframes btn-wipe-yellow {
          0%   { background-color: #ffd54a; }
          70%  { background-color: #ffd54a; }
          100% { background-color: rgba(255, 255, 255, 0.3); }
        }
        
        @keyframes btn-wipe-blue {
          0%   { background-color: #7f40f1; }
          70%  { background-color: #7f40f1; }
          100% { background-color: rgba(255, 255, 255, 0.3); }
        }
      `}</style>
    </main>
  );
}
