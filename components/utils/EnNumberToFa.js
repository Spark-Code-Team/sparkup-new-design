const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
const englishDigits = "0123456789";

// تابعی برای تبدیل رشته‌ی حاوی اعداد انگلیسی به فارسی
export const numberToPersian = (str) => {
  // مطمئن می‌شویم که ورودی رشته است
  const strValue = String(str);
  return strValue.replace(/[0-9]/g, (w) => persianDigits[+w]);
};

// تابعی برای تبدیل رشته‌ی حاوی اعداد فارسی به انگلیسی
export const numberToEnglish = (str) => {
  const strValue = String(str);
  return strValue.replace(
    /[۰-۹]/g,
    (w) => englishDigits[persianDigits.indexOf(w)]
  );
};
