// components/Navbar.jsx

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaGripLinesVertical } from "react-icons/fa";

// تعریف متغیرهای انیمیشن برای خوانایی بهتر
const sidebarVariants = {
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  closed: {
    x: "100%",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const backdropVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const navLinks = [
  { name: "صفحه اصلی", href: "/" },
  // { name: "نمونه کارها", href: "/portfolio" },
  { name: "خدمات", href: "/services" },
  { name: "فرصت‌های شغلی", href: "/job" },
  {
    name: "مقالات و منابع",
    href: "http://blog.sparkup-agency.com",
    isExternal: true,
  },
  { name: "درباره ما", href: "/about" },
  { name: "تماس با ما", href: "/contact-us" },
  // { name: "پرسش‌های متداول", href: "/faq" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navbar for Mobile */}
      <nav className="w-full h-[80px] flex justify-between items-center px-7 border-b border-gray-200 lg:hidden">
        <button onClick={() => setIsMenuOpen(true)}>
          <FaBars className="w-8 h-8" />
        </button>
        <Link href="/">
          <Image
            src="/images/sparkup-logo.svg"
            alt="SparkUP Logo"
            width={99}
            height={30}
          />
        </Link>
      </nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden font-azar font-bold">
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={closeMenu}
            />
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="w-[80%] sm:w-[60%] md:w-[40%] h-full bg-white shadow-2xl absolute right-0 top-0 p-6"
            >
              <div className="w-full flex justify-end">
                <button onClick={closeMenu}>
                  <Image
                    src="/images/clear.png"
                    alt="Close"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              <motion.ul
                className="flex flex-col items-center mt-8 space-y-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: { y: { stiffness: 1000, velocity: -100 } },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: { y: { stiffness: 1000 } },
                      },
                    }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      target={link.isExternal ? "_blank" : "_self"}
                      rel={link.isExternal ? "noopener noreferrer" : ""}
                      className="block w-full p-3 text-base text-center border-b border-gray-200 rounded-lg hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                {/* <motion.li
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 50, opacity: 0 },
                  }}
                  className="w-full pt-4"
                >
                  <button className="w-full bg-[#C1121F] text-white py-3 rounded-lg font-bold hover:bg-[#a5101a] transition-colors">
                    ورود / ثبت نام
                  </button>
                </motion.li> */}
              </motion.ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navbar for Desktop */}
      <nav className="w-full h-[96px] bg-white lg:flex hidden justify-evenly items-center px-10 border-b-[1.5px] border-[#DADADA] fixed top-0 z-40">
        <ul className="flex text-sm font-bold font-azar items-start gap-0 ">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              className="p-5"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div>
          <Image
            src="/images/sparkup-logo.svg"
            alt="SparkUP Logo"
            width={85}
            height={26}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
