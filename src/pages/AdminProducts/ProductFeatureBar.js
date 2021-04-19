import searchIcon from "assets/images/admin/icons/search.svg";
import AddIcon from "@material-ui/icons/Add";
import { SystemUpdateAlt } from "@material-ui/icons";
import {
  Grid,
  makeStyles,
  MenuItem,
  Select,
  FormControl,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { debounce } from "helpers/helpers";
const useStyles = makeStyles((theme) => ({
  sortSelect: {
    minWidth: 172,
    maxHeight: 48,
    borderRadius: "unset!important",
    border: "1px solid #ededed",
    backgroundColor: "#ffffff",
    font: "14px/20px Montserrat-Medium",
    color: "#3d3d3f",
    "& :focus": {
      backgroundColor: "#ffffff",
    },
  },
  menuItem: {
    font: "14px/20px Montserrat-Medium",
    color: "#3d3d3f",
  },
}));
export default function ProductFeatureBar({ filter, setFilter }) {
  const classes = useStyles();
  const handleFilterChange = (e) => {
    let _sortBy = e.target.value.split(" ")[0];
    let _sortOrder = e.target.value.split(" ")[1];
    setFilter({ ...filter, sortBy: _sortBy, sortOrder: _sortOrder });
  };
  const handleSearch = (e) => {
    setFilter({ ...filter, search: e.target.value });
  };
  return (
    <Grid item md={12}>
      <Grid
        className="admin-feature-bar"
        container
        justify="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <span className="text-sort-by">SORT BY</span>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                className={classes.sortSelect}
                labelId="sort_by_label"
                id="select_sort_by"
                defaultValue="createdAt -1"
                onChange={handleFilterChange}
                MenuProps={{
                  style: { marginTop: "48px" },
                  anchorOrigin: { vertical: "bottom", horizontal: "center" },
                  transformOrigin: { vertical: "top", horizontal: "center" },
                }}
              >
                <MenuItem
                  classes={{ root: classes.menuItem }}
                  value="createdAt -1"
                >
                  Date Added
                </MenuItem>
                <MenuItem classes={{ root: classes.menuItem }} value="name 1">
                  A - Z
                </MenuItem>
                <MenuItem classes={{ root: classes.menuItem }} value="name -1">
                  Z - A
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <TextField
                onChange={debounce(handleSearch, 600)}
                className="search-input"
                id="outlined-margin-normal"
                placeholder="Search product"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={searchIcon} alt="search-icon"></img>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <Link to="products/add-product">
                <Button
                  classes={{ root: "add-button" }}
                  startIcon={<AddIcon style={{ color: "#ffffff" }} />}
                >
                  Add product
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button
                classes={{ root: "export-button" }}
                startIcon={<SystemUpdateAlt style={{ color: "#ffa15f" }} />}
              >
                Export
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
