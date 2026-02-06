# 🔧 رفع خطای اینترنت در تب AI

## ✅ تغییرات انجام شده

### مشکل اصلی:
مرورگرها اجازه نمی‌دهند header های `HTTP-Referer` و `X-Title` از JavaScript تنظیم شوند.

### راه حل:
این header ها را حذف کردم. اکنون فقط header های ضروری ارسال می‌شود:
```javascript
headers: {
    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json'
}
```

## 🧪 چطور تست کنیم؟

### روش 1: فایل تست ساده (توصیه می‌شود!)
1. فایل `test-api.html` را باز کنید
2. اگر پیغام **"✅ اتصال برقرار است"** دیدید، API کار می‌کند
3. سوالی بپرسید و دکمه "ارسال" را بزنید
4. پاسخ را ببینید

### روش 2: فایل اصلی
1. فایل `main.html` را باز کنید
2. به تب "معلم هوش مصنوعی" بروید
3. سوال بپرسید

## ⚠️ اگر هنوز خطا می‌دهد:

### 1. بررسی Console مرورگر
کلید **F12** را بزنید و به تب **Console** بروید. پیغام خطا را بخوانید:

#### اگر خطای CORS دیدید:
```
Access to fetch at 'https://openrouter.ai/...' has been blocked by CORS policy
```

**راه حل:** از یک وب سرور محلی استفاده کنید:

**گزینه 1: با Python**
```bash
# Python 3
python -m http.server 8000

# یا Python 2
python -m SimpleHTTPServer 8000
```
سپس به `http://localhost:8000/main.html` بروید

**گزینه 2: با Node.js**
```bash
npx http-server -p 8000
```

**گزینه 3: با VS Code**
افزونه "Live Server" را نصب کنید و روی فایل راست کلیک کنید > "Open with Live Server"

#### اگر خطای 401 Unauthorized دیدید:
```
{"error": {"message": "Invalid API key"}}
```

**راه حل:** API key اشتباه است. به https://openrouter.ai بروید و:
1. وارد حساب کاربری شوید
2. به قسمت API Keys بروید
3. یک key جدید بسازید
4. در فایل `script.js` خط 402 را جایگزین کنید

#### اگر خطای 429 Too Many Requests دیدید:
```
{"error": {"message": "Rate limit exceeded"}}
```

**راه حل:** خیلی زیاد درخواست فرستادید. چند دقیقه صبر کنید یا:
- از مدل دیگری استفاده کنید
- حساب پولی بگیرید (rate limit بالاتر)

#### اگر خطای Network دیدید:
```
Failed to fetch
```

**راه حل:**
1. اتصال اینترنت را بررسی کنید
2. VPN را خاموش/روشن کنید
3. DNS را به 8.8.8.8 تغییر دهید
4. از مرورگر دیگری استفاده کنید

## 🎯 تست سریع API

برای بررسی اینکه API key معتبر است یا نه:

1. به https://openrouter.ai/playground بروید
2. API key خود را وارد کنید
3. یک پیام تستی بفرستید
4. اگر جواب داد، API key معتبر است

## 📝 مدل‌های پیشنهادی

### رایگان:
```javascript
"google/gemma-3-27b-it:free"           // فعلی - خوب برای فارسی
"meta-llama/llama-3.2-3b-instruct:free" // سریع‌تر اما ضعیف‌تر
"qwen/qwen-2-7b-instruct:free"         // خوب برای زبان‌های غیرانگلیسی
```

### پولی (بهتر):
```javascript
"anthropic/claude-3-5-sonnet"          // بهترین برای فارسی
"openai/gpt-4-turbo"                   // عالی اما گران
"google/gemini-pro-1.5"                // خوب و ارزان
```

## 🔄 تغییر مدل

در فایل `script.js` خط 403:
```javascript
// قبل:
const OPENROUTER_MODEL = "google/gemma-3-27b-it:free";

// بعد (مثال):
const OPENROUTER_MODEL = "anthropic/claude-3-5-sonnet";
```

## 💡 نکات مهم

1. **همیشه از localhost استفاده کنید** - باز کردن مستقیم فایل HTML ممکن است CORS error بدهد
2. **Console را بررسی کنید** - تمام اطلاعات خطا آنجاست
3. **API key را محفوظ نگه دارید** - در گیت‌هاب آپلود نکنید
4. **Rate limit را رعایت کنید** - مدل‌های رایگان محدودیت دارند

## 🆘 اگر هیچکدام کار نکرد:

1. فایل `test-api.html` را با یک وب سرور محلی باز کنید
2. Console را باز کنید (F12)
3. اسکرین‌شات از تمام پیغام‌های خطا بگیرید
4. برایم بفرستید تا کمک کنم

## ✨ انتظار می‌رود:

وقتی همه چیز درست کار کند:
- در `test-api.html`: پیغام سبز "✅ اتصال برقرار است"
- پس از ارسال سوال: پاسخ به فارسی در عرض 2-5 ثانیه
- در Console: پیغام‌های سبز رنگ با ✅

---

**موفق باشید! 🚀**
