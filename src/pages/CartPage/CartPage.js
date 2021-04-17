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
import React, { useState } from "react";
import CartItem from "./CartItem";

export default function CartPage() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(loadCart());
  const StyledTableCell = withStyles({
    root: {
      padding: "16px 0",
      minWidth: "100px",
    },
  })(TableCell);

  return (
    <React.Fragment>
      <Header cart={cart} setCart={setCart} />
      <div className="container cart-page">
        <Grid className="header-title">My bag</Grid>
        <Grid container spacing={8}>
          <Grid item xs={8}>
            <TableContainer>
              <Table className="admin-table" aria-label="simple table">
                <TableHead className="table-header">
                  <TableRow>
                    <StyledTableCell align="left">Product</StyledTableCell>
                    <StyledTableCell align="center">Color</StyledTableCell>
                    <StyledTableCell align="center">Size </StyledTableCell>
                    <StyledTableCell align="center">Quantity</StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {cart.map((cartItem, index) => (
                    <CartItem
                      key={index}
                      cartItem={cartItem}
                      total={total}
                      setTotal={setTotal}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={4}>
            <Grid className="text-bold-dark total-title" container>
              Total
            </Grid>
            <Grid className="total-box" container>
              <div className="item">
                <span>Shipping & Handling:</span>
                <span className="f-right">Free</span>
              </div>
              <div className="item">
                <span>Total product:</span>
                <span className="f-right">${total}</span>
              </div>
              <Divider className="total-divider" />
              <div className="item subtotal">
                <span>Subtotal</span>
                <span className="f-right">${total}</span>
              </div>
            </Grid>
            <SiteButton
              name="Check out"
              width="100%"
              height="50px"
              color="#ffffff"
              backgroundColor="#ff5f6d"
              weight="Bold"
            />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}
