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
import AdminSideBar from "components/AdminPage/AdminSideBar";
import AdminMenu from "components/AdminPage/AdminMenu";
import searchIcon from "assets/images/admin/icons/search.svg";
import AddIcon from "@material-ui/icons/Add";
import { SystemUpdateAlt } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    maxHeight: 48,
  },
  sortByText: {
    color: "#acacac",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    lineHeight: 18,
    marginRight: 20,
  },
  sortSelect: {
    minWidth: 172,
    maxHeight: 48,
    borderRadius: "unset!important",
    border: "1px solid #ededed",
    backgroundColor: "#ffffff",
  },
  searchInput: {
    "& div": {
      borderRadius: "unset",
      backgroundColor: "#ffffff",
      maxHeight: 48,
      maxWidth: 280,
    },
    border: "1px solid #ededed",
  },
  addProductBtn: {
    borderRadius: "unset",
    height: 48,
    width: 156,
    backgroundColor: "#ffa15f",
    color: "#ffffff",
  },
}));
const AdminPage = () => {
  require("assets/sass/admin.scss");
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <AdminSideBar />
      <Grid className="admin-container" container md direction="column">
        <Grid className="admin-header" container justify="space-between">
          <Grid className="admin-header-title">Products</Grid>
          <AdminMenu />
        </Grid>
        <Grid className="admin-feature-bar" container justify="space-between">
          <Grid container xs item={true} alignItems="center">
            <div className={classes.sortByText}>SORT BY</div>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                className={classes.sortSelect}
                labelId="sort_by_label"
                id="select_sort_by"
                displayEmpty
              >
                <MenuItem value="date">Date Added</MenuItem>
                <MenuItem value="sold">Sold</MenuItem>
                <MenuItem value="quatity">Quatity</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container item xs alignItems="center">
            <TextField
              className={classes.searchInput}
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
            <Button
              className={classes.addProductBtn}
              startIcon={<AddIcon style={{ color: "#ffffff" }} />}
            >
              Add product
            </Button>
            <Button
           
              startIcon={<SystemUpdateAlt style={{ color: "#ffa15f" }} />}
            >
              Export
            </Button>
          </Grid>
        </Grid>
        <Grid className="admin-content-table">Content table</Grid>
      </Grid>
    </Grid>
  );
};
export default AdminPage;
