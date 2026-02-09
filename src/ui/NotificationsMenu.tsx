import React from 'react';

type NotificationItem = {
  id: string;
  title: string;
  body: string;
  time: string;
  read?: boolean;
};

const seed: NotificationItem[] = [
  {
    id: 'n1',
    title: 'New invoice ready',
    body: 'Invoice #1042 has been generated.',
    time: '2m',
  },
  {
    id: 'n2',
    title: 'Usage spike detected',
    body: 'API usage is up 18% today.',
    time: '1h',
  },
  {
    id: 'n3',
    title: 'Team invite accepted',
    body: 'A new teammate joined your workspace.',
    time: 'Yesterday',
  },
];

export default function NotificationsMenu() {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(seed);

  const unread = items.filter((n) => !n.read).length;

  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const t = e.target as HTMLElement;
      if (!t.closest('[data-notify-root]')) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div className='relative' data-notify-root>
      <button
        onClick={() => setOpen((v) => !v)}
        className='relative rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900'
        aria-label='Notifications'
      >
        Notifications
        {unread > 0 && (
          <span className='ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-900 px-2 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900'>
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div className='absolute right-0 mt-2 w-[320px] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950'>
          <div className='flex items-center justify-between border-b border-zinc-200 px-3 py-2 text-sm dark:border-zinc-800'>
            <div className='font-medium'>Notifications</div>
            <button
              onClick={() =>
                setItems((prev) => prev.map((n) => ({ ...n, read: true })))
              }
              className='text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
            >
              Mark all read
            </button>
          </div>

          <div className='max-h-[360px] overflow-auto'>
            {items.map((n) => (
              <button
                key={n.id}
                onClick={() =>
                  setItems((prev) =>
                    prev.map((x) => (x.id === n.id ? { ...x, read: true } : x)),
                  )
                }
                className='w-full border-b border-zinc-100 px-3 py-3 text-left hover:bg-zinc-50 dark:border-zinc-900 dark:hover:bg-zinc-900'
              >
                <div className='flex items-center justify-between gap-3'>
                  <div className='text-sm font-medium'>{n.title}</div>
                  <div className='text-xs text-zinc-500 dark:text-zinc-400'>
                    {n.time}
                  </div>
                </div>
                <div className='mt-1 text-sm text-zinc-600 dark:text-zinc-300'>
                  {n.body}
                </div>
                {!n.read && (
                  <div className='mt-2 inline-flex rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900'>
                    New
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
