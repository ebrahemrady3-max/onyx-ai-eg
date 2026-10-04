import AppShell from '@/components/AppShell';

const projects = [
  { name: 'تحول الأنظمة', team: 'الفرع التقني', progress: 78, status: 'قيد التنفيذ', due: '13 أبريل' },
  { name: 'توسيع مبيعات الشركة', team: 'مبيعات', progress: 54, status: 'يحتاج متابعة', due: '20 أبريل' },
  { name: 'تجربة العملاء الرقمية', team: 'التصميم', progress: 92, status: 'جاهز للتسليم', due: '05 أبريل' },
];

export default function ProjectsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-400">إدارة المشاريع</div>
            <h1 className="text-3xl font-black">المشاريع</h1>
          </div>
          <button className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950">+ مشروع جديد</button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="rounded-3xl border border-white/10 bg-slate-900 p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{project.status}</span>
              </div>
              <div className="text-sm text-slate-400">{project.team}</div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${project.progress}%` }} />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-cyan-300">{project.progress}%</span>
                <span className="text-slate-400">تاريخ الاستحقاق: {project.due}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
