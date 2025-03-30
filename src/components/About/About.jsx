import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png"
          alt="Me Sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Specializing in crafting interactive and visually appealing web
                experiences, ensuring seamless user engagement across all
                devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Focused on building scalable and efficient backend systems,
                optimizing database interactions, and ensuring smooth API
                communication.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="/assets/about/devOps.png"
              alt="cursor icon"
              className={styles.img}
            />
            <div className={styles.aboutItemText}>
              <h3>DevOps Engineer</h3>
              <p>
                Helping to automate workflows, manage cloud servers, and ensure
                websites and applications run smoothly with minimal downtime.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
