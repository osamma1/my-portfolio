import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Skills.module.css'

function Skills() {
  return (
    <div className={styles.areas}>
        <div className={styles.areastop}>
            <h2>My Expert <span>Areas</span></h2>
            <p>I have a deep passion for web development and have worked with various technologies and frameworks.</p>
        </div>
        <div className={styles.skilldetails}>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/figma.png'} alt="figma" width={100} height={100}  className={styles.img}/>
            <h4>90%</h4>
            </div>
            <h3>Figma</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/github.png'} alt="/github" width={100} height={100} />
            <h4>92%</h4>
            </div>
            <h3>GitHub</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/vercel.png'} alt="vercel" width={100} height={100} />
            <h4>92%</h4>
            </div>
            <h3>Vercel</h3>

          </div>

          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/git.png'} alt="git" width={100} height={100} />
            <h4>70%</h4>
            </div>
            <h3>Git</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/netlify.png'} alt="netlify" width={100} height={100} />
            <h4>80%</h4>
            </div>
            <h3>Netlify</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/html.png'} alt="html" width={100} height={100} />
            <h4>98%</h4>
            </div>
            <h3>HTML5</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/css.png'} alt="css" width={100} height={100} />
            <h4>91%</h4>
            </div>
            <h3>CSS3</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/tailwind.png'} alt="tailwind css" width={100} height={100} />
            <h4>97%</h4>
            </div>
            <h3>Tailwind CSS</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/js.png'} alt="javascript" width={100} height={100} />
            <h4>90%</h4>
            </div>
            <h3>JavaScript</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/ts.png'} alt="typescript" width={100} height={100} />
            <h4>87%</h4>
            </div>
            <h3>Typescript</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/react.png'} alt="react" width={100} height={100} />
            <h4>64%</h4>
            </div>
            <h3>React.js</h3>

          </div>
          <div className={styles.box}>
            <div className={styles.boxImage}>
            <Image src={'/next.png'} alt="next.js" width={100} height={100} />
            <h4>78%</h4>
            </div>
            <h3>Next.js</h3>

          </div>



        </div>
      
    </div>
  )
}

export default Skills