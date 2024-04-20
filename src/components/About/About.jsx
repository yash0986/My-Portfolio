import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}

        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I'm in 3rd year,pursuing Computer Science and Engineering from National Institute of Technology Jamshedpur.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Hackathon-GDSC</h3>
              <p>
              Our Team, KAVACH selected in Google Developer Student Clubs solution challenge regionals .
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Competetive Programming</h3>
              <p>
              Stood 23th in Code Hasten, Coding Contest organised by IIT Bhubaneswa
              </p>
              <br></br>
              <p>
              Secured AIR 469 and Global Rank 1017 in Google Code Jam 2023 Farewell Round A
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills</h3>
              <p>
              I possess strong problem-solving skills coupled with a deep understanding of Data Structures and Algorithms. Additionally, I have expertise in full-stack development, specializing in React JavaScript, EJS, and machine learning technologies.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
