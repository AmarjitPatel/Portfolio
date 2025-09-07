import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './About.css';

const About = () => {
  const personalInfo = [
    { icon: <FaUser />, label: 'Name', value: 'Amarjit Patel' },
    { icon: <FaGraduationCap />, label: 'Degree', value: 'Bachelor of Computer Science and Engineering' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Phagwara, Punjab, India' },
    { icon: <FaEnvelope />, label: 'Email', value: 'itsa9577@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+99 76268-65612' }
  ];

  const skills = [
    'Html5', 'CSS3',
    'JavaScript', 'React.js', 'Express.js', 'Node.js', 'MongoDB', 'C++', 'SQL',
    'Git & Github',
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better - my background, passion, and what drives me in the world of technology.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              I love creating elegant solutions to complex problems and building applications that make a difference.
            </p>
            
            <p>
              With over 3 years of experience in software development, I've worked on various projects 
              ranging from small business websites to large-scale enterprise applications. I'm constantly 
              learning and staying up-to-date with the latest technologies and best practices.
            </p>

            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in writing clean, 
              maintainable code and creating user experiences that are both beautiful and functional.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>Fresher</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>3</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-sidebar"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="personal-info">
              <h3>Personal Information</h3>
              <div className="info-list">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="info-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <span className="info-icon">{info.icon}</span>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* <div className="key-skills">
              <h3>Key Skills</h3>
              <div className="skills-tags">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
