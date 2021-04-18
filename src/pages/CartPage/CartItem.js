import { Grid, TableCell, TableRow, withStyles } from "@material-ui/core";
import ColorPicker from "components/ColorPicker";
import ConfirmBox from "components/ConfirmBox";
import QuantityPicker from "components/QuantityPicker";
import React, { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";

export default function CartItem({ cartItem, onRemove, total, setTotal }) {
  const [amount, setAmount] = useState(0);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleRemove = () => {
    setTotal(total - amount);
    onRemove(cartItem);
  };
  const StyledTableCell = withStyles({
    root: {
      padding: "16px 0",
      minWidth: "100px",
    },
  })(TableCell);

  useEffect(() => {
    if (!loading) {
      let _amount = product.price * cartItem.quantity;
      setAmount(_amount);
      setTotal(total + _amount);
    }
  }, [loading]);
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
              <Grid item className="action-menu">
                <span>Change</span> |{" "}
                <span
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Remove
                </span>
                <ConfirmBox
                  open={open}
                  setOpen={setOpen}
                  onConfirm={handleRemove}
                  content="Do you want to remove this product from cart"
                />
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
        <StyledTableCell align="center">${amount}.00</StyledTableCell>
      </TableRow>
    )
  );
}
