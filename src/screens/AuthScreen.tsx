import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, User } from 'firebase/auth';
import { ref, update, get } from 'firebase/database';
import { auth, db } from '../config/firebase';
import { AlertTriangle, Mail, Lock, EyeOff, Eye, Store, Package, Instagram, Linkedin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CreatorLogo, LogoVistta, ModalBase } from '../components/SharedUI';

export function AuthScreen() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authConfirmPassword, setAuthConfirmPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [legalDocument, setLegalDocument] = useState<'terms' | 'privacy' | null>(null);

  const createGoogleProfile = async (googleUser: User) => {
    const userRef = ref(db, `users/${googleUser.uid}`);
    const snapshot = await get(userRef);
    if (!snapshot.exists()) {
      await update(userRef, { role: 'admin', email: googleUser.email || '', nome: googleUser.displayName || '' });
    }
  };

  useEffect(() => {
    let ativo = true;
    const processarRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (!result || !ativo) return;
        setIsLoggingIn(true);
        await createGoogleProfile(result.user);
      } catch (error: any) {
        if (ativo) setAuthError(getGoogleErrorMessage(error));
      } finally {
        if (ativo) setIsLoggingIn(false);
      }
    };
    void processarRedirect();
    return () => { ativo = false; };
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsLoggingIn(true);
    try {
      if (authMode === 'login') {
        await signInWithEmailAndPassword(auth, authEmail, authPassword);
      } else {
        if (authPassword.length < 6) throw new Error('A senha deve ter pelo menos 6 caracteres.');
        if (authPassword !== authConfirmPassword) throw new Error('As senhas não conferem.');
        if (!acceptedTerms) throw new Error('Aceite os Termos de Uso e a Política de Privacidade para continuar.');
        const userCred = await createUserWithEmailAndPassword(auth, authEmail, authPassword);
        try {
          await update(ref(db, `users/${userCred.user.uid}`), {
            role: 'admin',
            email: authEmail,
            nome: ''
          });
        } catch (dbErr) {
          await userCred.user.delete();
          setAuthError('Falha ao registrar empresa no banco.');
        }
      }
    } catch (error: any) {
      setAuthError(error?.message || (authMode === 'login' ? 'E-mail ou senha incorretos.' : 'Erro ao autenticar.'));
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = async () => {
    setAuthError('');
    setIsLoggingIn(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await createGoogleProfile(result.user);
    } catch (error: any) {
      if (error?.code === 'auth/popup-blocked' || error?.code === 'auth/cancelled-popup-request') {
        try {
          await signInWithRedirect(auth, provider);
          return;
        } catch (redirectError: any) {
          setAuthError(getGoogleErrorMessage(redirectError));
        }
      } else {
        setAuthError(getGoogleErrorMessage(error));
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  function getGoogleErrorMessage(error: any) {
    if (error?.code === 'auth/unauthorized-domain') {
      return `Domínio não autorizado: ${window.location.hostname}. No Firebase Console, abra Authentication > Settings > Authorized domains e adicione este domínio.`;
    }
    if (error?.code === 'auth/popup-blocked') return 'O pop-up foi bloqueado. O login será redirecionado.';
    if (error?.code === 'auth/popup-closed-by-user') return 'O login do Google foi cancelado.';
    if (error?.code === 'auth/operation-not-allowed') return 'O provedor Google não está ativado no Firebase Authentication.';
    return `Não foi possível entrar com Google: ${error?.message || 'erro desconhecido.'}`;
  }

  return (
    <div className="flex min-h-[100dvh] w-full bg-[#fbfaf8] dark:bg-[#171124] text-slate-900 dark:text-white font-sans overflow-hidden">
      {/* Painel Esquerdo (VISTTA) */}
      <div className="hidden lg:flex w-[55%] bg-[#30204d] flex-col items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -right-20 top-1/4 w-80 h-80 rounded-full border border-white/10"></div>
        <div className="absolute right-8 top-1/3 w-48 h-48 rounded-full border border-[#9c4cff]/25"></div>
         
         <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
            <div className="mb-8 flex flex-col items-center">
              <div className="mb-4 flex items-center gap-4"><span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-[#080a12] p-1.5"><LogoVistta className="h-full w-full" solidWhite={false} /></span><h1 className="font-display text-[44px] font-bold tracking-[0.18em] leading-none text-white">VISTTA</h1></div>
              <p className="text-[#b99cff] tracking-[0.35em] text-[11px] uppercase font-semibold">Gestão Inteligente para Óticas</p>
              <div className="w-12 h-[2px] bg-[#9c4cff] mt-6 rounded-full"></div>
           </div>

           <h2 className="font-display text-[36px] font-medium mb-1 tracking-tight text-white/90">Sua ótica. Uma plataforma.</h2>
           <h2 className="font-display text-[38px] font-bold text-[#c78cff] mb-5 tracking-tight">Mais controle.</h2>
           
           <div className="flex items-start justify-center gap-8 mb-10 w-full">
              <div className="flex flex-col items-center flex-1 max-w-[180px]">
                 <Store size={30} className="text-[#9c4cff] mb-4" />
                 <h3 className="text-[13px] font-semibold mb-2 text-white/90">Gestão Multi-Loja</h3>
              </div>
              <div className="w-px h-24 bg-indigo-500/20 mt-4"></div>
              <div className="flex flex-col items-center flex-1 max-w-[180px]">
                 <Package size={30} className="text-[#9c4cff] mb-4" />
                 <h3 className="text-[13px] font-semibold mb-2 text-white/90">Estoque em tempo real</h3>
              </div>
           </div>
         </div>
         <a href="https://www.instagram.com/aaxxis7?stkn=MWsxMXo2cWRsdDN6cw==" target="_blank" rel="noreferrer" aria-label="Visitar o Instagram da AXXIS7, empresa desenvolvedora da VISTTA" className="absolute bottom-8 left-8 z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-3 py-2 transition-colors hover:bg-white/10 sm:left-12">
           <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#080a12] p-1"><CreatorLogo className="h-full w-full" solidWhite={false} /></span>
           <span className="text-left"><strong className="block text-xs tracking-[.16em] text-white">AXXIS7</strong><small className="block text-[9px] text-white/45">empresa desenvolvedora da VISTTA</small></span>
         </a>
      </div>

      {/* Formulário Direito */}
      <div className="flex-1 lg:w-[45%] bg-[#fbfaf8] dark:bg-[#171124] flex flex-col items-center justify-start lg:justify-center p-4 sm:p-6 lg:p-8 relative overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-[520px]">
          <div className="bg-white dark:bg-[#211936] rounded-[24px] sm:rounded-[28px] shadow-[0_20px_60px_rgba(48,32,77,.08)] border border-[#e7e1ec] dark:border-[#3d3154] p-5 sm:p-7 lg:p-8 mb-6 w-full">
             <div className="text-center mb-8">
               <div className="inline-flex items-center gap-2 text-[#6d4aff] text-xs font-bold uppercase tracking-[.16em] mb-4"><span className="w-5 h-px bg-[#6d4aff]" /> Acesso seguro</div><h2 className="font-display text-[26px] font-bold mb-2">{authMode === 'login' ? 'Bem-vindo de volta!' : 'Crie sua conta'}</h2>
               {authMode === 'register' && <p className="text-[15px] text-slate-500">Comece a gerenciar sua ótica de forma inteligente.</p>}
             </div>
             
             <form onSubmit={handleAuth} className="space-y-4">
               {authError && (<div className="bg-rose-50 text-rose-600 p-3.5 rounded-xl text-sm font-bold flex gap-3 border border-rose-100"><AlertTriangle size={18} /><span>{authError}</span></div>)}
               
               <div>
                 <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">E-mail</label>
                 <div className="relative">
                   <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                   <input type="email" required value={authEmail} onChange={e => setAuthEmail(e.target.value)} className="w-full bg-slate-50 dark:bg-[#2a2140] border border-slate-200 dark:border-[#3d3154] text-slate-900 dark:text-white rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#6d4aff]" placeholder="Seu e-mail" />
                 </div>
               </div>

               <div>
                 <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Senha</label>
                 <div className="relative">
                   <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                   <input type={showPassword ? "text" : "password"} required value={authPassword} onChange={e => setAuthPassword(e.target.value)} className="w-full bg-slate-50 dark:bg-[#2a2140] border border-slate-200 dark:border-[#3d3154] text-slate-900 dark:text-white rounded-xl pl-12 pr-12 py-3.5 outline-none focus:border-[#6d4aff]" placeholder="Sua senha" />
                   <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                   </button>
                 </div>
               </div>

               {authMode === 'register' && <div>
                 <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Confirmar senha</label>
                 <div className="relative">
                   <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                   <input type={showPassword ? 'text' : 'password'} required value={authConfirmPassword} onChange={e => setAuthConfirmPassword(e.target.value)} className="w-full bg-slate-50 dark:bg-[#2a2140] border border-slate-200 dark:border-[#3d3154] text-slate-900 dark:text-white rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#6d4aff]" placeholder="Confirme sua senha" />
                 </div>
               </div>}

               {authMode === 'register' && <label className="flex items-start gap-2 text-[13px] text-slate-500">
                 <input type="checkbox" checked={acceptedTerms} onChange={e => setAcceptedTerms(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#6d4aff]" />
                 <span>Aceito os <button type="button" onClick={() => setLegalDocument('terms')} className="font-semibold text-[#6d4aff] hover:underline">Termos de Uso</button> e a <button type="button" onClick={() => setLegalDocument('privacy')} className="font-semibold text-[#6d4aff] hover:underline">Política de Privacidade</button>.</span>
               </label>}

               <button type="submit" disabled={isLoggingIn} className="w-full bg-[#6d4aff] hover:bg-[#5637e8] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4 transition-colors shadow-[0_10px_22px_rgba(109,74,255,.2)]">
                 {isLoggingIn ? 'Aguarde...' : (authMode === 'login' ? 'Entrar' : 'Criar minha conta')}
               </button>

               <div className="my-5 flex items-center gap-3"><div className="h-px flex-1 bg-slate-200"></div><span className="text-xs font-medium text-slate-400">ou</span><div className="h-px flex-1 bg-slate-200"></div></div>

                 <button type="button" onClick={handleGoogleLogin} disabled={isLoggingIn} className="w-full border border-[#e7e1ec] dark:border-slate-700 bg-white dark:bg-slate-800 py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 mt-4 text-slate-700 dark:text-slate-200 hover:bg-[#fbfaf8] dark:hover:bg-slate-700 disabled:opacity-60 transition-colors">
                 <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                 </svg>
                 Continuar com Google
               </button>
               
               <div className="text-center mt-6">
                 <button type="button" onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} className="text-sm font-bold text-[#6d4aff] hover:underline">
                   {authMode === 'login' ? 'Criar uma conta' : 'Fazer login'}
                 </button>
               </div>
             </form>
          </div>
          <LoginFooter onLegalOpen={setLegalDocument} />
          <LegalDocumentModal document={legalDocument} onClose={() => setLegalDocument(null)} />
        </div>
      </div>
    </div>
  );
}

function LoginFooter({ onLegalOpen }: { onLegalOpen: (document: 'terms' | 'privacy') => void }) {
  return (
    <footer className="w-full pb-4 text-[10px] text-slate-500 dark:text-slate-400">
      <div className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-[#e7e1ec] dark:border-[#3d3154] pt-6 sm:grid-cols-4 sm:gap-x-5">
        <div>
          <h3 className="mb-3 min-h-4 text-[10px] font-bold text-slate-900 dark:text-white">Navegação</h3>
          <div className="space-y-2"><a href="#recursos" className="block hover:text-[#6d4aff]">Recursos</a><a href="#faq" className="block hover:text-[#6d4aff]">FAQ</a><a href="mailto:icaroprojetos7@gmail.com" className="block hover:text-[#6d4aff]">Fale conosco</a></div>
        </div>
        <div>
          <h3 className="mb-3 min-h-4 text-[10px] font-bold text-slate-900 dark:text-white">Legal</h3>
          <div className="space-y-2"><button type="button" onClick={() => onLegalOpen('terms')} className="block text-left hover:text-[#6d4aff]">Termos de uso</button><button type="button" onClick={() => onLegalOpen('privacy')} className="block text-left hover:text-[#6d4aff]">Política de privacidade</button><a href="mailto:icaroprojetos7@gmail.com?subject=Exclusão%20de%20conta" className="block hover:text-[#6d4aff]">Exclusão de conta</a></div>
        </div>
        <div>
          <h3 className="mb-3 min-h-4 text-[10px] font-bold text-slate-900 dark:text-white">Produto</h3>
          <div className="space-y-2"><span className="block">PDV e vendas</span><span className="block">Estoque inteligente</span><span className="block">Financeiro integrado</span></div>
        </div>
        <div>
          <h3 className="mb-3 min-h-4 text-[10px] font-bold text-slate-900 dark:text-white">Status</h3>
          <div className="mb-3 flex items-center gap-1.5 text-emerald-600 dark:text-[#c6ed76]"><CheckCircle2 size={12} /> Operacional</div>
          <p className="leading-relaxed">VISTTA por AXXIS7</p>
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-4 border-t border-[#e7e1ec] pt-5 dark:border-[#3d3154] sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[280px] leading-relaxed">© 2026 VISTTA. Sistema de gestão para óticas. Todos os direitos reservados.</p>
        <div className="flex items-center gap-2">
          <span className="mr-1 text-[10px] font-bold text-slate-900 dark:text-white">Redes sociais</span>
          <a href="https://www.instagram.com/aaxxis7?stkn=MWsxMXo2cWRsdDN6cw==" target="_blank" rel="noreferrer" aria-label="Instagram da AXXIS7" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2ea52b] text-white transition-transform hover:scale-105"><Instagram size={18} /></a>
          <a href="https://www.linkedin.com/in/7icaaro" target="_blank" rel="noreferrer" aria-label="LinkedIn da AXXIS7" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2377b5] text-white transition-transform hover:scale-105"><Linkedin size={18} /></a>
          <a href="mailto:icaroprojetos7@gmail.com" aria-label="Enviar e-mail para o suporte" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#30204d] text-white transition-transform hover:scale-105"><ArrowUpRight size={18} /></a>
        </div>
      </div>
      <p className="mt-4 text-center text-[9px] text-slate-400">Desenvolvido e mantido por AXXIS7</p>
    </footer>
  );
}

function LegalDocumentModal({ document, onClose }: { document: 'terms' | 'privacy' | null; onClose: () => void }) {
  const isTerms = document === 'terms';

  return (
    <ModalBase open={Boolean(document)} onClose={onClose} title={isTerms ? 'Termos de uso' : 'Política de privacidade'} width="max-w-2xl">
      <div className="space-y-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
        <p className="rounded-xl bg-[#f7f3ff] p-4 text-xs text-[#5a4a75] dark:bg-[#2d2544] dark:text-[#c7bce0]">Última atualização: 05 de setembro de 2026. Este conteúdo apresenta as condições gerais de uso da plataforma VISTTA, desenvolvida e mantida pela AXXIS7.</p>
        {isTerms ? <>
          <section><h3 className="mb-1 font-bold text-slate-900 dark:text-white">1. Uso da plataforma</h3><p>A VISTTA é um sistema de gestão para óticas. O acesso é destinado a usuários autorizados pela empresa responsável pela conta, que devem manter seus dados de acesso protegidos.</p></section>
          <section><h3 className="mb-1 font-bold text-slate-900 dark:text-white">2. Responsabilidades da conta</h3><p>A empresa usuária é responsável pelas informações cadastradas, pelos acessos concedidos à equipe e pela conferência dos registros operacionais, financeiros e de clientes.</p></section>
          <section><h3 className="mb-1 font-bold text-slate-900 dark:text-white">3. Uso adequado</h3><p>Não é permitido utilizar a plataforma para atividades ilícitas, tentar acessar dados de terceiros ou interferir na segurança, disponibilidade e funcionamento do serviço.</p></section>
          <section><h3 className="mb-1 font-bold text-slate-900 dark:text-white">4. Propriedade intelectual</h3><p>O sistema VISTTA, sua identidade, código, componentes e materiais são desenvolvidos e mantidos pela AXXIS7. A licença de uso não transfere propriedade sobre a plataforma.</p></section>
        </> : <>
          <section><h3 className="mb-1 font-bold text-slate-900 dark:text-white">1. Dados tratados</h3><p>A plataforma pode armazenar dados da ótica, usuários, clientes, produtos, vendas, orçamentos, ordens de serviço e informações financeiras inseridas durante a operação.</p></section>
          <section><h3 className="mb-1 font-bold text-slate-900 dark:text-white">2. Finalidade</h3><p>Os dados são utilizados para autenticar usuários, executar as funcionalidades do sistema, manter registros da operação e oferecer suporte técnico.</p></section>
          <section><h3 className="mb-1 font-bold text-slate-900 dark:text-white">3. Segurança e acesso</h3><p>O acesso é controlado por autenticação e permissões. A empresa usuária deve revisar seus usuários e comunicar qualquer suspeita de acesso indevido pelo canal de suporte.</p></section>
          <section><h3 className="mb-1 font-bold text-slate-900 dark:text-white">4. Solicitações</h3><p>Para solicitar informações, correções ou exclusão de conta, envie uma mensagem para <a className="font-semibold text-[#6d4aff] hover:underline" href="mailto:icaroprojetos7@gmail.com">icaroprojetos7@gmail.com</a> informando a ótica e o usuário responsável.</p></section>
        </>}
      </div>
    </ModalBase>
  );
}
