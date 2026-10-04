import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Onyx AI Egypt | المنصة العربية لإدارة المشاريع',
  description: 'منصة عربية ذكية لإدارة المشاريع والمهام والتقارير في مصر والشرق الأوسط.',
  keywords: ['Onyx AI Egypt', 'إدارة المشاريع', 'AI', 'منصة عربية', 'dashboard'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
