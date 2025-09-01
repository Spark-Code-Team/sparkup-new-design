"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
  FaPinterest,
} from "react-icons/fa";

const numberToPersian = (str) =>
  String(str).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

const footerLinks = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/job", label: "فرصت‌های شغلی" },
  { href: "/services", label: "خدمات" },
  { href: "/blog", label: "مقالات و منابع" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact-us", label: "تماس با ما" },
  { href: "/faq", label: "پرسش‌های متداول" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/sparkup_agency?utm_source=ig_web_button_share_sheet&igsh=MXV0YXFmdjJjdWJtOQ==",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/sparkups/posts/?feedView=all",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
  {
    href: "https://t.me/sparkup_agency",
    icon: <FaTelegram />,
    label: "Telegram",
  },
  {
    href: "https://fr.pinterest.com/sparkupagency/",
    icon: <FaPinterest />,
    label: "Pinterest",
  },
];

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.12 },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 16 },
    },
  };

  return (
    <motion.footer
      dir="rtl"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-[#820000] text-gray-200 mt-10" // قبلاً mt-14
      aria-labelledby="site-footer"
    >
      <h2 id="site-footer" className="sr-only">
        فوتر سایت
      </h2>

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {" "}
        {/* قبلاً py-12/14 */}
        {/* باکس معرفی بالا */}
        <motion.div
          variants={columnVariants}
          className="mb-8 rounded-xl border border-[#7a0202]/30 bg-white/5 px-4 py-4 sm:px-5 sm:py-5 text-center backdrop-blur-sm shadow-sm"
        >
          <p className="text-[13px] sm:text-sm leading-7 sm:leading-7 font-azar">
            اسپارک‌آپ یه خانواده‌ست پر از آدمای خلاق و باحال که با کلی ایده‌های
            ناب و خفن، کسب‌وکارتون رو تو دنیای تبلیغات چند سر و گردن بالا
            می‌برن!
          </p>
          <p className="mt-2 text-sm sm:text-base font-extrabold font-azar">
            <span className="bg-gradient-to-l from-[#FF8500] via-[#43B1AC] to-[#053C5E] bg-clip-text text-transparent">
              با اسپارک‌آپ، مرزهارو به چالش بکش!
            </span>
          </p>
        </motion.div>
        {/* شبکه ستون‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {" "}
          {/* قبلاً gap-10/12 */}
          {/* ستون 1 */}
          <motion.div
            variants={columnVariants}
            className="space-y-3 text-right"
          >
            <Image
              src="/images/spark.png"
              alt="لوگوی اسپارک‌آپ"
              width={110} // کمی کوچکتر
              height={36}
              className="h-auto w-auto"
              priority
            />

            <p className="text-xs sm:text-sm leading-6">
              تلفن پشتیبانی{" "}
              <a
                href="tel:02126612786"
                className="hover:text-white underline-offset-4 hover:underline"
              >
                {numberToPersian("26612786-021")}
              </a>
            </p>

            <p className="text-xs sm:text-sm leading-6">
              ایمیل{" "}
              <a
                href="mailto:info@sparkup-agency.com"
                className="hover:text-white underline-offset-4 hover:underline ltr:inline-block"
                style={{ direction: "ltr" }}
              >
                info@sparkup-agency.com
              </a>
            </p>

            <div className="w-full h-36 sm:h-40 md:h-44 rounded-lg overflow-hidden shadow-md border border-[#7a0202]/30">
              {" "}
              {/* قبلاً h-44/48 و border-2 */}
              <iframe
                title="آدرس اسپارک‌آپ روی نقشه"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1049.5948150636866!2d51.457245726254264!3d35.76573200185117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1755964204729!5m2!1sen!2s"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
          {/* ستون 2 */}
          <motion.nav
            variants={columnVariants}
            aria-label="دسترسی سریع"
            className="text-right"
          >
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">
              دسترسی سریع
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-5">
              {" "}
              {/* جمع‌وجورتر */}
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 380, damping: 18 }}
                  >
                    <Link
                      className="text-[13px] sm:text-sm hover:text-white focus:outline-none focus:underline"
                      href={link.href}
                    >
                      - {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.nav>
          {/* ستون 3 */}
          <motion.div variants={columnVariants} className="text-right">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">
              با ما در ارتباط باشید
            </h3>
            <p className="text-[13px] sm:text-sm leading-6 mb-3">
              شبکه‌های اجتماعی اسپارک‌آپ را دنبال کنید.
            </p>
            <div className="flex items-center justify-start gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl hover:text-white focus:outline-none focus:underline"
                  whileHover={{ scale: 1.12, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* ستون 4 */}
          <motion.div
            variants={columnVariants}
            className="text-right space-y-3"
          >
            <h3 className="text-base sm:text-lg font-bold text-white">
              در ارتباط بمانید
            </h3>
            <p className="text-[13px] sm:text-sm leading-6">
              ساعات کاری برای پاسخگویی: شنبه تا چهارشنبه | از ساعت {digitsEnToFa('10:00')} الی {digitsEnToFa('17:00')}.
            </p>
            <p className="text-[13px] sm:text-sm leading-6">
              برای همکاری و مشاوره‌ی رایگان با ما در تماس باشید.
            </p>
            <Link
              href="/contact-us"
              className="inline-block rounded-md bg-white/10 px-3.5 py-2 text-[13px] sm:text-sm font-semibold hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              تماس با ما
            </Link>
          </motion.div>
        </div>
        {/* کپی‌رایت */}
        <div className="mt-10 pt-5 border-t border-[#7a0202]/35 text-center">
          {" "}
          {/* قبلاً mt-12/14 pt-6 */}
          <p className="text-[12px] sm:text-[13px] leading-6">
            &copy; {numberToPersian(String(new Date().getFullYear()))} آژانس
            خلاقیت اسپارک‌آپ — تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
