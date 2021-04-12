import { Grid, makeStyles, MenuItem, Select } from "@material-ui/core";
import ProductItem from "./ProductItem";
const useStyles = makeStyles({
  sortBar: {
    margin: "14px 0",
  },
});
export default function ProductsContainer() {
  const classes = useStyles();
  return (
    <Grid item xs>
      <Grid className={classes.sortBar} item container justify="space-between">
        <Grid item xs container alignItems="center">
          Sort by:
          <Select defaultValue="Popularity">
            <MenuItem value="Popularity">Popularity</MenuItem>
          </Select>
        </Grid>
        <Grid item xs container alignItems="flex-end" justify="flex-end">
          {" "}
          1/100{" "}
        </Grid>
      </Grid>
      <Grid item container>
        <ProductItem />
      </Grid>
    </Grid>
  );
}
