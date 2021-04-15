import { makeStyles, Menu } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import arrowIcon from "assets/images/icons/arrow.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as productConst from "constants/product";
import { useHistory } from "react-router";

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
  const history = useHistory();
  const [categoryItems, setCategoryItems] = useState({});
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [currentMenu, setCurrentMenu] = useState("");
  const handleClick = (e) => {
    let parentCategory = e.currentTarget.attributes["value"].nodeValue;
    setCategoryItems(productConst.categories[parentCategory]);
    setAnchorEl(document.getElementById("category_nav"));
  };
  const handleClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
  };
  const CategoryMenu = (e) => {
    const handleCategoryClick = (e) => {
      handleClose(e);
      let category = e.currentTarget.attributes["value"].nodeValue;
      history.push("/products/?category=" + encodeURIComponent(category));
    };
    return (
      <Menu
        className={classes.root}
        id="category_menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        //Fix me
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        // MenuListProps={{ onMouseLeave: handleClose }}
        disableAutoFocusItem={true}
        getContentAnchorEl={null}
      >
        {Object.keys(categoryItems).map((item) => {
          let name = categoryItems[item].name;
          let value = categoryItems[item].value;
          return (
            <MenuItem key={value} onClick={handleCategoryClick} value={value}>
              {name}
            </MenuItem>
          );
        })}
      </Menu>
    );
  };
  return (
    <div id="category_nav" className="header-category-nav">
      <ul>
        <li
          onClick={handleClick}
          value="Men"
          aria-controls="category_menu"
          aria-haspopup="true"
        >
          Men <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </li>
        <li
          value="Ladies"
          onClick={handleClick}
          aria-controls="category_menu"
          aria-haspopup="true"
        >
          Ladies<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </li>
        <li
          onClick={handleClick}
          value="Girls"
          aria-controls="category_menu"
          aria-haspopup="true"
        >
          Girls<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </li>
        <li
          onClick={handleClick}
          value="Boys"
          aria-controls="category_menu"
          aria-haspopup="true"
        >
          Boys <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </li>
      </ul>
      <CategoryMenu />
    </div>
  );
};
export default CategoryNavBar;
