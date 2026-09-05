import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, User } from 'firebase/auth';
import { ref, update, get } from 'firebase/database';
import { auth, db } from '../config/firebase';
import { AlertTriangle, Mail, Lock, EyeOff, Eye, Store, Package } from 'lucide-react';
import { LogoVistta } from '../components/SharedUI'; // Assumindo que você colocou a LogoVistta aqui

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
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans overflow-hidden">
      {/* Painel Esquerdo (VISTTA) */}
      <div className="hidden lg:flex w-[55%] bg-[#120D38] flex-col items-center justify-center p-12 text-white relative">
         <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3b2b9a] rounded-full blur-[140px] opacity-60"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#21146c] rounded-full blur-[140px] opacity-60"></div>
         
         <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl">
           <div className="mb-10 flex flex-col items-center">
              <LogoVistta className="w-36 h-auto mb-4 drop-shadow-2xl" solidWhite={false} />
              <h1 className="text-[56px] font-bold tracking-[0.2em] leading-none mb-3 text-white">VISTTA</h1>
              <p className="text-[#a094ff] tracking-[0.35em] text-[11px] uppercase font-semibold">Gestão Inteligente para Óticas</p>
              <div className="w-12 h-[2px] bg-[#6552ff] mt-8 rounded-full"></div>
           </div>

           <h2 className="text-[40px] font-normal mb-1 tracking-tight text-white/90">Sua ótica. Uma plataforma.</h2>
           <h2 className="text-[42px] font-bold text-[#7b66ff] mb-6 tracking-tight">Mais controle.</h2>
           
           <div className="flex items-start justify-center gap-8 mb-10 w-full">
              <div className="flex flex-col items-center flex-1 max-w-[180px]">
                 <Store size={36} className="text-[#7b66ff] mb-4" />
                 <h3 className="text-[13px] font-semibold mb-2 text-white/90">Gestão Multi-Loja</h3>
              </div>
              <div className="w-px h-24 bg-indigo-500/20 mt-4"></div>
              <div className="flex flex-col items-center flex-1 max-w-[180px]">
                 <Package size={36} className="text-[#7b66ff] mb-4" />
                 <h3 className="text-[13px] font-semibold mb-2 text-white/90">Estoque em tempo real</h3>
              </div>
           </div>
         </div>
      </div>

      {/* Formulário Direito */}
      <div className="flex-1 lg:w-[45%] bg-[#F8FAFC] dark:bg-slate-900 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-[460px]">
          <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 p-8 sm:p-10 mb-8 w-full">
             <div className="text-center mb-8">
               <h2 className="text-[26px] font-bold mb-2">{authMode === 'login' ? 'Bem-vindo de volta!' : 'Crie sua conta'}</h2>
               {authMode === 'register' && <p className="text-[15px] text-slate-500">Comece a gerenciar sua ótica de forma inteligente.</p>}
             </div>
             
             <form onSubmit={handleAuth} className="space-y-5">
               {authError && (<div className="bg-rose-50 text-rose-600 p-3.5 rounded-xl text-sm font-bold flex gap-3 border border-rose-100"><AlertTriangle size={18} /><span>{authError}</span></div>)}
               
               <div>
                 <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">E-mail</label>
                 <div className="relative">
                   <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                   <input type="email" required value={authEmail} onChange={e => setAuthEmail(e.target.value)} className="w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]" placeholder="Seu e-mail" />
                 </div>
               </div>

               <div>
                 <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Senha</label>
                 <div className="relative">
                   <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                   <input type={showPassword ? "text" : "password"} required value={authPassword} onChange={e => setAuthPassword(e.target.value)} className="w-full bg-slate-50 border rounded-xl pl-12 pr-12 py-3.5 outline-none focus:border-[#5235ff]" placeholder="Sua senha" />
                   <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                   </button>
                 </div>
               </div>

               {authMode === 'register' && <div>
                 <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Confirmar senha</label>
                 <div className="relative">
                   <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                   <input type={showPassword ? 'text' : 'password'} required value={authConfirmPassword} onChange={e => setAuthConfirmPassword(e.target.value)} className="w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]" placeholder="Confirme sua senha" />
                 </div>
               </div>}

               {authMode === 'register' && <label className="flex items-start gap-2 text-[13px] text-slate-500">
                 <input type="checkbox" checked={acceptedTerms} onChange={e => setAcceptedTerms(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#5235ff]" />
                 <span>Aceito os <a href="#termos" className="font-semibold text-[#5235ff] hover:underline">Termos de Uso</a> e a <a href="#privacidade" className="font-semibold text-[#5235ff] hover:underline">Política de Privacidade</a>.</span>
               </label>}

               <button type="submit" disabled={isLoggingIn} className="w-full bg-[#5235ff] hover:bg-[#4323ec] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4">
                 {isLoggingIn ? 'Aguarde...' : (authMode === 'login' ? 'Entrar' : 'Criar minha conta')}
               </button>

               <div className="my-5 flex items-center gap-3"><div className="h-px flex-1 bg-slate-200"></div><span className="text-xs font-medium text-slate-400">ou</span><div className="h-px flex-1 bg-slate-200"></div></div>

               <button type="button" onClick={handleGoogleLogin} disabled={isLoggingIn} className="w-full border border-slate-200 bg-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 mt-4 text-slate-700 hover:bg-slate-50 disabled:opacity-60">
                 <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                 </svg>
                 Continuar com Google
               </button>
               
               <div className="text-center mt-6">
                 <button type="button" onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} className="text-sm font-bold text-[#5235ff] hover:underline">
                   {authMode === 'login' ? 'Criar uma conta' : 'Fazer login'}
                 </button>
               </div>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
