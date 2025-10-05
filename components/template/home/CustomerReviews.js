"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

/* ===== پالت رنگی ===== */
const PALETTE = {
  primary: "#C1121F", // قرمز اصلی
  secondary: "#FF8500", // نارنجی ثانویه
  accent: "#43B1AC", // سبزآبی
  deep: "#053C5E", // سرمه‌ای
  white: "#FFFFFF",
};

/* ===== داده‌ها + مسیر لوگوها (نمونه) ===== */
const TESTIMONIALS = [
  {
    brand: "شیفت‌نگار",
    quote: "تیم اسپارک‌آپ با سئو و سوشال واقعاً به دیده شدنمون کمک کرد.",
    logo: "/logos/test.png",
  },
  {
    brand: "اوشن دراپ",
    quote: "خدمات سئو و سوشال‌شون باعث شد برندمون بیشتر شناخته بشه.",
    logo: "/logos/test.png",
  },
  {
    brand: "یوتوپین",
    quote: "محتوای متنی تخصصی و جذاب نوشتن؛ باعث شد مخاطب درگیر بشه.",
    logo: "/logos/test.png",
  },
  {
    brand: "متین خودرو",
    quote: "سئو و سوشال خیلی حرفه‌ای مدیریت شد؛ مشتری جدید جذب کردیم.",
    logo: "/logos/test.png",
  },
  {
    brand: "انرژی موتور",
    quote: "نتایج سئو و سوشال ملموس بود؛ بازدید و فروش رشد چشمگیری داشت.",
    logo: "/logos/test.png",
  },
  {
    brand: "ویزایار",
    quote: "تقویم سوشال دقیق و منظم؛ مدیریت محتوا راحت‌تر شد.",
    logo: "/logos/test.png",
  },
  {
    brand: "لوکانو",
    quote: "محتوای متنی روان و کاربرپسند؛ به برندینگ و سئو کمک جدی کرد.",
    logo: "/logos/test.png",
  },
  {
    brand: "دکترمالی",
    quote: "هویت بصری و لوگوی جدید فوق‌العاده؛ سوشال هم برند را پررنگ‌تر کرد.",
    logo: "/logos/test.png",
  },
  {
    brand: "دیراس",
    quote: "ترافیک و تعامل چند برابر شد با سئوی حرفه‌ای و سوشال مارکتینگ.",
    logo: "/logos/test.png",
  },
  {
    brand: "فیدار خاک",
    quote: "طراحی محصول، لیبل، سایت و کاتالوگ دقیقاً مطابق نیاز و چشمگیر شد.",
    logo: "/logos/test.png",
  },
];

/* ===== کمک‌تابع‌ها ===== */
const swatches = [
  PALETTE.primary,
  PALETTE.secondary,
  PALETTE.accent,
  PALETTE.deep,
];
const brandColor = (name) => {
  const h = Array.from(name).reduce((a, c) => a + c.charCodeAt(0), 0);
  return swatches[h % swatches.length];
};
const initials = (name) =>
  name
    .replace(/\s+/g, " ")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

