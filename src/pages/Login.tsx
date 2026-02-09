import React from 'react';
import { useLocation, useNavigate, type Location } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

type LocationState = {
  from?: string;
};

export default function Login() {
  const { login, isAuthed } = useAuth();
  const nav = useNavigate();

  const location = useLocation() as Location & { state: LocationState };

  const [email, setEmail] = React.useState('demo@acme.com');
  const [password, setPassword] = React.useState('password');
  const [err, setErr] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);

  React.useEffect(() => {
    if (isAuthed) nav('/', { replace: true });
  }, [isAuthed, nav]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);

    try {
      await login(email);

      const to = location.state?.from ?? '/';
      nav(to, { replace: true });
    } catch {
      setErr('Login failed. Try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className='min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50'>
      <div className='mx-auto flex min-h-screen max-w-md items-center px-4'>
        <div className='w-full rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800'>
          <div className='text-lg font-semibold tracking-tight'>
            Sign in to AcmeCloud
          </div>
          <p className='mt-1 text-sm text-zinc-500 dark:text-zinc-400'>
            Fake auth for the demo. Any email/password works.
          </p>

          <form onSubmit={onSubmit} className='mt-6 space-y-3'>
            <label className='block text-sm'>
              <span className='text-zinc-500 dark:text-zinc-400'>Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-800 dark:focus:ring-zinc-700'
                autoComplete='email'
              />
            </label>

            <label className='block text-sm'>
              <span className='text-zinc-500 dark:text-zinc-400'>Password</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='mt-1 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-800 dark:focus:ring-zinc-700'
                autoComplete='current-password'
              />
            </label>

            {err && (
              <div className='rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200'>
                {err}
              </div>
            )}

            <button
              disabled={busy}
              className='w-full rounded-md bg-zinc-900 px-3 py-2 text-sm text-white hover:opacity-90 disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900'
            >
              {busy ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
