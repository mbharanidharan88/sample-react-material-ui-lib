import React, { ReactNode } from "react";
import { Box, Divider, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/solutions.png";

export interface HeaderProps {
  isCompactNav: boolean;
  children?: ReactNode;
}

const StyledImg = styled("img")({
  height: "50px",
  alignSelf: "center",
});

const Header = (props: HeaderProps) => {
  const theme = useTheme();

  const styles = {
    headerRoot: {
      width: "100%",
      height: "76px",
      background: theme.palette.background.paper,
      padding: "5px",
      display: "flex",
      alignItems: "center",
    },
    headerLogoContainer: {
      display: "flex",
    },
    divider: {
      marginLeft: "2px",
      marginRight: "2px",
    },
  };

  return (
    <Box id="header" sx={styles.headerRoot}>
      {props.isCompactNav ? (
        <Box sx={styles.headerLogoContainer}>
          <StyledImg src={logo} />
          <Divider sx={styles.divider} orientation="vertical" flexItem />
        </Box>
      ) : null}
      {props.children}
    </Box>
  );
};

export default Header;
