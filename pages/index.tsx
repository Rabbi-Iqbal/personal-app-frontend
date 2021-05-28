import Head from "next/head";
import Image from "next/image";
import { Typography } from "@material-ui/core";
import SideBar from "../components/SideBar";
import AboutMe from "../components/AboutMe";
import "@fontsource/roboto";

export default function Home() {
  return (
    <div>
      <SideBar>
        <div style={{ padding: 30, backgroundColor: "#f4f1f1" }}>
          <AboutMe />
        </div>
      </SideBar>
    </div>
  );
}
