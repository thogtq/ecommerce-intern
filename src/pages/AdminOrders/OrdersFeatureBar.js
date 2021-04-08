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
const useStyles = makeStyles((theme) => ({
  sortSelect: {
    minWidth: 172,
    maxHeight: 48,
    borderRadius: "unset!important",
    border: "1px solid #ededed",
    backgroundColor: "#ffffff",
  },
}));
export default function OrdersFeatureBar() {
  const classes = useStyles();
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
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                className={classes.sortSelect}
                labelId="sort_by_label"
                id="select_sort_by"
                defaultValue="date"
              >
                <MenuItem value="date">Date Added</MenuItem>
                <MenuItem value="sold">Sold</MenuItem>
                <MenuItem value="quatity">Quatity</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <TextField
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
