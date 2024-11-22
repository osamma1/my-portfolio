import React from 'react';
import Link from 'next/link';
import styles from '@/styles/projects.module.css';

function Projects() {
  return (
    <section className={styles.portfolioSection} id="portfolio">
      <h2 className={styles.sectionTitle}>Projects</h2>
      <span className={styles.sectionSubtitle}>Most recent work</span>

      <div className={`${styles.portfolioContainer} swiper-container`}>
        <div className="swiper-wrapper">
          {/* Portfolio 1 */}
          <div className={`${styles.portfolioContent} grid swiper-slide`}>
            <div className={styles.portfolioData}>
              <h3 className={styles.portfolioTitle}>Personal Portfolio Website</h3>
              <p className={styles.portfolioDescription}>
                This project showcases my skills in HTML, CSS, and JavaScript. The portfolio includes
                sections for about, projects, and contact. It features a responsive design and smooth scrolling navigation.
              </p>
              <Link
                href="https://github.com/osamma1/Portfolio"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                GitHub Repository
                <i className="uil uil-external-link-alt"></i>
              </Link>
              <Link
                href="#"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                See Live
                <i className="uil uil-external-link-alt"></i>
              </Link>
            </div>
          </div>

          {/* Portfolio 2 */}
          <div className={`${styles.portfolioContent} grid swiper-slide`}>
            <div className={styles.portfolioData}>
              <h3 className={styles.portfolioTitle}>Responsive Restaurant Landing Page</h3>
              <p className={styles.portfolioDescription}>
                I developed a responsive restaurant landing page using HTML and CSS, designed for seamless viewing across devices. It includes key sections such as a header, hero section, and best-seller section with a visually appealing and user-friendly layout.
              </p>
              <Link
                href="https://github.com/osamma1/Resturant-Landing-Page"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                GitHub Repository
                <i className="uil uil-external-link-alt"></i>
              </Link>
              <Link
                href="#"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                See Live
                <i className="uil uil-external-link-alt"></i>
              </Link>
            </div>
          </div>

          {/* Portfolio 3 */}
          <div className={`${styles.portfolioContent} grid swiper-slide`}>
            <div className={styles.portfolioData}>
              <h3 className={styles.portfolioTitle}>Dynamic Quiz Game</h3>
              <p className={styles.portfolioDescription}>
                I developed a dynamic quiz game using React. It features multiple-choice questions, a login/signup system, and customizable themes. This project emphasizes responsive design, animations, and user-friendly interactions.
              </p>
              <Link
                href="https://github.com/osamma1/Quiz-Game"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                GitHub Repository
                <i className="uil uil-external-link-alt"></i>
              </Link>
              <Link
                href="#"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                See Live
                <i className="uil uil-external-link-alt"></i>
              </Link>
            </div>
          </div>

          {/* Portfolio 4 */}
          <div className={`${styles.portfolioContent} grid swiper-slide`}>
            <div className={styles.portfolioData}>
              <h3 className={styles.portfolioTitle}>Currency Converter</h3>
              <p className={styles.portfolioDescription}>
                I created a currency converter using TypeScript with a responsive interface and error handling, leveraging strong typing for improved code maintainability and user experience.
              </p>
              <Link
                href="https://github.com/osamma1/currency-converter"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                GitHub Repository
                <i className="uil uil-external-link-alt"></i>
              </Link>
              <Link
                href="#"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                See Live
                <i className="uil uil-external-link-alt"></i>
              </Link>
            </div>
          </div>

          {/* Portfolio 5 */}
          <div className={`${styles.portfolioContent} grid swiper-slide`}>
            <div className={styles.portfolioData}>
              <h3 className={styles.portfolioTitle}>Password Strength Checker</h3>
              <p className={styles.portfolioDescription}>
                I created a Python-based password strength checker that analyzes passwords and provides security feedback. It enhances cybersecurity practices by teaching users how to create stronger passwords.
              </p>
              <Link
                href="https://github.com/osamma1/Password-Strength-Checker-"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                GitHub Repository
                <i className="uil uil-external-link-alt"></i>
              </Link>
              <Link
                href="#"
                className={`${styles.button} ${styles.buttonSmall} ${styles.portfolioButton}`}
              >
                See Live
                <i className="uil uil-external-link-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

