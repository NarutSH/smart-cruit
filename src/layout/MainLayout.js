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
import ArticleIcon from "@mui/icons-material/Article";

const drawerWidth = 240;
const menuItems = [
  {
    label: "HOME",
    path: "/",
    Icon: HomeIcon,
  },
  {
    label: "SM CALENDAR",
    path: "/",
    Icon: CalendarMonthIcon,
  },
  {
    label: "PIPELINE",
    path: "",
    Icon: PermDataSettingIcon,
  },
  {
    label: "JOB DATABASE",
    path: "/",
    Icon: StorageIcon,
  },
  {
    label: "KPI",
    path: "/",
    Icon: NetworkPingIcon,
  },
  {
    label: "Training Technique",
    path: "/",
    Icon: FileCopyIcon,
  },
  {
    label: "MY RESUME",
    path: "/resume-list",
    Icon: ArticleIcon,
  },
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={() => navigate("/")}
          >
            SMARTCRUIT
          </Typography> */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                startIcon={<item.Icon />}
                sx={{
                  color: "black",
                  marginLeft: "5px",
                  backgroundColor: "white",
                }}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
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
            display: { xs: "block", sm: "none" },
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
