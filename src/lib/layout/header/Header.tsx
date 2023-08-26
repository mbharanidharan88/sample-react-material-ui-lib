import React from "react";
import { Box, Divider, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/solutions.png";

export interface HeaderProps {
  isCompactNav: boolean;
  children?: React.ReactNode;
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
      paddingLeft: "5px",
      display: "flex",
    },
    headerLogoContainer: {
      display: "flex",
    },
  };

  return (
    <Box id="header" sx={styles.headerRoot}>
      {props.isCompactNav ? (
        <Box sx={styles.headerLogoContainer}>
          <StyledImg src={logo} />
          <Divider orientation="vertical" flexItem />
        </Box>
      ) : null}
      {props.children}
    </Box>
  );
};

export default Header;
