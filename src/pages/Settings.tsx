import React from 'react';
import { useTheme } from '../theme/useTheme';

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [company, setCompany] = React.useState('AcmeCloud');
  const [emailReports, setEmailReports] = React.useState(true);

  return (
    <div className='space-y-6'>
      <div className='rounded-2xl border border-zinc-200 p-4 shadow-sm dark:border-zinc-800'>
        <div className='text-lg font-semibold tracking-tight'>Settings</div>
        <p className='mt-1 text-sm text-zinc-500 dark:text-zinc-400'>
          Basic preferences for the demo SaaS.
        </p>
      </div>

      <div className='rounded-2xl border border-zinc-200 p-4 shadow-sm dark:border-zinc-800'>
        <div className='text-sm font-medium'>Workspace</div>
        <label className='mt-3 block text-sm'>
          <span className='text-zinc-500 dark:text-zinc-400'>Company name</span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className='mt-1 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-800 dark:focus:ring-zinc-700'
          />
        </label>
      </div>

      <div className='rounded-2xl border border-zinc-200 p-4 shadow-sm dark:border-zinc-800'>
        <div className='text-sm font-medium'>Appearance</div>
        <div className='mt-3 flex flex-wrap gap-2'>
          <button
            onClick={() => setTheme('light')}
            className={`rounded-md border px-3 py-2 text-sm ${
              theme === 'light'
                ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                : 'border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`rounded-md border px-3 py-2 text-sm ${
              theme === 'dark'
                ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                : 'border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900'
            }`}
          >
            Dark
          </button>
        </div>

        <label className='mt-4 flex items-center gap-2 text-sm'>
          <input
            type='checkbox'
            checked={emailReports}
            onChange={(e) => setEmailReports(e.target.checked)}
          />
          <span>Email me weekly reports</span>
        </label>
      </div>
    </div>
  );
}
