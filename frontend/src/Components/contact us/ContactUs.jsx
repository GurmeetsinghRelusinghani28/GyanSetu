import React from "react";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Back button */}
      <span className="absolute top-6 left-6 z-30 flex items-center gap-2 cursor-pointer">
        <ArrowBackIcon color="primary" fontSize="medium" />
        <p
          onClick={() => navigate("/")}
          className="text-blue-500 hover:underline"
        >
          Go back
        </p>
      </span>

      {/* Contact box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-lg rounded-2xl p-6 md:p-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <hr className="my-4" />

        <form className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
