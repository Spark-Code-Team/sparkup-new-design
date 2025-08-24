"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaTelegram } from "react-icons/fa";

const numberToPersian = (str) =>
  String(str).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

// لینک‌ها
const footerLinks = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/job", label: "فرصت‌های شغلی" },
  { href: "/services", label: "خدمات" },
  { href: "/portfolio", label: "نمونه کارها" },
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
];

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.15 },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.footer
      dir="rtl"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full bg-[#820000] text-gray-200 mt-14"
      aria-labelledby="site-footer"
    >
      <h2 id="site-footer" className="sr-only">
        فوتر سایت
      </h2>

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        {/* نکته مهم: گرید پایدار در همه‌ی برک‌پوینت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* ستون 1 */}
          <motion.div
            variants={columnVariants}
            className="space-y-4 text-right"
          >
            <Image
              src="/images/spark.png"
              alt="لوگوی اسپارک‌آپ"
              width={120}
              height={40}
              className="h-auto w-auto"
              priority
            />

            <p className="text-sm leading-7">
              تلفن پشتیبانی{" "}
              <a
                href="tel:02126612786"
                className="hover:text-white underline-offset-4 hover:underline"
              >
                {numberToPersian("26612786-021")}
              </a>
            </p>

            <p className="text-sm leading-7">
              ایمیل{" "}
              <a
                href="mailto:info@sparkup-agency.com"
                className="hover:text-white underline-offset-4 hover:underline ltr:inline-block"
                // برای جلوگیری از وارونگی ایمیل در RTL:
                style={{ direction: "ltr" }}
              >
                info@sparkup-agency.com
              </a>
            </p>

            {/* نقشه با ارتفاع مشخص و والد با height */}
            <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden shadow-lg border-2 border-[#7a0202]/30">
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
            <h3 className="text-lg font-bold text-white mb-5">دسترسی سریع</h3>
            {/* در موبایل دوستونه می‌کنیم که بلند نشه */}
            <ul className="grid grid-cols-2 xs:grid-cols-2 gap-y-3 gap-x-6">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 350 }}
                  >
                    <Link
                      className="text-sm hover:text-white focus:outline-none focus:underline"
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
            <h3 className="text-lg font-bold text-white mb-5">
              با ما در ارتباط باشید
            </h3>
            <p className="text-sm leading-7 mb-4">
              شبکه‌های اجتماعی اسپارک‌آپ را دنبال کنید.
            </p>
            <div className="flex items-center justify-start gap-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-white focus:outline-none focus:underline"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ستون 4 - باکس تماس کوتاه/CTA یا هر چیز دلخواه */}
          <motion.div
            variants={columnVariants}
            className="text-right space-y-4"
          >
            <h3 className="text-lg font-bold text-white">در ارتباط بمانید</h3>
            <p className="text-sm leading-7">
              برای همکاری و مشاوره‌ی رایگان با ما در تماس باشید.
            </p>
            <Link
              href="/contact-us"
              className="inline-block rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              تماس با ما
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 sm:mt-14 pt-6 border-t border-[#7a0202]/35 text-center">
          <p className="text-xs sm:text-sm leading-6">
            &copy; {numberToPersian(String(new Date().getFullYear()))} آژانس
            خلاقیت اسپارک‌آپ — تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
