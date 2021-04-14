import { makeStyles, Menu } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import arrowIcon from "assets/images/icons/arrow.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "55px",
    "& div:nth-child(3)": {
      boxShadow: "none",
      borderRadius: "0px",
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
  // const [currentMenu, setCurrentMenu] = useState("");
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
    // let boysItems = menItems;
    // let ladiesItems = [""];
    let categoryItems = menItems;
    return (
      <Menu
        className={classes.root}
        id="category_menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        // MenuListProps={{ onMouseLeave: handleClose }}
        disableAutoFocusItem={true}
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
          <Link
            to="#"
            onClick={handleClick}
          
            value="Men"
            aria-controls="category_menu"
            aria-haspopup="true"
          >
            Men <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            value="Men"
            onClick={handleClick}
           
            aria-controls="category_menu"
            aria-haspopup="true"
          >
            Ladies<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={handleClick}
           
            value="Men"
            aria-controls="category_menu"
            aria-haspopup="true"
          >
            Girls<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={handleClick}
           
            value="Men"
            aria-controls="category_menu"
            aria-haspopup="true"
          >
            Boys <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
          </Link>
        </li>
      </ul>
      <CategoryMenu />
    </div>
  );
};
export default CategoryNavBar;
