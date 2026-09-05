import React, { ChangeEvent, useEffect, useState } from 'react';
import { ImagePlus } from 'lucide-react';

interface UploadImagemProps {
  label?: string;
  onChange?: (arquivo: File | null) => void;
}

export function UploadImagem({ label = 'Imagem da ótica', onChange }: UploadImagemProps) {
  const [imagem, setImagem] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!imagem) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(imagem);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [imagem]);

  const handleImagem = (event: ChangeEvent<HTMLInputElement>) => {
    const arquivo = event.target.files?.[0] || null;
    setImagem(arquivo);
    onChange?.(arquivo);
  };

  return (
    <div>
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</label>
      <div className="flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-900/60">
        {preview ? (
          <img src={preview} alt="Prévia da imagem selecionada" className="h-16 w-16 shrink-0 rounded-xl object-cover" />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm dark:bg-slate-800"><ImagePlus size={22} /></div>
        )}
        <div className="min-w-0 flex-1">
          <label className="inline-flex cursor-pointer items-center rounded-xl bg-[#6d4aff] px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-[#5637e8]">
            Escolher imagem
            <input type="file" accept="image/*" onChange={handleImagem} className="sr-only" />
          </label>
          <p className="mt-2 truncate text-[11px] text-slate-500 dark:text-slate-400">{imagem?.name || 'PNG, JPG ou WEBP'}</p>
        </div>
      </div>
    </div>
  );
}