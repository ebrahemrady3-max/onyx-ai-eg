export const metadata = {
  title: 'Onyx AI Egypt | إدارة المشاريع الذكية',
  description: 'منصة إدارة مشاريع عربية ذكية في مصر والشرق الأوسط',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
