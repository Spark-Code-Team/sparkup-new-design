// utils/pickBrandColor.js
export const BRAND_BG_CLASSES = [
  "bg-[#053C5E]", // تیره
  "bg-[#43B1AC]", // تیفانی/فیروزه‌ای
  "bg-[#FF8500]", // زرد/نارنجی
  "bg-[#C1121F]", // قرمز
];

export const BRAND_TEXT_TITLE = [
  "text-white",
  "text-white",
  "text-black", // روی زرد مشکی بهتره
  "text-white",
];

export const BRAND_TEXT_DESC = [
  "text-white/90",
  "text-white/90",
  "text-black/80",
  "text-white/90",
];

// رنگ متن روی هاور (برای زرد همچنان مشکی)
export const BRAND_TEXT_TITLE_HOVER = [
  "group-hover:text-white",
  "group-hover:text-white",
  "group-hover:text-black",
  "group-hover:text-white",
];

export const BRAND_TEXT_DESC_HOVER = [
  "group-hover:text-white/90",
  "group-hover:text-white/90",
  "group-hover:text-black/80",
  "group-hover:text-white/90",
];

function hashString(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function pickBrandIndex(key) {
  return hashString(String(key)) % BRAND_BG_CLASSES.length;
}

export function pickBrandClasses(key) {
  const idx = Math.floor(Math.random() * 4);
  const bg = BRAND_BG_CLASSES[idx];
  const hoverBg = `hover:${bg}`;
  const title = BRAND_TEXT_TITLE[idx];
  const desc = BRAND_TEXT_DESC[idx];
  const titleHover = BRAND_TEXT_TITLE_HOVER[idx];
  const descHover = BRAND_TEXT_DESC_HOVER[idx];
  return { idx, bg, hoverBg, title, desc, titleHover, descHover };
}
