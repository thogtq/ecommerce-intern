import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import CheckListItem from "components/CheckListItem";
import InputRange from "components/InputRange";
import SizePicker from "components/SizePicker";
import { brands, colors } from "constants/product";
import React from "react";
import ColorPicker from "../../components/ColorPicker";
import { sizes } from "../../constants/product";
import { available } from "../../constants/product";

const useStyles = makeStyles({
  hr: {
    margin: "50px 0",
    width: "50%",
  },
});
const CategoryList = () => {
  return (
    <div>
      <div className="list-title">Category</div>
      <List className="category-sidebar">
        <ListItem disableGutters>
          <ListItemText className="parent">All Men products</ListItemText>
        </ListItem>
        <hr className="line"></hr>
        <ListItem disableGutters>
          <ListItemText>Casual dresses</ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>Going out dresses</ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>Casual dresses</ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>Going out dresses</ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>Casual dresses</ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>Going out dresses</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

const FilterList = ({ filter, setFilter }) => {
  const [open, setOpen] = React.useState({
    Size: false,
    Color: false,
    Brand: false,
    Price: false,
    Available: false,
  });
  const handleClick = (e) => {
    e.currentTarget.classList.toggle("active");
    let name = e.currentTarget.textContent;
    setOpen({ ...open, [name]: !open[name] });
  };
  const handleColorClick = (value) => {
    setFilter({ ...filter, color: filter.color === value ? "" : value });
  };
  const handleSizeClick = (value) => {
    setFilter({ ...filter, size: filter.size === value ? "" : value });
  };
  const handleBrandClick = (value) => {
    setFilter({ ...filter, brand: filter.brand === value ? "" : value });
  };
  const handlePriceFilterChange = (min, max) => {
    setFilter({ ...filter, minPrice: min, maxPrice: max });
  };
  const handleAvailableCick = (value) => {
    setFilter({
      ...filter,
      available: filter.available === value ? "" : value,
    });
  };
  const ExpandLessIcon = withStyles({
    root: { color: "#4d4d4d" },
  })(ExpandLess);
  const ExpandMoreIcon = withStyles({
    root: { color: "#4d4d4d" },
  })(ExpandMore);
  return (
    <React.Fragment>
      <div className="list-title">Filter</div>
      <List className="filter-sidebar">
        <ListItem disableGutters button onClick={handleClick}>
          <ListItemText primary="Size" />
          {open.Size ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.Size} timeout="auto" unmountOnExit>
          <Grid container style={{ padding: "20px 0" }} spacing={1}>
            {sizes.map((size) => (
              <Grid item key={size}>
                <SizePicker
                  size={size}
                  onClick={handleSizeClick}
                  active={size === filter.size}
                />
              </Grid>
            ))}
          </Grid>
        </Collapse>
        <ListItem disableGutters button onClick={handleClick}>
          <ListItemText primary="Color" />
          {open.Color ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.Color} timeout="auto" unmountOnExit>
          <Grid container style={{ padding: "20px 0" }} wrap="wrap">
            {colors.map((color) => (
              <Grid key={color} item xs={3}>
                <ColorPicker
                  active={color == filter.color}
                  color={color}
                  onClick={handleColorClick}
                />
              </Grid>
            ))}
          </Grid>
        </Collapse>
        <ListItem disableGutters button onClick={handleClick}>
          <ListItemText primary="Brand" />
          {open.Brand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.Brand} timeout="auto" unmountOnExit>
          <Grid container style={{ padding: "15px 0" }}>
            <List dense style={{ width: "100%" }}>
              {brands.map((brand) => (
                <CheckListItem
                  key={brand}
                  name={brand}
                  value={brand}
                  onClick={handleBrandClick}
                  checked={brand === filter.brand}
                />
              ))}
            </List>
          </Grid>
        </Collapse>
        <ListItem disableGutters button onClick={handleClick}>
          <ListItemText primary="Price" />
          {open.Price ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.Price} timeout="auto" unmountOnExit>
          <Grid container>
            <InputRange onChange={handlePriceFilterChange} min={0} max={500} />
          </Grid>
        </Collapse>
        <ListItem disableGutters button onClick={handleClick}>
          <ListItemText primary="Available" />
          {open.Available ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.Available} timeout="auto" unmountOnExit>
          <Grid container style={{ padding: "15px 0" }}>
            <List dense style={{ width: "100%" }}>
              {available.map((item) => (
                <CheckListItem
                  checked={item.value === filter.available}
                  name={item.name}
                  value={item.value}
                  onClick={handleAvailableCick}
                />
              ))}
            </List>
          </Grid>
        </Collapse>
      </List>
    </React.Fragment>
  );
};
export default function SidebarNav({ filter, setFilter }) {
  const classes = useStyles();
  return (
    <Grid classes={{ root: "products-sidebar-nav" }}>
      <CategoryList />
      <hr className={classes.hr + " line"}></hr>
      <FilterList filter={filter} setFilter={setFilter} />
    </Grid>
  );
}
