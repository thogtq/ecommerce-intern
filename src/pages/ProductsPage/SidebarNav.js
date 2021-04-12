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
import React from "react";
import ColorPicker from "../../components/ColorPicker";

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
          <ListItemText className="parent">All dresses</ListItemText>
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

const FilterList = () => {
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
            <Grid item>
              <SizePicker size="S" />
            </Grid>
            <Grid item>
              <SizePicker size="M" />
            </Grid>
            <Grid item>
              <SizePicker size="L" />
            </Grid>
          </Grid>
        </Collapse>
        <ListItem disableGutters button onClick={handleClick}>
          <ListItemText primary="Color" />
          {open.Color ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.Color} timeout="auto" unmountOnExit>
          <Grid container style={{ padding: "20px 0" }} spacing={1} wrap="wrap">
            <Grid item xs={3}>
              <ColorPicker color="Red" />
            </Grid>
            <Grid item xs={3}>
              <ColorPicker color="Blue" />
            </Grid>
            <Grid item xs={3}>
              <ColorPicker color="Black" />
            </Grid>
            <Grid item xs={3}>
              <ColorPicker color="Green" />
            </Grid>
            <Grid item xs={3}>
              <ColorPicker color="Yellow" />
            </Grid>
          </Grid>
        </Collapse>
        <ListItem disableGutters button onClick={handleClick}>
          <ListItemText primary="Brand" />
          {open.Brand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.Brand} timeout="auto" unmountOnExit>
          <Grid container style={{ padding: "15px 0" }}>
            <List dense style={{ width: "100%" }}>
              <CheckListItem>Zara</CheckListItem>
              <CheckListItem>H&M</CheckListItem>
              <CheckListItem>Dior</CheckListItem>
            </List>
          </Grid>
        </Collapse>
        <ListItem disableGutters button onClick={handleClick}>
          <ListItemText primary="Price" />
          {open.Price ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.Price} timeout="auto" unmountOnExit>
          <Grid container>
            <InputRange />
          </Grid>
        </Collapse>
        <ListItem disableGutters button onClick={handleClick}>
          <ListItemText primary="Available" />
          {open.Available ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.Available} timeout="auto" unmountOnExit>
          <Grid container style={{ padding: "15px 0" }}>
            <List dense style={{ width: "100%" }}>
              <CheckListItem>In-store</CheckListItem>
              <CheckListItem>Out of stock</CheckListItem>
            </List>
          </Grid>
        </Collapse>
      </List>
    </React.Fragment>
  );
};
export default function SidebarNav() {
  const classes = useStyles();
  return (
    <Grid className="products-sidebar-nav" item>
      <CategoryList />
      <hr className={classes.hr + " line"}></hr>
      <FilterList />
    </Grid>
  );
}
