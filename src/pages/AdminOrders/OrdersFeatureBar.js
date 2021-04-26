import searchIcon from "assets/images/admin/icons/search.svg";
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
import { debounce } from "helpers/helpers";
import { OrderDateFilter } from "./OrderDateFilter";
export default function OrdersFeatureBar({ filter, setFilter }) {
  const handleSearch = (e) => {
    //Debounce
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
            <span className="text-sort-by">ORDERED DATE</span>
            <OrderDateFilter />
            <button className="date-filter-button">Today</button>
            <button className="date-filter-button">Yesterday</button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <TextField
                onChange={debounce(handleSearch, 500)}
                className="search-input"
                id="outlined-margin-normal"
                placeholder="Search order"
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
