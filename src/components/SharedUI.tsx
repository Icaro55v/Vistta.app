import React from 'react';
import { LucideIcon, X } from 'lucide-react';

interface DashCardProps { 
  title: string; 
  value: string | number; 
  subtitle?: string; 
  icon: LucideIcon; 
  bg?: string; 
  color?: string; 
  border?: string; 
}

export function DashCard({ title, value, subtitle, icon: Icon, bg = "bg-white dark:bg-slate-800", color = "text-slate-900 dark:text-white", border = "border-slate-100 dark:border-slate-700" }: DashCardProps) {
  return (
    <div className={`p-6 rounded-3xl border shadow-sm ${bg} ${border}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${bg === 'bg-white dark:bg-slate-800' ? 'bg-indigo-50 text-[#4A3AFF]' : color.replace('text-', 'bg-').replace('500', '100') + ' ' + color}`}>
          <Icon size={24} />
        </div>
      </div>
      <div>
        <h3 className="text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1">{title}</h3>
        <div className={`text-2xl font-black ${color}`}>{value}</div>
        {subtitle && <p className="text-[12px] font-medium text-slate-400 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

export function ActionCard({ icon: Icon, title, desc, onClick, color, bg }: any) {
  return (
    <button onClick={onClick} className={`text-left p-6 rounded-3xl border border-transparent hover:border-slate-200 shadow-sm transition-all group ${bg}`}>
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-white shadow-sm ${color} group-hover:scale-110 transition-transform`}>
        <Icon size={24} />
      </div>
      <h3 className={`text-[16px] font-bold mb-2 ${color}`}>{title}</h3>
      <p className="text-[13px] text-slate-500">{desc}</p>
    </button>
  );
}

export function ModalBase({ open, onClose, title, width = "max-w-md", children }: any) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className={`bg-white dark:bg-slate-800 rounded-[32px] w-full ${width} shadow-2xl flex flex-col max-h-[90vh] animate-fade-in`}>
        <div className="flex justify-between items-center gap-4 p-6 border-b border-slate-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h2>
          <button onClick={onClose} className="shrink-0 p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-500 hover:text-rose-500 transition-colors"><X size={20} /></button>
        </div>
        <div className="overflow-y-auto custom-scrollbar p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

// AQUI ESTÁ A LOGO SENDO EXPORTADA CORRETAMENTE
export function LogoVistta({ className = "", solidWhite = false }: { className?: string, solidWhite?: boolean }) {
  const cLeft = solidWhite ? "currentColor" : "white";
  const cRight = solidWhite ? "currentColor" : "#a094ff";
  
  return (
    <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
       <g stroke={cLeft} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
         <circle cx="38" cy="36" r="14" />
         <path d="M 28 26 Q 16 12 10 22" />
       </g>
       <g stroke={cRight} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
         <circle cx="82" cy="36" r="14" />
         <path d="M 92 26 Q 104 12 110 22" />
         <path d="M 52 36 Q 60 28 68 36" />
       </g>
    </svg>
  );
}