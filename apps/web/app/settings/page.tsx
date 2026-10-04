import AppShell from '@/components/AppShell';

const settings = [
  'إعدادات الشركة',
  'الأدوار والصلاحيات',
  'التكاملات',
  'التقارير',
  'الإشعارات',
  'النسخ الاحتياطي',
];

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <div className="text-sm text-slate-400">الإعدادات</div>
          <h1 className="text-3xl font-black">إدارة النظام</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {settings.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <div className="text-lg font-bold">{item}</div>
              <div className="mt-3 text-sm text-slate-400">إعدادات متقدمة قابلة للتخصيص حسب المؤسسة.</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
