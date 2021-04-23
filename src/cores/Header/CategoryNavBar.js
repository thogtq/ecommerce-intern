import { makeStyles, Menu } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import arrowIcon from "assets/images/icons/arrow.svg";
import React, { useState } from "react";
import * as productConst from "constants/product";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
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
  const [categoryItems, setCategoryItems] = useState([]);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    let parentCategory = e.currentTarget.attributes["value"].nodeValue;
    setCategoryItems(productConst.categories[parentCategory]);
    setAnchorEl(document.getElementById("category_nav"));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const CategoryMenu = (e) => {
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
        disableAutoFocusItem={true}
        getContentAnchorEl={null}
      >
        {categoryItems.map((category) => {
          let name = category.name;
          let value = category.value;
          return (
            <Link
              key={value}
              to={"/products/?category=" + category.value}
              onClick={handleClose}
            >
              <MenuItem>{name}</MenuItem>
            </Link>
          );
        })}
      </Menu>
    );
  };
  return (
    <div id="category_nav" className="header-category-nav">
      <ul>
        <li onClick={handleClick} value="Men">
          Men <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </li>
        <li value="Ladies" onClick={handleClick}>
          Ladies<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </li>
        <li onClick={handleClick} value="Girls">
          Girls<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </li>
        <li onClick={handleClick} value="Boys">
          Boys <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </li>
      </ul>
      <CategoryMenu />
    </div>
  );
};
export default CategoryNavBar;
