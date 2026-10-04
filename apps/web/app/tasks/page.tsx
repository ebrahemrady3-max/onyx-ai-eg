import AppShell from '@/components/AppShell';

const tasks = [
  { title: 'مراجعة متطلبات العميل', owner: 'أحمد', priority: 'عالية', due: 'اليوم' },
  { title: 'تحديث لوحة المعلومات', owner: 'سارة', priority: 'متوسطة', due: 'غدًا' },
  { title: 'تجهيز العرض التقديمي', owner: 'دينا', priority: 'عالية', due: 'بعد 2 أيام' },
  { title: 'تحديث التسعير', owner: 'خالد', priority: 'منخفضة', due: 'أسبوع' },
];

export default function TasksPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-400">المهام</div>
            <h1 className="text-3xl font-black">قائمة المهام</h1>
          </div>
          <button className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950">+ مهمة جديدة</button>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900 p-5">
          {tasks.map((task) => (
            <div key={task.title} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <div>
                <div className="font-bold">{task.title}</div>
                <div className="mt-1 text-sm text-slate-400">مسؤول: {task.owner}</div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{task.due}</span>
                <span className="rounded-full bg-amber-500/10 px-2 py-1 text-xs text-amber-300">{task.priority}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
