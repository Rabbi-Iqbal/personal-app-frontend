import { Typography } from "@material-ui/core";
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
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
            porttitor mauris. Praesent posuere vestibulum felis non elementum.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Ut eleifend ut mauris at tincidunt.
          </Typography>
        </div>
        <div className={styles.right}>
          <img
            width="350px"
            height="250px"
            src="/roman-synkevych-vXInUOv1n84.jpg"
            alt="Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
