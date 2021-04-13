import {
  Grid,
  GridList,
  GridListTile,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import ProductItem from "./ProductItem";
const useStyles = makeStyles({
  sortBar: {
    margin: "14px 0",
  },
  gridList: {
    gap: "20px",
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
          {" "}
          1/100{" "}
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
    </Grid>
  );
}
