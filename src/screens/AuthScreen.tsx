import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, User } from 'firebase/auth';
import { ref, push, update, get } from 'firebase/database';
import { auth, db } from '../config/firebase';
import { AlertTriangle, Building2, Mail, Lock, EyeOff, Eye, Check, LogIn, Store, Package, ShieldCheck, Cloud } from 'lucide-react';
import { LogoVistta } from '../components/SharedUI'; // Assumindo que você colocou a LogoVistta aqui

export function AuthScreen() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authNomeOtica, setAuthNomeOtica] = useState('');
  const [authError, setAuthError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const createGoogleProfile = async (googleUser: User) => {
    const userRef = ref(db, `users/${googleUser.uid}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) return;

    const novaEmpresaRef = push(ref(db, 'empresas'));
    const novaEmpresaId = novaEmpresaRef.key;
    if (!novaEmpresaId) throw new Error('Não foi possível criar o identificador da empresa.');

    await update(ref(db, `empresas/${novaEmpresaId}/info`), {
      nome: googleUser.displayName ? `Ótica de ${googleUser.displayName}` : 'Minha Ótica',
      criadoEm: new Date().toISOString(),
      criadoPor: googleUser.uid
    });

    await update(userRef, {
      empresaId: novaEmpresaId,
      role: 'admin',
      email: googleUser.email || '',
      nome: googleUser.displayName || ''
    });
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
        const userCred = await createUserWithEmailAndPassword(auth, authEmail, authPassword);
        try {
          const novaEmpresaRef = push(ref(db, 'empresas'));
          const novaEmpresaId = novaEmpresaRef.key;

          await update(ref(db, `empresas/${novaEmpresaId}/info`), {
            nome: authNomeOtica || 'Minha Ótica',
            criadoEm: new Date().toISOString(),
            criadoPor: userCred.user.uid
          });

          await update(ref(db, `users/${userCred.user.uid}`), {
            empresaId: novaEmpresaId,
            role: 'admin',
            email: authEmail
          });
        } catch (dbErr) {
          await userCred.user.delete();
          setAuthError('Falha ao registrar empresa no banco.');
        }
      }
    } catch (error: any) {
      setAuthError(authMode === 'login' ? 'E-mail ou senha incorretos.' : 'Erro ao autenticar.');
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
           
           <div className="flex items-start justify-center gap-8 mb-16 w-full">
              <div className="flex flex-col items-center flex-1 max-w-[180px]">
                 <Store size={36} className="text-[#7b66ff] mb-4" />
                 <h3 className="text-[14px] font-bold mb-2 text-white">Gestão Multi-Loja</h3>
              </div>
              <div className="w-px h-24 bg-indigo-500/20 mt-4"></div>
              <div className="flex flex-col items-center flex-1 max-w-[180px]">
                 <Package size={36} className="text-[#7b66ff] mb-4" />
                 <h3 className="text-[14px] font-bold mb-2 text-white">Estoque em tempo real</h3>
              </div>
           </div>
         </div>
      </div>

      {/* Formulário Direito */}
      <div className="flex-1 lg:w-[45%] bg-[#F8FAFC] dark:bg-slate-900 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-[460px]">
          <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 p-8 sm:p-10 mb-8 w-full">
             <div className="text-center mb-8">
               <h2 className="text-[26px] font-bold mb-2">{authMode === 'login' ? 'Bem-vindo de volta!' : 'Crie sua conta!'}</h2>
             </div>
             
             <form onSubmit={handleAuth} className="space-y-5">
               {authError && (<div className="bg-rose-50 text-rose-600 p-3.5 rounded-xl text-sm font-bold flex gap-3 border border-rose-100"><AlertTriangle size={18} /><span>{authError}</span></div>)}
               
               {authMode === 'register' && (
                 <div>
                   <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Nome da Ótica</label>
                   <div className="relative">
                     <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                     <input type="text" required value={authNomeOtica} onChange={e => setAuthNomeOtica(e.target.value)} className="w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]" placeholder="Nome da ótica" />
                   </div>
                 </div>
               )}

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

               <button type="submit" disabled={isLoggingIn} className="w-full bg-[#5235ff] hover:bg-[#4323ec] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4">
                 {isLoggingIn ? 'Aguarde...' : (authMode === 'login' ? 'Entrar' : 'Criar Conta')}
               </button>

               {authMode === 'login' && (
                 <button type="button" onClick={handleGoogleLogin} className="w-full border py-3.5 rounded-xl font-bold flex justify-center gap-3 mt-4 hover:bg-slate-50">
                    Entrar com Google
                 </button>
               )}
               
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
