"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiHome, FiCalendar, FiBriefcase, FiUsers } from "react-icons/fi"; // آیکون FiFileText به FiCalendar تغییر کرد

// آیتم‌های منو به‌روز شد
const navItems = [
  { name: "داشبورد", href: "/admin", icon: FiHome },
  { name: "فرم‌های رزرو", href: "/admin/reservations", icon: FiCalendar },
  { name: "فرم‌های رزومه", href: "/admin/resumes", icon: FiBriefcase },
  { name: "فرم‌های همکاری", href: "/admin/collaborations", icon: FiUsers },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-full w-full bg-white text-slate-600 flex flex-col p-4 border-l border-slate-200 md:border-l-0 md:border-r">
      <div className="text-2xl font-bold text-slate-900 mb-10 text-center">
        پنل ادمین
      </div>
      <nav>
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name} className="mb-2">
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                      isActive
                        ? "bg-cyan-500 text-white shadow-sm"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    <item.icon className="ml-3" size={20} />
                    <span>{item.name}</span>
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
