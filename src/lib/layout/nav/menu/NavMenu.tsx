import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";

export interface INavMenuProps {
  isCompactNav: boolean;
  navItems: INavMenuItem[];
}

export interface INavMenuItem {
  text: string;
  linkTo: string;
  icon: string;
  parent?: string;
}

const drawerWidth = 240;

const NavMenu: React.FC<INavMenuProps> = (props: INavMenuProps) => {
  const theme = useTheme();
  const styles = {
    listItem: {
      paddingTop: "8px",
      paddingBottom: "8px",
      paddingLeft: "16px",
      paddingRight: "16px",
    },
    listItemText: {
      color: theme.palette.common.white,
      fontSize: theme.typography.subtitle1,
    },
    navDivider: {
      marginTop: "5px",
      background: theme.palette.common.white,
    },
    icon: {
      color: theme.palette.common.white,
      marginTop: "4px",
      marginBottom: "4px",
    },
  };

  const drawer: JSX.Element = (
    <div>
      <Divider light={true} sx={styles.navDivider} />
      <List>
        {props.navItems.map((navItem, index) => (
          <ListItem
            key={navItem.text}
            component={Link}
            to={"/" + navItem.linkTo}
          >
            <ListItemIcon>
              <Icon sx={styles.icon}>{navItem.icon}</Icon>
            </ListItemIcon>
            {props.isCompactNav ? null : (
              <ListItemText sx={styles.listItemText} primary={navItem.text} />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box id="navMenu" width={drawerWidth}>
      {drawer}
    </Box>
    // <Drawer
    //   id="drawer"
    //   sx={{
    //     width: drawerWidth,
    //     background: "red",
    //   }}
    //   variant="persistent"
    //   anchor="left"
    // >
    //   <Toolbar />
    //   <Divider />
    //   {/* <List>
    //     {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
    //       <ListItem key={text} disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             {index % 2 === 0 ? <Icon>mail</Icon> : <Icon>all_inbox</Icon>}
    //           </ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItemButton>
    //       </ListItem>
    //     ))}
    //   </List>
    //   <Divider /> */}
    //   {drawer}
    // </Drawer>
  );
};

export default NavMenu;
