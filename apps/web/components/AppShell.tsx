import Link from 'next/link';

const navItems = [
  { name: 'الرئيسية', href: '/' },
  { name: 'لوحة التحكم', href: '/dashboard' },
  { name: 'المشاريع', href: '/projects' },
  { name: 'المهام', href: '/tasks' },
  { name: 'التقارير', href: '/reports' },
  { name: 'الإعدادات', href: '/settings' },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <aside className="hidden w-72 border-l border-white/10 bg-slate-900 p-6 lg:block">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-black text-slate-950">O</div>
          <div>
            <div className="text-lg font-black">Onyx AI</div>
            <div className="text-xs text-slate-400">EGY</div>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
          <div className="text-sm text-cyan-200">الأداء اليوم</div>
          <div className="mt-2 text-3xl font-black text-cyan-300">84%</div>
        </div>
      </aside>

      <main className="flex-1">
        <header className="border-b border-white/10 bg-slate-950/80 p-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-xl border border-slate-700 bg-slate-900 p-2 text-slate-300 lg:hidden">☰</div>
              <div>
                <div className="text-sm text-slate-400">أهلاً بك</div>
                <div className="font-bold">إدارة المشاريع</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300">مؤسسة دعم</div>
              <Link href="/login" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">تسجيل الخروج</Link>
            </div>
          </div>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
