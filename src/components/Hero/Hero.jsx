import React from 'react';
import styles from "./Hero.module.css";
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shashwat</h1>
        <p className={styles.description}>
          I'm a full-stack developer and DevOps Enginner.Reach out if you'd like to learn more!
        </p>
        <div className={styles.BtnDiv}>
        <a href="mailto:shashwatandon@gmail.com" className={styles.Btns}>Contact Me!</a>
        <a href="/assets/cv/Resume.pdf" download className={styles.Btns}>Download Cv
         </a>
        </div>
        
      </div>
      <img src="/assets/hero/heroImage.png" alt="Hero Image" className={styles.heroImg}/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>

    </section>
  );
}

export default Hero;