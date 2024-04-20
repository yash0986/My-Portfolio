import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash Garg</h1>
        <p className={styles.description}>
          I'm a full-stack developer , and a passionate Computer Science undergrad from National Institute of Technology Jamshedpur.
        </p>
        <a href="mailto:as920286.yashgarg@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>

      </div>


      {/* <img
        src={getImageUrl("hero/heelo-modified.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
