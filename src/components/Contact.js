// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import "./Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Message Sent Successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <motion.section
//       className="contact-section"
//       id="contact"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <h2 className="section-title">Contact Me</h2>
//       <p className="section-subtitle">Let’s work together to create something amazing</p>

//       <div className="contact-container">
//         {/* Contact Info */}
//         <motion.div
//           className="contact-info"
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3>Get In Touch</h3>
//           <p><FaMapMarkerAlt /> Phagwara, Punjab, India</p>
//           <p><FaPhone /> +91 98765 43210</p>
//           <p><FaEnvelope /> itsa9577@gmail.com</p>

//           <div className="contact-icons">
//             <a href="https://github.com/AmarjitPatel" target="_blank" rel="noreferrer"><FaGithub /></a>
//             <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
//             <a href="https://x.com/home" target="_blank" rel="noreferrer"><FaTwitter /></a>
//           </div>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.form
//           className="contact-form"
//           onSubmit={handleSubmit}
//           initial={{ x: 50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             rows="5"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" className="submit-btn">Send Message</button>
//         </motion.form>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/mjkoqonw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Let’s work together to create something amazing</p>

      <div className="contact-container">
        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Get In Touch</h3>
          <p><FaMapMarkerAlt /> Phagwara, Punjab, India</p>
          <p><FaPhone /> +91 76268-65612</p>
          <p><FaEnvelope /> itsa9577@gmail.com</p>

          <div className="contact-icons">
            <a href="ttps://github.com/AmarjitPatel" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/home" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">Send Message</button>
          {status && <p style={{ marginTop: "10px", color: "#007bff" }}>{status}</p>}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;

