import React from "react";
import { Box } from "@mui/material";

export interface HeaderProps {
  isCompactNav: boolean;
  children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const styles = {
    headerRoot: {
      width: "100%",
      height: "76px",
      background: "blue",
    },
  };

  return (
    <Box id="header" sx={styles.headerRoot}>
      {props.children}
    </Box>
  );
};

export default Header;
