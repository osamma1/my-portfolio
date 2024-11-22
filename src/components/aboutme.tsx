import React from 'react'
import styles from '@/styles/About-me.module.css'
import Image from 'next/image'
import { FaCloudDownloadAlt } from 'react-icons/fa'
function Aboutme() {
  return (
    <div className={styles.aboutContainer}>
    <div className={styles.about}>
      <div className={styles.mainAbout}>
        
      </div>

      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <h3>Turning Ideas into Delightful <span >Digital</span> Realities</h3>
        <p>Hello! I&#39;m Usama, a web developer with experience in creating engaging digital experiences.
          Proficient in HTML, CSS, JavaScript, TypeScript, React, and Next.js, I specialize in building
          responsive websites that prioritize user experience and functionality.
          With a background in UI/UX design and SEO, I am dedicated to delivering impactful solutions
          that drive results. I&#39;m always eager to learn and apply new technologies to enhance my projects.
          Let&#39;s work together to bring your ideas to life!</p>
        <div >
        <h2 >Education &amp; Experience</h2>
        <ul className={styles.aboutli}>
        <li >
            <strong>Dawood University of Engineering and Technology</strong><br />
            Bachelors in Cyber Security (2021 - Present)
          </li>
          <li >
            <strong>Governor Sindh Initiative for Generative AI, Web3, Metaverse</strong><br />
            Studying Generative AI, Metaverse, and Web 3.0 (Present)
          </li>
          <li >
            <strong>Intermediate in Computer Science</strong><br />
            SM Science college (2021)
          </li>
         
          
        </ul>
      </div>
      <a href="/sanchez.pdf" download="Your_CV.pdf">
      <button className={styles.connectbtn}>
        Download CV <FaCloudDownloadAlt className={styles.call} />
      </button>
    </a>
      </div>

     

    </div>
    </div>
  )
}

export default Aboutme