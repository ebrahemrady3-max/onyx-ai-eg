# 🤝 دليل المساهمة في Onyx AI Egypt

## كيفية المساهمة

### خطوة 1: Fork المستودع
```bash
git clone https://github.com/your-username/onyx-ai-eg.git
cd onyx-ai-eg
```

### خطوة 2: إنشاء فرع جديد
```bash
git checkout -b feature/your-feature-name
```

### خطوة 3: القيام بالتغييرات
- اتبع معايير الكود
- أضف تعليقات واضحة
- اكتب اختبارات إن أمكن

### خطوة 4: Commit التغييرات
```bash
git commit -m "Add: your feature description"
```

### خطوة 5: Push إلى الفرع
```bash
git push origin feature/your-feature-name
```

### خطوة 6: إنشاء Pull Request
- قدم وصف واضح للميزة
- ربط أي issues ذات الصلة
- انتظر المراجعة

## معايير الكود

### TypeScript
- استخدم أنواع صريحة
- تجنب `any` إلا عند الضرورة
- استخدم interfaces للبيانات

### React
- استخدم Hooks
- تجنب inline functions
- استخدم useMemo للتحسين

### NestJS
- استخدم Decorators
- اتبع نمط الخدمات
- استخدم Guards للحماية

## رسائل Commit

اتبع هذا الشكل:
```
type: subject

body

footer
```

أنواع Commit:
- `feat`: ميزة جديدة
- `fix`: إصلاح خطأ
- `docs`: تحديث الوثائق
- `style`: تغييرات الأسلوب
- `refactor`: إعادة هيكلة
- `test`: إضافة الاختبارات
- `chore`: تحديثات أخرى

## الاختبار

تأكد من تشغيل الاختبارات:
```bash
npm run test
```

## الأسئلة والدعم

- افتح issue للأسئلة
- استخدم discussions للنقاشات
- تواصل عبر Discord

شكرًا لمساهمتك! 🙏
