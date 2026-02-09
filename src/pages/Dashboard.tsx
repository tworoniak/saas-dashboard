import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const revenue = [
  { name: 'Mon', value: 1200 },
  { name: 'Tue', value: 2100 },
  { name: 'Wed', value: 1800 },
  { name: 'Thu', value: 2600 },
  { name: 'Fri', value: 2400 },
  { name: 'Sat', value: 3100 },
  { name: 'Sun', value: 2800 },
];

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className='rounded-2xl border border-zinc-200 p-4 shadow-sm dark:border-zinc-800'>
      <div className='text-sm text-zinc-500 dark:text-zinc-400'>{label}</div>
      <div className='mt-1 text-2xl font-semibold tracking-tight'>{value}</div>
      <div className='mt-1 text-sm text-zinc-600 dark:text-zinc-300'>{sub}</div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className='space-y-6'>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <StatCard label='MRR' value='$28,400' sub='+6.2% WoW' />
        <StatCard label='Active Users' value='12,918' sub='+1,104 this week' />
        <StatCard label='Churn' value='2.1%' sub='-0.3% WoW' />
      </section>

      <section className='rounded-2xl border border-zinc-200 p-4 shadow-sm dark:border-zinc-800'>
        <div className='mb-3 flex items-center justify-between'>
          <div>
            <div className='text-sm text-zinc-500 dark:text-zinc-400'>
              Revenue
            </div>
            <div className='text-lg font-semibold tracking-tight'>
              Last 7 days
            </div>
          </div>
        </div>

        <div className='h-[320px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              data={revenue}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area type='monotone' dataKey='value' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
