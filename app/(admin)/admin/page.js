// app/(admin)/page.jsx (نسخه نهایی با تم روشن)

import { FiSmile } from "react-icons/fi";

export default function AdminPage() {
  return (
    // حذف dark:bg-gray-800 چون پس‌زمینه همیشه سفید است
    <div className="flex font-azar flex-col items-center justify-center h-3/4 text-center bg-white  p-8 rounded-xl shadow-lg">
      <FiSmile className="text-7xl text-cyan-500 mb-4" />

      {/* اضافه کردن رنگ مشخص برای متن هدر */}
      <h1 className="text-4xl font-bold text-slate-800 mb-2">
        به پنل ادمین خوش آمدید!
      </h1>

      {/* تغییر رنگ متن پاراگراف برای هماهنگی با تم روشن */}
      <p className="text-lg text-slate-600">
        برای مدیریت بخش‌های مختلف، از منوی کنار استفاده کنید.
      </p>
    </div>
  );
}
