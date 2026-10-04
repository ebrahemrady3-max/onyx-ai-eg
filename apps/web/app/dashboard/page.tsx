import Link from 'next/link';

const stats = [
  { label: 'مشاريع نشطة', value: '128' },
  { label: 'مراحل قيد التنفيذ', value: '34' },
  { label: 'مهام اليوم', value: '142' },
  { label: 'نسبة الإنجاز', value: '84%' },
];

const projects = [
  { name: 'تحول الأنظمة', owner: 'أحمد محمد', progress: 78, status: 'قيد التنفيذ' },
  { name: 'مبادرة العملاء', owner: 'سارة علي', progress: 54, status: 'يحتاج متابعة' },
  { name: 'مشروع المبيعات', owner: 'خالد عبد الله', progress: 91, status: 'جاهز للتسليم' },
];

const tasks = [
  { title: 'مراجعة مخطط المشروع', assignee: 'محمود', priority: 'عالية' },
  { title: 'تحديث تقارير الفريق', assignee: 'سارة', priority: 'متوسطة' },
  { title: 'إعداد عرض العميل', assignee: 'دينا', priority: 'عالية' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 p-5">
          <div>
            <div className="text-sm text-slate-400">لوحة التحكم</div>
            <h1 className="text-2xl font-black">Onyx AI Egypt</h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">
              الصفحة الرئيسية
            </Link>
            <Link href="/login" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
              تسجيل الخروج
            </Link>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <div className="text-3xl font-black text-cyan-300">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">المشاريع الحالية</h2>
              <button className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">+ مشروع جديد</button>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="font-bold">{project.name}</div>
                    <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{project.status}</span>
                  </div>
                  <div className="mb-2 text-sm text-slate-400">المسؤول: {project.owner}</div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${project.progress}%` }} />
                  </div>
                  <div className="mt-2 text-sm text-cyan-300">{project.progress}% مكتمل</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-bold">مهام اليوم</h2>
            <div className="mt-5 space-y-4">
              {tasks.map((task) => (
                <div key={task.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{task.title}</div>
                    <span className="rounded-full bg-amber-500/10 px-2 py-1 text-xs text-amber-300">{task.priority}</span>
                  </div>
                  <div className="mt-2 text-sm text-slate-400">المسؤول: {task.assignee}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
