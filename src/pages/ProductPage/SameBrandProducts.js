import { Grid, GridList, GridListTile, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  sameBrand: {
    width: "80px",
    height: "114px",
  },
});

export default function SameBrandProducts({ brand }) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let filter = {
        brand: brand,
        limit: 4,
      };
      let res = await ProductService.getProducts(filter);
      if (res.status === "success") {
        setProducts(res.data.products);
      } else {
        console.log(res.error.message);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <Grid classes={{ root: classes.sameBrand }} container>
      <div className="product-same-brand">
        <span>More from</span> <div className="brand-name">{brand}</div>
      </div>
      <GridList cellHeight={114} cols={1} spacing={10}>
        {products.map((product) => (
          <GridListTile
            key={product.productID}
            component={Link}
            to={"/product/?productID=" + product.productID}
          >
            <img src={product.images[0]} alt="product"></img>
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
}
