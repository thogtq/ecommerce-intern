import {
  Grid,
  GridList,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import SimplePagination from "components/SimplePagination";
import ProductItem from "../../components/ProductItem";
import { useState, useEffect } from "react";
import ProductService from "services/ProductService";

const useStyles = makeStyles({
  sortBar: {
    marginBottom: "14px",
  },
  gridList: {
    gap: "35px",
  },
  productItem: {
    flex: "0 0 17%",
    minWidth: "180px",
  },
});
export default function ProductsContainer({
  filter,
  setFilter,
  currentCategory,
}) {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    const fetchProduct = async () => {
      let res = await ProductService.getProducts(filter);
      if (res.status === "success") {
        setProducts(res.data.products);
        setPages(res.data.pages);
      } else {
        alert(res.error.message);
      }
    };
    fetchProduct();
  }, [filter]);
  const handlePageChange = (value) => {
    setFilter({ ...filter, page: value });
  };
  return products.length === 0 ? (
    <Grid
      className="text-regular-grey"
      item
      xs
      container
      justify="center"
      style={{ marginTop: "50px" }}
    >
      No result found
    </Grid>
  ) : (
    <Grid item xs>
      <Grid className={classes.sortBar} item container justify="space-between">
        <Grid item xs container alignItems="center">
          Sort by:
          <Select defaultValue="Popularity">
            <MenuItem value="Popularity">Popularity</MenuItem>
          </Select>
        </Grid>
        <Grid item xs container alignItems="flex-end" justify="flex-end">
          <SimplePagination
            page={filter.page}
            max={pages}
            onChange={handlePageChange}
          />
        </Grid>
      </Grid>
      <Grid item container>
        <GridList
          className={classes.gridList}
          cellHeight="auto"
          cols={0}
          spacing={0}
        >
          {products.map((product) => {
            return (
              <ProductItem
                currentCategory={currentCategory}
                className={classes.productItem}
                name={product.name}
                image={product.images[0]}
                price={product.price}
                key={product.productID}
                id={product.productID}
              ></ProductItem>
            );
          })}
        </GridList>
      </Grid>
      <Grid container justify="flex-end">
        <SimplePagination
          page={filter.page}
          max={pages}
          onChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
}
