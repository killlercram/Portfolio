import React from 'react';
import styles from "./Contact.module.css";


const Contact = () => {
  return (
    <footer id='contact' className={styles.conatiner}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email Icon"/>
          <a href="mailto:shashwatandon@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn Icon"/>
          <a href="https://www.linkedin.com/in/shashwat-tandon-b7281021a/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github Icon"/>
          <a href="https://github.com/killlercram">GitHub</a>
        </li>
      </ul>

    </footer>
   
  )
}

export default Contact