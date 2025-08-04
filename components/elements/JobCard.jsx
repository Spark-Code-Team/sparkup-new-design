'use client';
import { motion, AnimatePresence } from "framer-motion";


const JobCard = ({ job, isExpanded, onClick }) => (
  <motion.div
    layout
    onClick={onClick}
    className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
    initial={{ borderRadius: "12px" }}
    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
  >
    <motion.div layout className="p-6 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-3xl mr-4">{job.icon}</span>
        <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
      </div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </motion.svg>
    </motion.div>
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="px-6 pb-6"
        >
          <p className="text-gray-600 mb-4">{job.description}</p>
          <h4 className="font-bold text-gray-700 mb-2">مهارت‌های مورد نیاز:</h4>
          <ul className="space-y-1 list-disc list-inside text-gray-600">
            {job.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);


export default JobCard