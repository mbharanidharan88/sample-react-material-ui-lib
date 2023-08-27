import React from "react";
import { Box, Divider, IconButton, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon";
import logo from "../../../../assets/solutions.png";
import { styled } from "@mui/material/styles";
import NavMenu, { INavMenuItem } from "../menu/NavMenu";

const StyledImg = styled("img")({
  height: "50px",
  width: "calc(100% - 60px)",
  flexGrow: 1,
});

export interface ISideNavProps {
  isCompactNav: boolean;
  onToggleNavSize: any;
  navItems: INavMenuItem[];
}

const SideNav: React.FC<ISideNavProps> = (props: ISideNavProps) => {
  const sideNavWidth = props.isCompactNav ? "76px" : "256px";
  const sideNavContentPosition = props.isCompactNav ? "start" : "center";
  const theme = useTheme();

  const styles = {
    sideNavRoot: {
      width: sideNavWidth,
      background: theme.palette.warning.dark,
      height: "100%;",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      transition: "width 1s",
      padding: "5px",
    },
    sideNavTitle: {
      height: "60px",
      display: "flex",
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

      <NavMenu navItems={props.navItems} isCompactNav={props.isCompactNav} />
    </Box>
  );
};

export default SideNav;
