import AppShell from '@/components/AppShell';

const reportRows = [
  { label: 'التقدم الكلي', value: '84%' },
  { label: 'المهام المتأخرة', value: '7' },
  { label: 'الإنتاجية', value: '92%' },
  { label: 'التعاون', value: '88%' },
];

export default function ReportsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <div className="text-sm text-slate-400">التقارير</div>
          <h1 className="text-3xl font-black">تقارير الأداء</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {reportRows.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm text-slate-400">{item.label}</div>
              <div className="mt-3 text-3xl font-black text-cyan-300">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">مؤشرات المشروع</h2>
          <div className="mt-6 space-y-5">
            {['التسليم', 'الالتزام', 'التعاون', 'التحسين'].map((item, index) => (
              <div key={item}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>{item}</span>
                  <span>{80 + index * 5}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${80 + index * 5}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
