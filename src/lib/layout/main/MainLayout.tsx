import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import { Header } from "../header";
import { SideNav } from "../nav";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet, Link } from "react-router-dom";
import { INavMenuItem } from "../nav/menu/NavMenu";

export interface IMainLayoutProps {
  headerChildren?: ReactNode;
  navItems: INavMenuItem[];
}

const MainLayout: React.FC<IMainLayoutProps> = (props: IMainLayoutProps) => {
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
          navItems={props.navItems}
        ></SideNav>
        <Box id="content" sx={styles.contentBox}>
          <Header isCompactNav={navCompact}>{props.headerChildren}</Header>
          <Box id="contentChildren" sx={styles.contentBoxChildren}>
            <Outlet />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default MainLayout;
