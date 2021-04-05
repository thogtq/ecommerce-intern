import { makeStyles, Menu } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import arrowIcon from "../files/images/icons/arrow.svg";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    "& div:nth-child(3)": {
      boxShadow: "none",
      borderRadius: "0px",
      left: "50%!important",
      transform: "translate(-50%)!important",
    },
    "& li": {
      display: "inline-block",
      color: "#202124",
      fontFamily: "Montserrat-Regular",
    },
    "& ul": {
      background: "#fbfbfb",
      border: "0.5px solid #eaeaea",
    },
  },
}));
const CategoryNavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(document.getElementById("category_nav"));
  };
  const handleClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
  };
  const CategoryMenu = () => {
    let menItems = [
      "Tops",
      "Bottoms",
      "Dresses",
      "Shoes",
      "Accesories",
      "Sale",
    ];
    let boysItems = menItems;
    let ladiesItems = [""];
    let categoryItems = menItems;
    return (
      <Menu
        className={classes.root}
        id="category_menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {categoryItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    );
  };
  return (
    <div id="category_nav" className="header-category-nav">
      <ul>
        <li>
          <a
            href="#"
            onClick={handleClick}
            value="Men"
            aria-controls="category_menu"
            aria-haspopup="true"
          >
            Men <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
          </a>
        </li>
        <li>
          <a
            href="#"
            value="Men"
            onClick={handleClick}
            value="Men"
            aria-controls="category_menu"
            aria-haspopup="true"
          >
            Ladies<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={handleClick}
            value="Men"
            aria-controls="category_menu"
            aria-haspopup="true"
          >
            Girls<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={handleClick}
            value="Men"
            aria-controls="category_menu"
            aria-haspopup="true"
          >
            Boys <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
          </a>
        </li>
      </ul>
      <CategoryMenu />
    </div>
  );
};
export default CategoryNavBar;
