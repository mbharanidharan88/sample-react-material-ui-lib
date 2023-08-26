import React from "react";
import { Box, Divider, IconButton, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon";
import logo from "../../../assets/solutions.png";

export interface SideNavProps {
  isCompactNav: boolean;
  onToggleNavSize: any;
}

const SideNav = (props: SideNavProps) => {
  const sideNavWidth = props.isCompactNav ? "76px" : "256px";
  const sideNavContentPosition = props.isCompactNav ? "center" : "right";
  const theme = useTheme();

  const styles = {
    sideNavRoot: {
      width: sideNavWidth,
      background: "green",
      height: "100%;",
      display: "flex",
      justifyContent: sideNavContentPosition,
      transition: "width 1s",
    },
    menuIcon: {
      color: theme.palette.common.white,
    },
    doubleArrowLeftIcon: {
      color: theme.palette.common.white,
    },
  };

  return (
    <Box id="sideNav" sx={styles.sideNavRoot}>
      <Box id="sideNavTitle">
        {props.isCompactNav ? (
          <IconButton onClick={props.onToggleNavSize}>
            <Icon sx={styles.menuIcon}>menu</Icon>
          </IconButton>
        ) : (
          <Box sx={{ display: "flex" }}>
            <img src={logo} />
            <Divider orientation="vertical" flexItem />
            <IconButton onClick={props.onToggleNavSize}>
              <Icon sx={styles.doubleArrowLeftIcon}>
                keyboard_double_arrow_left
              </Icon>
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SideNav;
