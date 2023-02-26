import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import StorageIcon from "@mui/icons-material/Storage";
import NetworkPingIcon from "@mui/icons-material/NetworkPing";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const drawerWidth = 240;
const menuItems = [
  {
    label: "HOME",
    path: "/",
    Icon: HomeIcon,
    imgPath: "/assets/images/btn/btn-home.png",
  },
  {
    label: "SM CALENDAR",
    path: "/",
    Icon: CalendarMonthIcon,
    imgPath: "/assets/images/btn/sm-calendar.png",
  },
  {
    label: "PIPELINE",
    path: "/",
    Icon: PermDataSettingIcon,
    imgPath: "/assets/images/btn/btn-pipeline.png",
  },
  {
    label: "JOB DATABASE",
    path: "/",
    Icon: StorageIcon,
    imgPath: "/assets/images/btn/btn-job-database.png",
  },
  {
    label: "KPI",
    path: "/",
    Icon: NetworkPingIcon,
    imgPath: "/assets/images/btn/btn-kpi.png",
  },
  {
    label: "Training Technique",
    path: "/",
    Icon: FileCopyIcon,
    imgPath: "/assets/images/btn/btn-training-technique.png",
  },
  // {
  //   label: "MY RESUME",
  //   path: "/resume-list",
  //   Icon: ArticleIcon,
  //   imgPath: "/assets/images/btn/btn-pipeline.png",
  // },
];

function MainLayout(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SMARTCRUIT
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding onClick={() => navigate("/resume-list")}>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="MY RESUME" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "rgba(26,88,125,0)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {menuItems.map((item, index) => (
              <img
                src={item.imgPath}
                key={index}
                style={{
                  margin: "10px",
                  cursor: "pointer",
                }}
                alt="btn"
                onClick={() => navigate(item.path)}
              />
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Button
              variant="contained"
              onClick={() => navigate("/resume-list")}
              sx={{
                background: "white",
                color: "black",
                ":hover": {
                  backgroundColor: "white",
                },
                whiteSpace: "nowrap",
              }}
            >
              MY RESUME
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ width: "100%" }}>
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
