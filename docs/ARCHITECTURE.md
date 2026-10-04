# 🏗️ معمارية Onyx AI Egypt

## نظرة عامة على البنية

Onyx AI Egypt يتبع بنية microservices مع monorepo باستخدام Turbo.

## الطبقات الرئيسية

### 1. Frontend Layer (Next.js)
- صفحات المستخدم
- لوحة التحكم
- إدارة المشاريع والمهام
- نظام الإشعارات
- الرسائل والتعاون

### 2. API Layer (NestJS)
- التحقق من المصادقة
- إدارة البيانات
- معالجة الطلبات
- WebSocket للتحديثات الفورية
- التكاملات الخارجية

### 3. Database Layer (PostgreSQL)
- جداول المستخدمين
- جداول المشاريع
- جداول المهام
- جداول التقارير
- جداول النشاطات

### 4. Caching Layer (Redis)
- تخزين الجلسات
- تخزين البيانات المؤقتة
- معالجة الطوابير
- إدارة الإشعارات الفورية

## رسم البنية

```
┌─────────────────────────────────────────┐
│        Frontend (Next.js + React)       │
│  - صفحات المستخدم                    │
│  - لوحة التحكم                         │
│  - إدارة المشاريع والمهام             │
└────────────┬────────────────────────────┘
             │ HTTP/WebSocket
┌────────────▼────────────────────────────┐
│      API Layer (NestJS)                 │
│  - Authentication                       │
│  - Project Management                   │
│  - Task Management                      │
│  - WebSocket Events                     │
└────────────┬────────────────────────────┘
             │
    ┌────────┴────────┐
    │                 │
┌───▼────┐      ┌────▼───┐
│ PostgreSQL  │   │ Redis │
│ (Database)  │   │(Cache)│
└────────┘      └────────┘

```

## المكونات الرئيسية

### Authentication
- تسجيل الدخول والخروج
- التحقق من البريد الإلكتروني
- Reset كلمة المرور
- 2FA (اختياري)

### Project Management
- إنشاء المشاريع
- تحديث المشاريع
- حذف المشاريع
- إدارة أعضاء المشروع

### Task Management
- إنشاء المهام
- تحديث المهام
- تعيين المسؤولين
- تتبع التقدم

### Reporting
- تقارير المشاريع
- تقارير الأداء
- تقارير الموارد
- تقارير الأخطاء

## نموذج البيانات

### العلاقات الرئيسية

```
User (المستخدم)
  ├─ has_many: Organizations
  ├─ has_many: Projects (as owner or member)
  └─ has_many: Tasks (as assigned)

Organization (المؤسسة)
  ├─ has_many: Users
  ├─ has_many: Projects
  └─ has_many: Teams

Project (المشروع)
  ├─ belongs_to: Organization
  ├─ has_many: Tasks
  ├─ has_many: Members
  └─ has_many: Boards

Task (المهمة)
  ├─ belongs_to: Project
  ├─ has_many: Subtasks
  ├─ has_many: Comments
  └─ has_many: Attachments

```

## معايير التطوير

### Code Style
- استخدام TypeScript بدقة
- ESLint للتحقق من النمط
- Prettier لتنسيق الكود

### Testing
- اختبارات الوحدة (Unit Tests)
- اختبارات التكامل (Integration Tests)
- اختبارات النهاية إلى النهاية (E2E Tests)

### Performance
- تخزين مؤقت فعال
- استعلامات قاعدة البيانات المحسنة
- تحسين الصور والملفات

## الأمان

- تشفير كلمات المرور
- التحقق من JWT
- حماية CORS
- مصادقة OAuth
- تسجيل الأنشطة