/* ===== دکمه مگنتی لطیف ===== */
function Magnetic({ children, className = "", strength = 0.35, ...rest }) {
  const ref = React.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rsx = useSpring(x, { stiffness: 300, damping: 20 });
  const rsy = useSpring(y, { stiffness: 300, damping: 20 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      x.set((e.clientX - r.left - r.width / 2) * strength);
      y.set((e.clientY - r.top - r.height / 2) * strength);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, x, y]);
  return (
    <motion.div
      ref={ref}
      style={{ x: rsx, y: rsy }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ===== کارت نظر (دسکتاپ) ===== */
function TiltCard({ brand, quote, logo, i, onOpen }) {
  return (
    <motion.div
      onClick={onOpen}
      className="relative group cursor-pointer select-none rounded-2xl p-5 md:p-6 bg-white shadow-lg border"
      style={{ borderColor: "#e5e5e5" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 16,
        delay: i * 0.06,
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="size-14 shrink-0 rounded-2xl grid place-items-center border bg-white overflow-hidden"
          style={{ borderColor: "#e5e5e5" }}
        >
          {logo ? (
            <img src={logo} alt={brand} className="w-12 h-12 object-contain" />
          ) : (
            <span
              className="text-sm font-bold"
              style={{ color: brandColor(brand) }}
            >
              {initials(brand)}
            </span>
          )}
        </div>
        <div className="flex-1">
          <p className="font-bold text-lg" style={{ color: PALETTE.deep }}>
            {brand}
          </p>
          <p className="text-sm text-gray-500">مشتری اسپارک‌آپ</p>
        </div>
        <div className="text-2xl" style={{ color: PALETTE.secondary }}>
          ⭐️
        </div>
      </div>
      <p className="mt-4 text-gray-700 leading-7 text-sm md:text-base">
        {quote}
      </p>
    </motion.div>
  );
}

/* ===== کارت موبایل ===== */
function MobileCard({ item, onOpen }) {
  return (
    <div
      className="rounded-2xl bg-white border shadow-md p-5 w-full"
      style={{ borderColor: "#e5e5e5" }}
    >
      <div className="flex items-center gap-3">
        <div
          className="size-12 rounded-xl border bg-white overflow-hidden flex items-center justify-center"
          style={{ borderColor: "#e5e5e5" }}
        >
          {item.logo ? (
            <img
              src={item.logo}
              alt={item.brand}
              className="w-9 h-9 object-contain"
            />
          ) : (
            <span
              className="text-xs font-bold"
              style={{ color: brandColor(item.brand) }}
            >
              {initials(item.brand)}
            </span>
          )}
        </div>
        <div className="flex-1">
          <div className="text-base font-bold" style={{ color: PALETTE.deep }}>
            {item.brand}
          </div>
          <div className="text-[12px] text-gray-500">مشتری اسپارک‌آپ</div>
        </div>
        <button
          onClick={onOpen}
          className="text-[12px] px-3 py-1 rounded-full border text-gray-600"
          style={{ borderColor: "#e5e5e5" }}
        >
          خواندن کامل
        </button>
      </div>
      <p className="mt-4 text-gray-700 leading-7 text-[13.5px]">{item.quote}</p>
    </div>
  );
}

/* ===== مودال ===== */
function TestimonialModal({ open, onClose, item }) {
  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            layout
            initial={{ y: 40, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="relative w-[92vw] max-w-2xl rounded-2xl border bg-white p-6 md:p-8 shadow-2xl"
            style={{ borderColor: "#e5e5e5" }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 left-3 rounded-full px-3 py-1 text-sm text-gray-600 border"
              style={{ borderColor: "#e5e5e5" }}
            >
              بستن
            </button>
            <div className="flex items-center gap-4">
              <div
                className="size-16 rounded-2xl grid place-items-center border bg-white overflow-hidden"
                style={{ borderColor: "#e5e5e5" }}
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.brand}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <span
                    className="text-base font-bold"
                    style={{ color: brandColor(item.brand) }}
                  >
                    {initials(item.brand)}
                  </span>
                )}
              </div>
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: PALETTE.deep }}
                >
                  {item.brand}
                </h3>
                <p className="text-gray-500 text-sm">
                  تجربه همکاری با اسپارک‌آپ
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-700 leading-7 text-base">
              {item.quote}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ===== Orbit (دسکتاپ) ===== */
function ClientOrbit({
  items,
  active,
  onPick,
  size = 360, // اندازه کلی ویجت
  innerR = 90, // شعاع مدار داخلی
  outerR = 140, // شعاع مدار بیرونی
  node = 44, // اندازه دکمه/نود هر برند (px)
  centerW = 250, // عرض کارت مرکزی
  centerH = 112, // ارتفاع کارت مرکزی
}) {
  const mid = Math.ceil(items.length / 2);
  const inner = items.slice(0, mid);
  const outer = items.slice(mid);

  const polar = (r, deg) => {
    const a = (deg * Math.PI) / 180;
    return { x: Math.cos(a) * r, y: Math.sin(a) * r };
  };

  return (
    <div className="hidden lg:block">
      <div className="relative mx-auto" style={{ width: size, height: size }}>
        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .spin-slow { animation: spin 26s linear infinite; }
          .spin-slower { animation: spin 36s linear infinite; }
        `}</style>

        {/* مرکز */}
        <div
          className="absolute left-1/2 top-1/2 grid place-items-center rounded-2xl shadow-lg border bg-white"
          style={{
            transform: "translate(-50%, -50%)",
            borderColor: "#e5e5e5",
            width: centerW,
            height: centerH,
          }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="size-10 rounded-xl border bg-white overflow-hidden flex items-center justify-center"
              style={{ borderColor: "#e5e5e5" }}
            >
              {items[active].logo ? (
                <img
                  src={items[active].logo}
                  alt={items[active].brand}
                  className="w-7 h-7 object-contain"
                />
              ) : (
                <span
                  className="text-xs font-bold"
                  style={{ color: brandColor(items[active].brand) }}
                >
                  {initials(items[active].brand)}
                </span>
              )}
            </div>
            <div className="text-sm font-bold" style={{ color: PALETTE.deep }}>
              {items[active].brand}
            </div>
          </div>
          <div className="mt-1.5 text-[11px] text-gray-500 line-clamp-2 px-3 text-center">
            {items[active].quote}
          </div>
        </div>

        {/* مدار داخلی */}
        <div
          className="absolute left-1/2 top-1/2 spin-slow"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {inner.map((t, i) => {
            const angle = (360 / inner.length) * i;
            const { x, y } = polar(innerR, angle);
            const idx = items.indexOf(t);
            const isActive = idx === active;
            return (
              <button
                key={`in-${i}`}
                onClick={() => onPick(idx)}
                className="absolute grid place-items-center rounded-xl shadow-md border bg-white hover:shadow-lg transition-shadow overflow-hidden"
                style={{
                  left: x + size / 2 - node / 2,
                  top: y + size / 2 - node / 2,
                  width: node,
                  height: node,
                  borderColor: isActive ? `${PALETTE.accent}66` : "#e5e5e5",
                  outline: isActive ? `2px solid ${PALETTE.accent}40` : "none",
                }}
                title={t.brand}
              >
                {t.logo ? (
                  <img
                    src={t.logo}
                    alt={t.brand}
                    className="object-contain"
                    style={{ width: node - 14, height: node - 14 }}
                  />
                ) : (
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: brandColor(t.brand) }}
                  >
                    {initials(t.brand)}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* مدار بیرونی */}
        <div
          className="absolute left-1/2 top-1/2 spin-slower"
          style={{ transform: "translate(-50%, -50%) rotate(180deg)" }}
        >
          {outer.map((t, i) => {
            const angle = (360 / outer.length) * i;
            const { x, y } = polar(outerR, angle);
            const idx = items.indexOf(t);
            const isActive = idx === active;
            return (
              <button
                key={`out-${i}`}
                onClick={() => onPick(idx)}
                className="absolute grid place-items-center rounded-xl shadow-md border bg-white hover:shadow-lg transition-shadow overflow-hidden"
                style={{
                  left: x + size / 2 - node / 2,
                  top: y + size / 2 - node / 2,
                  width: node,
                  height: node,
                  borderColor: isActive ? `${PALETTE.secondary}66` : "#e5e5e5",
                  outline: isActive
                    ? `2px solid ${PALETTE.secondary}40`
                    : "none",
                }}
                title={t.brand}
              >
                {t.logo ? (
                  <img
                    src={t.logo}
                    alt={t.brand}
                    className="object-contain"
                    style={{ width: node - 14, height: node - 14 }}
                  />
                ) : (
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: brandColor(t.brand) }}
                  >
                    {initials(t.brand)}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ===== Carousel موبایل با سوایپ ===== */
function MobileCarousel({ items, active, setActive, onOpen }) {
  const THRESHOLD = 80;
  const goNext = () => setActive((i) => (i + 1) % items.length);
  const goPrev = () => setActive((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="lg:hidden w-full">
      {/* ردیف چیپ‌های لوگو (اسکرول افقی) */}
      <div className="mt-3 -mx-4 px-4 flex gap-3 overflow-x-auto no-scrollbar pb-1">
        {items.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shrink-0"
            style={{
              borderColor: active === i ? PALETTE.accent : "#e5e5e5",
              outline: active === i ? `2px solid ${PALETTE.accent}33` : "none",
            }}
          >
            <span
              className="size-6 rounded-md border bg-white overflow-hidden grid place-items-center"
              style={{ borderColor: "#e5e5e5" }}
            >
              {t.logo ? (
                <img
                  src={t.logo}
                  alt={t.brand}
                  className="w-4 h-4 object-contain"
                />
              ) : (
                <span
                  className="text-[10px] font-bold"
                  style={{ color: brandColor(t.brand) }}
                >
                  {initials(t.brand)}
                </span>
              )}
            </span>
            <span className="text-[12px] text-gray-700">{t.brand}</span>
          </button>
        ))}
      </div>

      {/* کارت فعال با سوایپ */}
      <motion.div
        key={active}
        className="mt-4"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -THRESHOLD) goNext();
          else if (info.offset.x > THRESHOLD) goPrev();
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        <MobileCard item={items[active]} onOpen={() => onOpen(items[active])} />
      </motion.div>

      {/* نقطه‌های ناوبری */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`slide ${i + 1}`}
            onClick={() => setActive(i)}
            className="rounded-full"
            style={{
              width: i === active ? 18 : 8,
              height: 8,
              background: i === active ? PALETTE.accent : "#e1e1e1",
              transition: "all .25s ease",
            }}
          />
        ))}
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

/* ===== مارکوئی ===== */
function Marquee({ items, reverse = false }) {
  return (
    <div
      className="relative overflow-hidden py-4 border-y hidden lg:block"
      style={{ borderColor: "#e5e5e5" }}
    >
      <div
        className={`flex gap-10 whitespace-nowrap will-change-transform animate-[marquee_26s_linear_infinite] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {items.concat(items).map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
          >
            <div
              className="size-8 rounded-lg"
              style={{ background: brandColor(b) }}
            />
            <span className="text-sm text-gray-600">{b}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

/* ===== بخش اصلی ===== */
export default function EpicTestimonials() {
  const [active, setActive] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const [open, setOpen] = useState(false);
  const shuffled = useMemo(() => [...TESTIMONIALS], []);

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % TESTIMONIALS.length),
      4200
    );
    return () => clearInterval(t);
  }, []);

  const openModal = (item) => {
    setModalItem(item);
    setOpen(true);
  };

  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden rounded-[2rem] border p-6 md:p-10 bg-white mt-10"
      style={{ borderColor: "#e5e5e5" }}
    >
      {/* Glow BG (دسکتاپ) */}
      <div className="absolute -z-10 inset-0 hidden lg:block">
        <div
          className="absolute -top-40 -right-40 size-[420px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(closest-side, #C1121F55, transparent)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 size-[420px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(closest-side, #43B1AC55, transparent)",
          }}
        />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="text-2xl md:text-4xl font-black tracking-tight"
          style={{ color: PALETTE.deep }}
        >
          نظرات مشتریان
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl text-sm md:text-base text-gray-600"
        >
          روی موبایل: سوایپ کن—دسکتاپ: Orbit رو کلیک کن؛ تجربه‌ی همکاری با
          اسپارک‌آپ.
        </motion.p>
      </div>

      {/* Marquee (فقط دسکتاپ) */}
      <div className="mt-6">
        <Marquee items={TESTIMONIALS.map((t) => t.brand)} />
        <Marquee items={TESTIMONIALS.map((t) => t.brand)} reverse />
      </div>

      {/* موبایل: Carousel / دسکتاپ: Orbit + Stack */}
      <div className="relative mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* موبایل */}
        <MobileCarousel
          items={TESTIMONIALS}
          active={active}
          setActive={setActive}
          onOpen={openModal}
        />

        {/* دسکتاپ: Orbit + Stack */}
        <div className="hidden lg:block lg:col-span-1">
          <ClientOrbit
            items={TESTIMONIALS}
            active={active}
            onPick={setActive}
            size={320} // قبلاً 360 یا 420 بود → کوچیک‌تر = فشرده‌تر
            innerR={78} // قبلاً ~90/110 بود → کمترش کن
            outerR={118} // قبلاً ~140/170 بود → کمترش کن
            node={40} // اندازه دکمه‌ها کوچیک‌تر
            centerW={250} // کارت مرکز کمی کوچک‌تر
            centerH={130  }
          />
        </div>

        <div className="lg:col-span-2 hidden lg:block">
          <div className="relative h-[460px] md:h-[520px]">
            {shuffled.map((t, i) => {
              const idx =
                (i - active + TESTIMONIALS.length) % TESTIMONIALS.length;
              const zIndex = TESTIMONIALS.length - idx;
              const scale = 1 - Math.min(idx * 0.05, 0.25);
              const y = Math.min(idx * 28, 120);
              return (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  style={{ zIndex }}
                  animate={{
                    y,
                    scale,
                    filter: idx === 0 ? "none" : "blur(1px)",
                    opacity: 1 - Math.min(idx * 0.08, 0.6),
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  <TiltCard
                    brand={t.brand}
                    quote={t.quote}
                    logo={t.logo}
                    i={i}
                    onOpen={() => openModal(t)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <TestimonialModal
        open={open}
        onClose={() => setOpen(false)}
        item={modalItem}
      />

      {/* CTA */}
      <div className="-mt-48 flex items-center justify-center">
        <Magnetic>
          <button
            className="relative rounded-xl px-6 py-3 font-extrabold text-sm tracking-wide text-white shadow-lg"
            style={{ background: PALETTE.secondary }}
          >
            می‌خوای برند تو نفر بعدی این لیست باشه؟
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
