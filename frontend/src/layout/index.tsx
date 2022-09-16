import Header from "./Header";
import MyDrawer from "./Drawer";
import React from "react";
import { Box } from "@mui/system";
import { Container, Toolbar } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const drawerWidth = 240;

const Layout: React.FC<Props> = ({ children }) => {
  // return (
  //   <>
  //     <Header />
  //     <Box display="flex">
  //       <MyDrawer drawerWidth={drawerWidth} />
  //       <Box
  //         component="main"
  //         sx={{
  //           flexGrow: 1,
  //           p: 3,
  //           width: { sm: `calc(100% - ${drawerWidth}px)` },
  //           backgroundColor: "red",
  //         }}
  //       >
  //         {children}
  //       </Box>
  //     </Box>
  //   </>
  // );

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <MyDrawer drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          // backgroundColor: (theme) =>
          //   theme.palette.mode === 'light'
          //     ? theme.palette.background.default
          //     : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          {/* <Outlet /> */}
          {children}
        </Container>
      </Box>
    </Box>
  )
};

export default Layout;
