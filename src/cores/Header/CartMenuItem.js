import { Grid, makeStyles, MenuItem } from "@material-ui/core";
import { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    marginLeft: 20,
  },
  name: {
    color: "#4d4d4d",
    fontFamily: "Montserrat-SemiBold",
    fontSize: "12px",
    lineHeight: "16px",
    whiteSpace: "initial",
  },
  price: {
    float: "left",
    color: "#4d4d4d",
    fontFamily: "Montserrat-Regular",
    fontSize: "12px",
    lineHeight: "22px",
  },
  attr: {
    // marginBottom: "5px",
    float: "right",
    color: "#202124",
    fontFamily: "Montserrat-Regular",
    fontSize: "12px",
    lineHeight: "22px",
  },
  listItem: {
    maxHeight: "80px",
  },
});
export default function CartMenuItem({ cartItem }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    const fetchProduct = async () => {
      let res = await ProductService.getProduct(cartItem.productID);
      if (res.status === "success") {
        setProduct(res.data.product);
        setLoading(false);
      } else {
        console.log(res.error.message);
      }
    };
    fetchProduct();
  }, [cartItem]);
  return loading ? (
    ""
  ) : (
    <MenuItem
      component={Link}
      to={"/product/?productID=" + product.productID}
      classes={{ root: classes.listItem }}
    >
      <Grid className={classes.image} container direction="row">
        <img src={product.images[0]} alt="item" width="60" height="60" />
        <Grid
          classes={{ root: classes.root }}
          item
          xs
          container
          direction="column"
          justify="space-between"
        >
          <Grid item className={classes.name}>
            {product.name}
          </Grid>
          <Grid item>
            <span className={classes.price}>${product.price}</span>
            <span className={classes.attr}>
              {" "}
              {cartItem.size} &middot; {cartItem.color} &middot;{" "}
              {cartItem.quantity}pcs{" "}
            </span>
          </Grid>
        </Grid>
      </Grid>
    </MenuItem>
  );
}
