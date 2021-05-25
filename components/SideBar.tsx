import { Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import clsx from "clsx";
import {
  createStyles,
  Theme,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import React from "react";
const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer - 1,
      backgroundColor: "red",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      // marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      backgroundColor: "#5D6BA7",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      backgroundColor: "#5D6BA7",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      // justifyContent: "flex-end",
      // padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      // ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      // marginTop: -50,
      padding: theme.spacing(3),
    },
  })
);
export default function SideBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >

        <Toolbar/>
      </AppBar> */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        style={{ backgroundColor: "red" }}
      >
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
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
          </div>
        ) : (
          <div className={classes.toolbar}>
            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
              <Typography
                style={{
                  marginTop: 20,
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
                variant="h5"
                gutterBottom
              >
                Iqbal Hossain
              </Typography>
            </div>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        )}

        <Divider />

        {open && (
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "280px",
              }}
            >
              <Avatar
                style={{ width: 150, height: 150, marginTop: 10 }}
                alt="Iqbal Hossain"
                src="https://media-exp1.licdn.com/dms/image/C5103AQHvVINsqoFpjw/profile-displayphoto-shrink_400_400/0/1553267878909?e=1627516800&v=beta&t=gXXSb31hdzp1KOfatlAOJhARndUfR2ARpl-O8bBnZmY"
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
                Full-Stack developer for the more than a couple of years now.
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
        )}

        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
