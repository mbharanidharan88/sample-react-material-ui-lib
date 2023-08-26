import React from "react";
import { Box, Divider, IconButton, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon";
import logo from "../../../../assets/solutions.png";
import { styled } from "@mui/material/styles";
import NavMenu from "../menu/NavMenu";

const StyledImg = styled("img")({
  height: "50px",
  width: "calc(100% - 60px)",
  flexGrow: 1,
});

export interface SideNavProps {
  isCompactNav: boolean;
  onToggleNavSize: any;
  navItems: React.ReactNode;
}

const SideNav = (props: SideNavProps) => {
  const sideNavWidth = props.isCompactNav ? "76px" : "256px";
  const sideNavContentPosition = props.isCompactNav ? "center" : "right";
  const theme = useTheme();

  const styles = {
    sideNavRoot: {
      width: sideNavWidth,
      background: theme.palette.warning.dark,
      height: "100%;",
      display: "flex",
      justifyContent: sideNavContentPosition,
      transition: "width 1s",
      padding: "5px",
    },
    sideNavTitle: {
      height: "60px",
    },
    menuIcon: {
      color: theme.palette.common.white,
    },
    doubleArrowLeftButton: {
      wdith: "60px",
    },
    doubleArrowLeftIcon: {
      color: theme.palette.common.white,
    },
  };

  return (
    <Box id="sideNav" sx={styles.sideNavRoot}>
      <Box id="sideNavTitle" sx={styles.sideNavTitle}>
        {props.isCompactNav ? (
          <IconButton onClick={props.onToggleNavSize}>
            <Icon sx={styles.menuIcon}>menu</Icon>
          </IconButton>
        ) : (
          <Box sx={{ display: "flex" }}>
            <StyledImg src={logo} />
            <Divider orientation="vertical" flexItem />
            <IconButton onClick={props.onToggleNavSize}>
              <Icon sx={styles.doubleArrowLeftIcon}>
                keyboard_double_arrow_left
              </Icon>
            </IconButton>
          </Box>
        )}
      </Box>
      <Box>{props.navItems}</Box>
    </Box>
  );
};

export default SideNav;
