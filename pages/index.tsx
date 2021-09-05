import { StylesProvider, Typography } from "@material-ui/core";
import SideBar from "../components/SideBar";
import AboutMe from "../components/AboutMe";
import "@fontsource/roboto";
import SectionCard from "../components/SectionCard";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <SideBar>
        <div style={{ padding: 30, backgroundColor: "#f4f1f1" }}>
          <AboutMe />
        </div>
        <div style={{ padding: 30 }}>
          <SectionCard title="Technical Skills" />
          <Typography className={styles.skillsTitle} variant="h5">Programming Language (more than just printing Hello World)</Typography>
          <div className={styles.skillsContent}>
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
            <img src="https://img.icons8.com/color/48/000000/python--v1.png" />
          </div>
          <SectionCard title="" />
          <Typography className={styles.skillsTitle} variant="h5">Libray/Framework</Typography>
          <div className={styles.skillsContent}>
            <img src="https://img.icons8.com/plasticine/48/000000/react.png" />
            <img src="https://img.icons8.com/color/48/000000/redux.png" />
            <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
            <img src="https://img.icons8.com/color/48/000000/django.png" />
            <img src="https://img.icons8.com/color/48/000000/material-ui.png" />
          </div >
          <Typography className={styles.skillsTitle} variant="h5">Database</Typography>
          <div className={styles.skillsContent}>
            <img src="https://img.icons8.com/color/48/000000/postgreesql.png" />
            <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
          </div>
          <Typography className={styles.skillsTitle} variant="h5">Others</Typography>
          <div className={styles.skillsContent}>
          <img src="https://img.icons8.com/color/48/000000/git.png"/>
          <img src="https://img.icons8.com/color/48/000000/nginx.png"/>
          <img src="https://img.icons8.com/color/48/000000/docker.png"/>
          <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
          <img src="https://img.icons8.com/color/48/000000/css3.png"/>
          </div>
        </div>
      </SideBar>
    </div>
  );
}
