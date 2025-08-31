import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AltPageTwo() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black from-white to-gray-100 text-gray-800 flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="w-full max-w-4xl px-6 py-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="block md:hidden text-4xl font-bold text-blue-600 mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Gyan Setu
        </motion.h1>
        <p className="text-lg md:text-[27px] text-gray-600 leading-relaxed">
          Gyan Setu is a digital bridge that connects ancient wisdom with
          modern technology. Our mission is to preserve and share timeless
          Vedic knowledge, scriptures, and teachings in an engaging and
          accessible way for the next generation.
        </p>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="w-full max-w-5xl px-6 py-12"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-[51px] font-semibold text-blue-500 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700 md:text-[27px] leading-relaxed">
          We believe that the profound teachings of the Vedas, Gurugranthsahiba, the Bhagavad Gita,
          and other ancient texts hold answers to many challenges of the modern
          world. Through Gyan Setu, we aim to safeguard these texts, translate
          them into user-friendly formats, and make them available globally.
        </p>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="w-full max-w-5xl px-6 py-12"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-[51px] font-semibold text-blue-500 mb-4">
          Key Features
        </h2>
        <ul className="list-disc md:text-[27px] list-inside space-y-3 text-gray-700">
          {[{
              title: "Talk to God",
              desc: "Ask questions and get answers based on God of diverse religion.",
            },
            {
              title: "E-Bookstore",
              desc: "Browse and read ancient scriptures and modern commentaries online for free.",
            },
            {
              title: "Bhagavad Gita Insights",
              desc: "Wisdom summaries tailored to today’s life.",
            },
            {
              title: "Online Holy Songs",
              desc: "Hear devotional songs and chants anytime.",
            },
            {
              title: "AI Story Mode",
              desc: "Kids create and experience Vedic stories in interactive ways.",
            },
            {
                title: "Virtual Temple Tours",
                desc: "Explore famous temples and learn their history.",
            },
            {
                title: "Explore the gods and goddesses",
                desc: "Learn about the deities, their stories, and significance.",
            },
            {
                title: "Test Your Knowledge",
                desc: "Engage with quizzes to deepen your understanding about diverse religion.",
            }
          ].map((item, i) => (
            <motion.li
              key={i}
              className="pl-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="font-medium">{item.title}:</span> {item.desc}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Closing Section */}
      <motion.section
        className="w-full  max-w-4xl px-6 py-16 text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <p className="text-lg md:text-[27px] text-gray-700 mb-8">
          Join us on this journey of reviving and sharing eternal wisdom. 
          Together, we can build a bridge between the past and the future.
        </p>
<motion.button
  onClick={() => navigate("/login")}
  className="px-8 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-lg 
             hover:bg-orange-600 hover:font-bold hover:border-4 border-white 
             hover:text-black transition-all"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  animate={{
    boxShadow: [
      "0 0 5px #3b82f6, 0 0 10px #3b82f6",
      "0 0 20px #fb923c, 0 0 30px #fb923c",
      "0 0 5px #3b82f6, 0 0 10px #3b82f6",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Explore Now
</motion.button>

      </motion.section>
    </div>
  );
}
