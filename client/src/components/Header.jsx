import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3.5 print:hidden">
            <div className="flex items-center gap-2.5">
                <img
                    className="h-14 w-auto rounded-lg bg-white p-[3px] px-[6px] shadow-[0_4px_12px_rgba(15,23,42,0.25)]"
                    src={logo}
                    alt="ULe Academy Logo"
                />
                <div>
                    {/* Changed pb-[-16px] to leading-none for tighter spacing */}
                    <div className="font-bold text-[20px] text-[#1f4b99] leading-none">
                        ULe Academy
                    </div>
                    <div className="text-[12px] text-gray-500 mt-1">
                        Indian Armed Forces – Readiness & OLQ Assessment
                    </div>
                </div>
            </div>
            <div className="text-[11px] px-2.5 py-1.5 rounded-full bg-[#e5edff] text-[#1f4b99] inline-flex items-center gap-1.5 font-semibold whitespace-nowrap">
                🎖️ Premium OLQ & Aptitude Profiling
            </div>
        </header>
    );
}