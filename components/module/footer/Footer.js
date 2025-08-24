"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTelegram
} from "react-icons/fa";

// فرض می‌شود این فانکشن در پروژه شما موجود است
const numberToPersian = (str) =>
  String(str).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

// داده‌ها برای مدیریت آسان‌تر لینک‌ها
const footerLinks = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/services", label: "خدمات" },
  { href: "/portfolio", label: "نمونه کارها" },
  { href: "/blog", label: "مقالات و منابع" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact-us", label: "تماس با ما" },
  { href: "/faq", label: "پرسش‌های متداول" },
];

const socialLinks = [
  { href: "https://www.instagram.com/sparkup_agency?utm_source=ig_web_button_share_sheet&igsh=MXV0YXFmdjJjdWJtOQ==", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://www.linkedin.com/company/sparkups/posts/?feedView=all", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://t.me/sparkup_agency", icon: <FaTelegram />, label: "Telegram" },
];

// کامپوننت اصلی فوتر
const Footer = () => {
  // انیمیشن برای کل کانتینر فوتر
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // ایجاد تاخیر بین انیمیشن ستون‌ها
        delayChildren: 0.3,
      },
    },
  };

  // انیمیشن برای هر ستون
  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible" // انیمیشن با اسکرول و دیدن فوتر فعال می‌شود
      viewport={{ once: true, amount: 0.3 }}
      className="w-full bg-[#820000] text-gray-300 mt-14"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ستون اول: درباره ما و نقشه */}
          <motion.div variants={columnVariants} className="space-y-6">
            <Image
              src="/images/spark.png"
              alt="SparkUP Logo"
              width={110}
              height={34}
            />
            <p className="text-sm leading-relaxed">
              تلفن پشتیبانی:{" "}
              <a
                href="tel:02126612786"
                className="hover:text-white transition-colors"
              >
                {numberToPersian("021-26612786")}
              </a>
            </p>
            <p className="text-sm leading-relaxed">
              ایمیل:{" "}
              <a
                href="mailto:info@sparkup-agency.com"
                className="hover:text-white transition-colors"
              >
                info@sparkup-agency.com
              </a>
            </p>
            <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg border-2 border-[#7a0202]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1049.5948150636866!2d51.457245726254264!3d35.76573200185117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1755964204729!5m2!1sen!2s"   
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* ستون دوم: لینک‌های سریع */}
          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-bold text-white mb-6">دسترسی سریع</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <motion.div
                    whileHover={{ x: 5, color: "#FFFFFF" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href={link.href} className="text-sm">
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ستون سوم: خبرنامه */}
          <motion.div
            variants={columnVariants}
            className="md:col-span-2 lg:col-span-2"
          >
            {/* <h3 className="text-lg font-bold text-white mb-6">
              عضویت در خبرنامه اسپارک‌آپ
            </h3>
            <p className="text-sm mb-6">
              از آخرین اخبار، مقالات و تخفیف‌های ویژه ما باخبر شوید!
            </p> */}
            {/* <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full px-4 py-3 bg-[#7a0202]/10 border border-[#7a0202]/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7a0202] transition-all" // ✅ تغییر رنگ
              />
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#7a0202] text-white font-bold rounded-lg whitespace-nowrap hover:bg-[#9a0303] transition-colors" // ✅ تغییر رنگ
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                <span>عضویت</span>
              </motion.button>
            </form> */}
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">به ما سر بزنید!</h4>
              <div className="flex items-center gap-5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-2xl hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, y: -3, color: "#e5e5e5" }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#7a0202]/30 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} آژانس خلاقیت اسپارک‌آپ. تمامی حقوق
            محفوظ است.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
