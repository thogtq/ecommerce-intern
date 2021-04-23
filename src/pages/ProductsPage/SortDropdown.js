import {
  Divider,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  withStyles,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
const ExpandLessIcon = withStyles({
  root: { color: "#202124" },
})(ExpandLess);
const ExpandMoreIcon = withStyles({
  root: { color: "#202124" },
})(ExpandMore);
const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "179px",
    height: "32px",
    cursor: "pointer",
    padding: "5px 15px",
    backgroundColor: "#f6f6f6",
    border: "1px solid #b7b7b7",
  },
  title: {
    font: "12px/18px Montserrat-Medium",
    color: "#4d4d4d",
  },
  sortValue: {
    width: "90px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    font: "12px/18px Montserrat-Bold",
    color: "#202124",
    marginLeft: "7px",
  },
  icon: {
    position: "absolute",
    right: 0,
    bottom: "3px",
  },
});
export default function SortDropdown({ filter, setFilter }) {
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [sortName, setSortName] = useState("Popularity");
  const classes = useStyles();
  const handleOpenMenu = (e) => {
    setAnchorMenu(e.currentTarget);
  };
  const handleCloseMenu = (e) => {
    setAnchorMenu(null);
  };
  const StyledMenu = withStyles({
    paper: {
      width: "180px",
      borderRadius: "0px",
    },
    list: {
      padding: 0,
    },
  })(Menu);
  const StyledMenuItem = withStyles({
    root: {
      height: "36px",
      backgroundColor: "#fbfbfb",
      font: "12px/18px Montserrat-Medium",
      color: "#4d4d4d",
    },
  })(MenuItem);
  const handleItemClick = (e) => {
    let value = e.currentTarget.dataset.value;
    let sortBy = value.split(" ")[0];
    let sortOrder = value.split(" ")[1];
    setSortName(e.target.textContent);
    setFilter({ ...filter, sortBy: sortBy, sortOrder: sortOrder });
    handleCloseMenu();
  };
  return (
    <React.Fragment>
      <Grid classes={{ root: classes.root }} container onClick={handleOpenMenu}>
        <span className={classes.title}>Sort By:</span>
        <span className={classes.sortValue}>{sortName}</span>
        {anchorMenu ? (
          <ExpandLessIcon className={classes.icon} />
        ) : (
          <ExpandMoreIcon className={classes.icon} />
        )}
      </Grid>
      <StyledMenu
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={handleCloseMenu}
        disableAutoFocusItem={true}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <StyledMenuItem data-value="sold -1" onClick={handleItemClick}>
          Popularity
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem data-value="name 1" onClick={handleItemClick}>
          Name:A - Z
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem data-value="price 1" onClick={handleItemClick}>
          Price:lowest to highest
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem data-value="price -1" onClick={handleItemClick}>
          Price:highest to lowest
        </StyledMenuItem>
      </StyledMenu>
    </React.Fragment>
  );
}
