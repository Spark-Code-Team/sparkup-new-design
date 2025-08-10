"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiCalendar,
  FiMessageSquare,
  FiChevronLeft,
  FiChevronRight,
  FiAlertTriangle,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

import { digitsEnToFa } from "@persian-tools/persian-tools";

const formatDate = (dateString) => {
  if (!dateString) return "-";
  return new Date(dateString).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function ReservationsClientPage({
  initialData,
  page,
  totalPages,
}) {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);

  const reservations = initialData || [];

  const handleNextPage = () => {
    if (page < totalPages) {
      router.push(`/admin/reservations?page=${page + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      router.push(`/admin/reservations?page=${page - 1}`);
    }
  };

  return (
    <div className="font-azar bg-white p-6 md:p-8 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">
        فرم‌های رزرو مشاوره
      </h1>

      {reservations.length > 0 ? (
        <>
          {/* نمایش جدولی برای دسکتاپ */}
          <div className="hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-slate-700">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="p-4 text-sm font-semibold text-slate-500 uppercase">
                      نام کامل
                    </th>
                    <th className="p-4 text-sm font-semibold text-slate-500 uppercase">
                      موبایل
                    </th>
                    <th className="p-4 text-sm font-semibold text-slate-500 uppercase">
                      ایمیل
                    </th>
                    <th className="p-4 text-sm font-semibold text-slate-500 uppercase">
                      تاریخ ثبت
                    </th>
                    <th className="p-4 text-sm font-semibold text-slate-500 uppercase text-center">
                      عملیات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((item) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: item.id * 0.05 }}
                      className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="p-4 whitespace-nowrap">
                        {item.full_name}
                      </td>
                      <td className="p-4 whitespace-nowrap" dir="ltr">
                        {digitsEnToFa(item.mobile)}
                      </td>
                      <td className="p-4 whitespace-nowrap">{item.email}</td>
                      <td className="p-4 whitespace-nowrap">
                        {formatDate(item.created_at)}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="bg-cyan-500 text-white px-3 py-1 rounded-lg hover:bg-cyan-600 transition-colors text-sm"
                        >
                          مشاهده جزئیات
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* نمایش کارتی برای موبایل */}
          <div className="md:hidden space-y-4">
            {reservations.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: item.id * 0.05 }}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200"
                onClick={() => setSelectedItem(item)}
              >
                <div className="flex items-center mb-3">
                  <FiUser className="text-cyan-500 ml-2" />
                  <h3 className="font-bold text-slate-800">{item.full_name}</h3>
                </div>
                <div className="text-sm text-slate-600 space-y-2">
                  <div className="flex items-center">
                    <FiPhone className="ml-2 text-slate-400" size={14} />
                    <span dir="ltr">{item.mobile}</span>
                  </div>
                  <div className="flex items-center pt-2 border-t border-slate-100 mt-2">
                    <FiCalendar className="ml-2 text-slate-400" size={14} />
                    <span>{formatDate(item.created_at)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* کامپوننت Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevPage}
                disabled={page === 1}
                className="bg-white text-slate-600 px-4 py-2 rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center border border-slate-200"
              >
                <FiChevronRight className="ml-1" />
                قبلی
              </motion.button>

              <span className="mx-4 text-slate-500 text-sm">
                صفحه {page} از {totalPages}
              </span>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleNextPage}
                disabled={page === totalPages}
                className="bg-white text-slate-600 px-4 py-2 rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center border border-slate-200"
              >
                بعدی
                <FiChevronLeft className="mr-1" />
              </motion.button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <FiAlertTriangle className="mx-auto text-4xl text-amber-400 mb-4" />
          <p className="text-slate-500">هیچ فرم رزروی برای نمایش وجود ندارد.</p>
        </div>
      )}

      {/* مودال نمایش جزئیات */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center">
                  <FiMessageSquare className="ml-2 text-cyan-500" />
                  جزئیات رزرو
                </h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-3xl text-slate-400 hover:text-slate-600"
                >
                  &times;
                </button>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>
                  <strong>نام کامل:</strong> {selectedItem.full_name}
                </p>
                <p>
                  <strong>موبایل:</strong>{" "}
                  <span dir="ltr">{selectedItem.mobile}</span>
                </p>
                <p>
                  <strong>ایمیل:</strong> {selectedItem.email}
                </p>
                <div className="border-t pt-3 mt-3">
                  <h3 className="font-bold mb-2">متن درخواست:</h3>
                  <p className="bg-slate-50 p-3 rounded-lg leading-relaxed whitespace-pre-wrap">
                    {selectedItem.text || "متنی ثبت نشده است."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
