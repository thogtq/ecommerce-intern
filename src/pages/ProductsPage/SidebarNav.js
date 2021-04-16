import {
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";
import FilterList from "./FilterList";
import * as productConst from "../../constants/product";
const useStyles = makeStyles({
  hr: {
    margin: "50px 0",
    width: "50%",
  },
});

export default function SidebarNav({ filter, setFilter, currentCategory }) {
  const parentCategory = currentCategory.split("/", 1)[0];
  const categories = productConst.categories[parentCategory];
  const classes = useStyles();
  return (
    <Grid classes={{ root: "products-sidebar-nav" }}>
      <div>
        <div className="list-title">Category</div>
        <List className="category-sidebar">
          <ListItem disableGutters>
            <Link to={"/products/?category=" + parentCategory}>
              <ListItemText
                className={
                  parentCategory === currentCategory
                    ? "parent category-active"
                    : "parent"
                }
              >
                All {parentCategory} products
              </ListItemText>
            </Link>
          </ListItem>
          <hr className="line"></hr>
          {categories.map((category) => (
            <ListItem key={category.value} disableGutters>
              <Link to={"/products/?category=" + category.value}>
                <ListItemText
                  className={
                    category.value === currentCategory ? "category-active" : ""
                  }
                >
                  {category.name}
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
      <hr className={classes.hr + " line"}></hr>
      <FilterList filter={filter} setFilter={setFilter} />
    </Grid>
  );
}
