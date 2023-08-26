import { Box, Container, makeStyles } from "@mui/material";
import React, { useState } from "react";
import { Header } from "../header";
import { SideNav } from "../nav";
import CssBaseline from "@mui/material/CssBaseline";

export interface MainLayoutProps {
  headerChildren?: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const [navCompact, setNavCompact] = useState(false);

  const toggleNavSize = () => {
    setNavCompact(!navCompact);
  };

  const contentBoxWidth = navCompact
    ? "calc(100% - 76px)"
    : "calc(100% - 256px)";

  const styles = {
    mainLayoutParent: {
      background: "Gray",
      height: "100vh",
      display: "flex",
    },
    contentBox: {
      width: contentBoxWidth,
      transition: "width 1s",
    },
    contentBoxChildren: {
      padding: "5px",
    },
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container
        id="main-layout"
        maxWidth={false}
        sx={styles.mainLayoutParent}
        disableGutters
      >
        <SideNav
          onToggleNavSize={toggleNavSize}
          isCompactNav={navCompact}
        ></SideNav>
        <Box id="content" sx={styles.contentBox}>
          <Header isCompactNav={navCompact}>{props.headerChildren}</Header>
          <Box id="contentChildren" sx={styles.contentBoxChildren}>
            {props.children}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default MainLayout;
