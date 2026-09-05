import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashCardProps { title: string; value: string | number; subtitle?: string; icon: LucideIcon; bg?: string; color?: string; border?: string; }

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

// Implemente o ActionCard, ModalBase e LogoVistta aqui, aplicando tipagem nas propriedades (Props) da mesma forma que feito acima.
