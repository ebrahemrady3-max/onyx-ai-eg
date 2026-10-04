'use client';

import { FormEvent, useState } from 'react';

const metrics = [
  { value: '250%', label: 'تحديثات إدارية أسرع' },
  { value: '95%', label: 'رضا الفرق التنفيذية' },
  { value: '24/7', label: 'تتبع مستمر' },
  { value: '3x', label: 'سرعة اتخاذ القرار' },
];

const features = [
  {
    title: 'لوحة المشاريع الذكية',
    text: 'إدارة المشاريع والمهام في واجهة عربية واضحة مع تقارير فورية ومؤشرات أداء.',
  },
  {
    title: 'لوحات Kanban و Scrum',
    text: 'تنظيم المهام حسب الفريق، الأولوية، والتسليم، مع دعم Sprint وBacklog.',
  },
  {
    title: 'تقارير تنبؤية',
    text: 'توقع التأخيرات، تحليل الأداء، وتحذيرات مبكرة قبل أن تصبح مشاكل.',
  },
  {
    title: 'AI للمسؤولين',
    text: 'اقتراحات ذكية للفريق، تلخيص المشروع، وتقديم توصيات مباشرة.',
  },
  {
    title: 'تكاملات محلية',
    text: 'دعم الأنظمة المحلية، تقارير عربية، وإدماج مع أدوات العمل المستخدمة داخل السوق.',
  },
  {
    title: 'أمان ومستقبلية',
    text: 'سياسات أذونات متعددة، حماية البيانات، واستضافة ذاتية للمؤسسات الكبيرة.',
  },
];

const competitors = ['ClickUp', 'monday.com', 'Asana', 'Jira', 'Wrike', 'Zoho Projects'];

const pricing = [
  { name: 'مجاني', price: '0', text: 'للمستخدمين الجدد والفرق الصغيرة', cta: 'ابدأ مجانًا' },
  { name: 'Starter', price: '49', text: 'للشركات الصغيرة', cta: 'اختر Starter', highlighted: true },
  { name: 'Business', price: '399', text: 'للمؤسسات والنمو السريع', cta: 'تواصل معنا' },
];

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'قائد مشروع',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = { ...formData, submittedAt: new Date().toISOString() };
    if (typeof window !== 'undefined') {
      localStorage.setItem('onyx-lead-form', JSON.stringify(payload));
    }
    setSubmitted(true);
  };

  return (
    <main className="bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-slate-950">O</div>
            <div>
              <div className="text-lg font-bold">Onyx AI</div>
              <div className="text-[10px] text-slate-400">Egypt</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features">المزايا</a>
            <a href="#market">السوق</a>
            <a href="#pricing">التسعير</a>
            <a href="#contact">تواصل</a>
          </nav>

          <button className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
            اطلب عرضًا
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
              منصة عربية ذكية لإدارة المشاريع
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
              أنشئ مشاريعك<br />بذكاء، سرعة، وتحكم كامل.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Onyx AI Egypt هي منصة عربية متكاملة لإدارة المشاريع والمهام، مصممة خصيصًا للفرق المصرية والشرق الأوسط، مع تقارير ذكية وأتمتة حقيقية.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-300">
                ابدأ الآن
              </button>
              <button className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-bold text-white transition hover:border-slate-500">
                مشاهدة العرض
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-400">
              <span>✔️ عربي 100%</span>
              <span>✔️ AI جاهز</span>
              <span>✔️ SaaS + Self-hosted</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-900/30">
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm text-slate-400">Dashboard</span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">مستوى نجاح 92%</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-slate-800 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>مبادرة التحول الرقمي</span>
                    <span>78%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-800 p-4">
                    <div className="text-sm text-slate-400">المهام اليوم</div>
                    <div className="mt-2 text-2xl font-bold text-cyan-300">164</div>
                  </div>
                  <div className="rounded-xl bg-slate-800 p-4">
                    <div className="text-sm text-slate-400">المشاريع النشطة</div>
                    <div className="mt-2 text-2xl font-bold text-violet-300">29</div>
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4">
                  <div className="text-sm text-slate-300">تنبيه ذكي</div>
                  <div className="mt-2 text-lg font-bold text-white">3 مشاريع قرب التأخير — تم اقتراح خطة تصحيح.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-black text-cyan-300">{item.value}</div>
              <div className="mt-2 text-sm text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">المزايا</div>
          <h2 className="text-3xl font-black md:text-5xl">كل ما تحتاجه لإدارة مشروع ناجح.</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div key={feature.title} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-xl font-bold text-slate-950">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="market" className="bg-slate-900/80 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">السوق</div>
              <h2 className="text-3xl font-black md:text-5xl">منافسون عالميون، لكن الفرصة العربية لا تزال مغلقة.</h2>
              <p className="mt-5 text-lg text-slate-300">
                السوق المصري والشرق الأوسط يحتاج حلًا عربيًا، سهل الاستخدام، فعالًا في التنفيذ، ومناسبًا للشركات الصغيرة والمتوسطة والمؤسسات.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {competitors.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-700 bg-slate-950 p-5 text-center text-lg font-semibold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">التسعير</div>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">خطة تناسب كل مرحلة.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-6 ${plan.highlighted ? 'border-cyan-400 bg-gradient-to-b from-cyan-500/10 to-slate-900 shadow-lg shadow-cyan-500/10' : 'border-white/10 bg-slate-900'}`}
            >
              <div className="text-xl font-semibold text-white">{plan.name}</div>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-black text-cyan-300">{plan.price}</span>
                <span className="pb-2 text-slate-400">{plan.name === 'مجاني' ? 'EGP' : 'جنيه/شهر'}</span>
              </div>
              <p className="mt-4 text-slate-300">{plan.text}</p>
              <button className={`mt-8 w-full rounded-full px-4 py-3 font-bold ${plan.highlighted ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-white'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">تسجيل الاهتمام</div>
            <h2 className="text-3xl font-black md:text-5xl">انضم إلى المرحلة الأولى من إطلاق المنصة.</h2>
            <p className="mt-5 text-lg text-slate-300">
              اترك بياناتك، وسيتواصل معنا فريق Onyx AI Egypt ليقدم لك العرض الخاص، ومعلومات المفاضلة لك من خلال المنتج.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-500/10">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">الاسم</span>
                <input
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="اسمك الكامل"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">البريد الإلكتروني</span>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@email.com"
                  required
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">اسم الشركة</span>
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="اسم الشركة أو المؤسسة"
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">الاهتمام</span>
              <select
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              >
                <option>قائد مشروع</option>
                <option>مدير عمليات</option>
                <option>مدير تقنية</option>
                <option>صاحب شركة</option>
                <option>استشاري</option>
              </select>
            </label>

            <button type="submit" className="mt-6 w-full rounded-full bg-cyan-400 px-4 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
              أرسل طلبك
            </button>

            {submitted && (
              <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                تم تسجيل طلبك بنجاح — سنقوم بالتواصل معك في أقرب وقت.
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © 2026 Onyx AI Egypt. جميع الحقوق محفوظة.
      </footer>
    </main>
  );
}
