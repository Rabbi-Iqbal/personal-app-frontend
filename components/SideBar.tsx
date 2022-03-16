import React from "react";
import Link from 'next/link'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Avatar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import styles from "../styles/SideBar.module.scss";

const drawerWidth = 300;


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

type AppProps = {
  children: React.ReactNode;
};

export default function SideBar(props: AppProps) {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} PaperProps={{ sx: { backgroundColor: '#5D6BA7' } }} >
        {!open ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              size="large">
              <MenuIcon />
            </IconButton>
          </div>
        ) : (
          <div className={styles['toolbar']}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                alignItems: "center",
                height: 60,
                width: '100%'
              }}
            >
              <div>
                <Typography
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                  variant="h5"
                >
                  Iqbal Hossain
                </Typography>
              </div>
            </div>
            <div style={{ position: "absolute", right: 0 }}>
              <IconButton onClick={handleDrawerClose} size="large">
                <ChevronLeftIcon />
              </IconButton>
            </div>
          </div>
        )}
        <Divider />

        <div style={{ width: "100%" }}>
          <div
            className={
              open ? styles["container-open"] : styles["container-close"]
            }
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "280px",
              overflow: "hidden",
            }}
          >
            <Avatar
              style={{ width: 150, height: 150, marginTop: 10 }}
              alt="Iqbal Hossain"
              src="/me2.jpg"
            />
            <Typography
              align="center"
              style={{
                marginTop: 10,
                color: "#fff",
                padding: 10,
                whiteSpace: "initial",
              }}
              variant="body2"
              gutterBottom
            >
              Hello and Welcome! My name is Iqbal and I've been working as a
              Full-Stack developer for about 3 years now. Feel free to look around my portal and let me know if I could be of any assistance.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              <LinkedInIcon />
              <GitHubIcon />
            </div>
          </div>
        </div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <Link href='/blogs'>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            </Link>
            <ListItemText primary="Blogs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={styles['content']}>
        {props.children}
      </main>
    </div>
  );
}
