import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useTheme } from '../theme/useTheme';

import NotificationsMenu from './NotificationsMenu';

const linkBase =
  'block rounded-md px-3 py-2 text-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50';
const linkActive =
  'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50';

export default function AppShell() {
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();
  const nav = useNavigate();

  return (
    <div className='min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[260px_1fr]'>
        {/* Sidebar */}
        <aside className='border-b border-zinc-200 p-4 dark:border-zinc-800 lg:min-h-screen lg:border-b-0 lg:border-r'>
          <div className='flex items-center justify-between lg:block'>
            <div className='text-lg font-semibold tracking-tight'>
              Acme<span className='text-zinc-500'>Cloud</span>
            </div>
          </div>

          <nav className='mt-4 space-y-1'>
            <NavLink
              to='/'
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ''}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to='/settings'
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ''}`
              }
            >
              Settings
            </NavLink>
          </nav>

          <div className='mt-6 rounded-lg border border-zinc-200 p-3 text-sm dark:border-zinc-800'>
            <div className='font-medium'>{user?.name}</div>
            <div className='text-zinc-500 dark:text-zinc-400'>
              {user?.email}
            </div>
            <button
              onClick={async () => {
                await logout();
                nav('/login', { replace: true });
              }}
              className='mt-3 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900'
            >
              Sign out
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className='p-4 lg:p-6'>
          <header className='mb-6 flex items-center justify-between'>
            <div>
              <div className='text-sm text-zinc-500 dark:text-zinc-400'>
                Welcome back
              </div>
              <h1 className='text-xl font-semibold tracking-tight'>
                {user?.name}
              </h1>
            </div>

            <div className='flex items-center gap-2'>
              <button
                onClick={toggle}
                className='rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900'
                aria-label='Toggle dark mode'
                title={`Theme: ${theme}`}
              >
                {theme === 'dark' ? 'Dark' : 'Light'}
              </button>

              <NotificationsMenu />

              <button
                onClick={() => nav('/settings')}
                className='rounded-md bg-zinc-900 px-3 py-2 text-sm text-white hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900'
              >
                Settings
              </button>
            </div>
          </header>

          <Outlet />
        </main>
      </div>
    </div>
  );
}
