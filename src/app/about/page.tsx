"use client";
import React from 'react';
import Typewriter from '@/components/typewriter'; // Adjust the import based on your file structure
import styles from '@/styles/About.module.css';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaHtml5 } from "react-icons/fa";
import Image from 'next/image';
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { IoLogoCss3 } from 'react-icons/io';
import { SiTailwindcss } from 'react-icons/si';
import { DiGoogleAnalytics } from 'react-icons/di';
import Aboutme from '@/components/aboutme';
import Skills from '@/components/skills';

function About() {
    return (
        <div>
        <div className={styles.aboutContainer}>
          

         
            <div className={styles.overlay}>
                <div className={styles.about}>
                    <div>
                        <h4 className={styles.heading}>Hello I&#39;m</h4>
                        <h1 className={styles.subheading}>Usama Faraz</h1>
                        <h3 className={styles.thirdheading}>
                            And I&#39;m a
                            <span>
                            <Typewriter
                                strings="Full-Stack Developer.,Web Designer.,Frontend Developer.,Cyber Security Analyst.,Penetration Tester."
                                className={styles.typewriter} // Custom CSS class
                                color="#fff" // Custom color
                                // Example border
                                shadow="-4px 0px 4px #9d00ff"
                            />
                            </span>
                        </h3>

                        <p className={styles.paragraph}>
                            I am passionate about creating stunning web applications with a focus on responsive design, modern UI/UX, and clean code. Let&#39;s build something great together!
                        </p>

                        <div className={styles.iconButtons}>
                            <Link href="https://www.linkedin.com/in/usama-faraz-7006b2232/" aria-label="LinkedIn"><FaLinkedin className={styles.icon} /></Link>
                            <Link href="https://github.com/osamma1" aria-label="GitHub"><FaGithub className={styles.icon} /></Link>
                        </div>

                        <div className={styles.homBtn}>
                            <Link href="/projects" className={styles.work}>
                                How I work <svg  className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="#a66cc9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M14 6L20 12L14 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </Link>
                        </div>
                    </div>

                    </div>
                    </div>    
        </div>
        <div className={styles.scroll}>
                    <div className={styles.scrollSkills}>
                        <TbBrandNextjs className={styles.logo}/><span>Next.js</span>
                        <FaReact className={styles.logo} /> <span>React.js</span>
                        <BiLogoTypescript className={styles.logo}/><span>Typescript</span>
                        <BiLogoJavascript className={styles.logo}/><span>Javascript</span>
                        <FaHtml5 className={styles.logo}/><span>Html</span>
                        <IoLogoCss3 className={styles.logo}/><span>CSS</span>
                        <SiTailwindcss className={styles.logo}/><span>Tailwind css</span>
                        <DiGoogleAnalytics className={styles.logo}/><span>SEO</span>
                    </div>
                    <div className={styles.scrollSkills}>
                        <TbBrandNextjs className={styles.logo} /><span>Next.js</span>
                        <FaReact className={styles.logo} /> <span>React.js</span>
                        <BiLogoTypescript className={styles.logo}/><span>Typescript</span>
                        <BiLogoJavascript className={styles.logo}/><span>Javascript</span>
                        <FaHtml5 className={styles.logo}/><span>Html</span>
                        <IoLogoCss3 className={styles.logo}/><span>CSS</span>
                        <SiTailwindcss className={styles.logo}/><span>Tailwind css</span>
                        <DiGoogleAnalytics className={styles.logo}/><span>SEO</span>
                    </div>
                    
                </div>
                <Aboutme/>
                <Skills/>
        </div>
    );
}

export default About;