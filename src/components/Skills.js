import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 70 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaDatabase />,
      skills: [
        { name: 'Express.js', level: 85 },
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    // {
    //   title: 'Tools & Technologies',
    //   icon: <FaTools />,
    //   skills: [
    //     { name: 'Git', level: 90 },
    //     { name: 'Docker', level: 75 },
    //     { name: 'Webpack', level: 70 },
    //     { name: 'Jest', level: 80 },
    //     { name: 'CI/CD', level: 75 }
    //   ]
    // },
    // {
    //   title: 'Cloud & DevOps',
    //   icon: <FaCloud />,
    //   skills: [
    //     { name: 'AWS', level: 75 },
    //     { name: 'Heroku', level: 80 },
    //     { name: 'MongoDB', level: 80 },
    //     { name: 'PostgreSQL', level: 75 },
    //     { name: 'Redis', level: 70 }
    //   ]
    // },
    // {
    //   title: 'Mobile Development',
    //   icon: <FaMobile />,
    //   skills: [
    //     { name: 'React Native', level: 70 },
    //     { name: 'Progressive Web Apps', level: 80 },
    //     { name: 'Mobile UI/UX', level: 75 },
    //     { name: 'Responsive Design', level: 90 }
    //   ]
    // }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and proficiency levels across various technologies.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <h3>Continuous Learning</h3>
            <p>
              I'm constantly expanding my skill set and staying updated with the latest technologies. 
              My passion for learning drives me to explore new frameworks, tools, and methodologies 
              to deliver better solutions.
            </p>
            <div className="learning-focus">
              <span className="focus-tag">Currently Learning: Next.js 13</span>
              <span className="focus-tag">Next Goal: GraphQL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
