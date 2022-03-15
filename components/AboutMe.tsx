import { Typography } from "@mui/material";
import styles from "../styles/AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.split}>
        <div className={styles.left}>
          <Typography variant="h3">Mohammed Iqbal Hossain Rabbi</Typography>
          <Typography variant="h5" gutterBottom>
            Full Stack Developer
          </Typography>
          <Typography variant="body1" style={{fontSize: 20}}>
            Demonstrated experience in building robust and scalable software solutions. Detail-oriented, inquisitive, and adaptive individual. Always seeking an opportunity to utilize my skills and develop my career in the aspect of software engineering.
          </Typography>
        </div>
        <div className={styles.right}>
          <img
            width="250px"
            height="320px"
            src="/me.jpg"
            alt="Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
