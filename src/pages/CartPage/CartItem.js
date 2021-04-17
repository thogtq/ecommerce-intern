import {
  Grid,
  Table,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  withStyles,
  Divider,
} from "@material-ui/core";
import ColorPicker from "components/ColorPicker";
import QuantityPicker from "components/QuantityPicker";
import SiteButton from "components/SiteButton";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import { loadCart } from "helpers/helpers";
import React, { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";

export default function CartItem({ cartItem, onRemove, total, setTotal }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const handleRemove = () => {
    // if (onRemove) {
    //   onRemove(index);
    // }
  };
  const StyledTableCell = withStyles({
    root: {
      padding: "16px 0",
      minWidth: "100px",
    },
  })(TableCell);
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
  }, []);
  useEffect(() => {
    if (product.price) {
      setTotal(total + product.price * cartItem.quantity);
    }
  }, [product]);
  return (
    !loading && (
      <TableRow>
        <StyledTableCell
          align="left"
          className="th-product"
          component="th"
          scope="row"
        >
          <Grid container direction="row">
            <Grid item xs={6} lg={3}>
              <img
                className="product-image"
                src={product.images[0]}
                alt="product-img"
              />
            </Grid>
            <Grid item xs container direction="column" justify="space-between">
              <Grid className="product-name" item>
                {product.name}
              </Grid>
              <Grid item>
                Change | <span onClick={handleRemove}>Remove</span>
              </Grid>
            </Grid>
          </Grid>
        </StyledTableCell>
        <StyledTableCell align="center">
          <ColorPicker color={cartItem.color} />
        </StyledTableCell>
        <StyledTableCell align="center">{cartItem.size}</StyledTableCell>
        <StyledTableCell align="center">
          <QuantityPicker value={cartItem.quantity} />
        </StyledTableCell>
        <StyledTableCell align="center">
          ${product.price * cartItem.quantity}.00
        </StyledTableCell>
      </TableRow>
    )
  );
}
