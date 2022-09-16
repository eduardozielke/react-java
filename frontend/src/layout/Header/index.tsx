import {
  AppBar,
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import React, { cloneElement, useState } from "react";
import { Logout, Settings, SettingsAccessibility } from "@mui/icons-material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface Props {
  drawerWidth?: number;
}


interface ElevationScrollProps {
  children: React.ReactElement;
}

const ElevationScroll = ({ children }: ElevationScrollProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: document.querySelector('main') as Node ?? undefined
  });

  return cloneElement(children, {
    elevation: trigger ? 2 : 0,
  });
};

const Header: React.FC = ({ drawerWidth }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ElevationScroll>
      <Box>
        <AppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton color="secondary">
              {/* {menuOpen && <MenuOpenIcon />} */}
            </IconButton>
            <Box>
              <Box>
                <Tooltip title={"account_settings"}>
                  <IconButton
                    // onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    // aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <Avatar />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorElUser}
                open={false}
                onClose={handleCloseUserMenu}
                onClick={handleCloseUserMenu}
                // PaperProps={paperProps}
              >
                <Box>
                  <Box
                    height="64px"
                    sx={{
                      // backgroundColor: theme.palette.primary.main,
                      marginTop: "-10px",
                    }}
                  ></Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-around"
                    height="100px"
                  >
                    <Avatar />
                    <Box textAlign="center">
                      <Typography variant="h6">User</Typography>
                      {/* <Typography>{company?.name}</Typography> */}
                    </Box>
                  </Box>
                </Box>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <SettingsAccessibility fontSize="small" />
                  </ListItemIcon>
                  {"settings"}
                </MenuItem>
                <MenuItem onClick={() => {}}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  {"logout"}
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ElevationScroll>
  );
};

export default Header;
