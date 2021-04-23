import { Grid, GridList, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: { padding: "20px 0", height: "324px" },
  gridList: {
    cursor: "pointer",
    flexWrap: "nowrap",
    gap: "20px",
  },
  product: {
    width: "130px",
  },
  productImage: {
    width: "130px",
    height: "200px",
    objectFit: "cover",
  },
  productName: {
    marginTop: "3px",
    font: "12px/16px Montserrat-Medium",
    color: "#4d4d4d",
    whiteSpace: "initial",
  },
});

export default function SuggestionProducts({ category }) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let filter = {
        category: category,
        limit: 8,
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
    <Grid classes={{ root: classes.root }} container>
      <GridList classes={{ root: classes.gridList }}>
        {products.map((product) => (
          <Link
            to={"/product/?productID=" + product.productID}
            key={product.productID}
          >
            <Grid classes={{ root: classes.product }} container>
              <Grid item>
                <img
                  className={classes.productImage}
                  src={product.images[0]}
                  alt="product"
                ></img>
              </Grid>
              <Grid item>
                <div className={classes.productName}>{product.name}</div>
              </Grid>
            </Grid>
          </Link>
        ))}
      </GridList>
    </Grid>
  );
}
