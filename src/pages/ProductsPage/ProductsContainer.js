import {
  Grid,
  GridList,
  GridListTile,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import SimplePagination from "components/SimplePagination";
import ProductItem from "./ProductItem";
const useStyles = makeStyles({
  sortBar: {
    marginBottom: "14px",
  },
  gridList: {
    gap: "35px",
  },
  productImage: {
    objectFit: "cover",
    width: "180px",
    height: "269px",
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
          <SimplePagination />
        </Grid>
      </Grid>
      <Grid item container>
        <GridList
          className={classes.gridList}
          cellHeight="auto"
          cols={0}
          spacing={0}
        >
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </GridList>
      </Grid>
      <Grid container justify="flex-end">
        <SimplePagination />
      </Grid>
    </Grid>
  );
}
