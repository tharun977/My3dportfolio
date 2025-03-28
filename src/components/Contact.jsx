import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // New state for confirmation
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(""); // Clear any previous message

    emailjs
      .send(
        "service_7ummwuu", // Replace with your EmailJS Service ID
        "template_e1tga8r", // Replace with your EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "tharunraman10@gmail.com", // Your email
        },
        "LUMHx5jqz_m9GL9gg" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          setSuccessMessage("Your message has been sent successfully!");
          setForm({ name: "", email: "", message: "" }); // Reset form fields
        }, 2000); // 2-second delay for buffering effect
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error sending message:", error);
        setSuccessMessage("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 1, delay: 0.2 },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 gap-4 flex flex-col">
          <span className="text-white font-medium mt-3">Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.name}
            onChange={handleChange}
            required
          />
          <span className="text-white font-medium mt-3">Email Address</span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.email}
            onChange={handleChange}
            required
          />
          <span className="text-white font-medium mt-3">Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Success Message - Animated Fade In */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-green-400 font-medium text-lg"
          >
            {successMessage}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
