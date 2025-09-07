import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    
    {
      id: 1,
      title: 'Full Stack Development (Intern)',
      company: 'Academic Advancement of Information Technology',
      location: 'Mohali, Punjab, India',
      period: 'June 2025 - August 2025',
      description: 'Worked on Full Stack Web Development using JavaScript, Express.js, MongoDB, and RESTful APIs Implemented dynamic routing and optimized backend performance for seamless navigation. Developed and integrated features enhancing user engagement and application scalability.',
      // achievements: [
      // ],
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'REST APIs', 'Dynamic Routing', 'Postman', 'Git & Github'],
      logo: '🚀'
    },
    {
      id: 2,
      title: 'Node.js Developer',
      company: 'o7 Services',
      location: 'Jalandhar, Punjab, India',
      period: 'June 2024 - August 2024',
      description: 'Developed an educational web platform enabling users to discover and book well-organized educational institutes (e.g., schools). Designed and integrated RESTful APIs with MongoDB, ensuring efficient data management and retrieval. Implemented dynamic routing in Express.js for seamless navigation and optimized user experience.',
      // achievements: [
      // ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Express.js', 'Node.js', 'MongoDB', 'REST APIs', 'Postman'],
      logo: '💻'
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey in software development, showcasing growth, achievements, and contributions to various organizations.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="company-logo">
                    <span className="logo-emoji">{exp.logo}</span>
                  </div>
                  <div className="experience-info">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-details">
                      <span className="company-name">{exp.company}</span>
                      <div className="job-meta">
                        <span className="job-period">
                          <FaCalendarAlt />
                          {exp.period}
                        </span>
                        <span className="job-location">
                          <FaMapMarkerAlt />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="job-description">{exp.description}</p>

                <div className="job-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-stack">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Ready to bring my experience to your team?</h3>
            <p>I'm always open to new opportunities and exciting challenges. Let's discuss how I can contribute to your organization.</p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
