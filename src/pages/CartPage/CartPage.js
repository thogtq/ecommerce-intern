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
  Link,
} from "@material-ui/core";
import ColorPicker from "components/ColorPicker";
import ConfirmBox from "components/ConfirmBox";
import QuantityPicker from "components/QuantityPicker";
import SiteButton from "components/SiteButton";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import { loadCart } from "helpers/helpers";
import React, { useState } from "react";
import { useHistory } from "react-router";
import CartItem from "./CartItem";
import { isAuthenticated } from "services/AuthService";
import OrderService from "services/OrderService";

export default function CartPage() {
  const [order, setOrder] = useState({});
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(loadCart());
  const StyledTableCell = withStyles({
    root: {
      padding: "16px 0",
      minWidth: "100px",
    },
  })(TableCell);
  const handleItemRemove = (item) => {
    //Fix me
    //Remove on backend but frontend dont
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };
  const handleCheckout = async () => {
    if (!isAuthenticated()) {
      history.push("?login_modal=1");
      return;
    }
    let res = await OrderService.addOrder(cart);
    if (res.status === "success") {
      setCart([]);
      history.push("/checkout?orderID=" + res.data.orderID);
      return;
    } else {
      console.log(res);
    }
  };
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
                      onRemove={handleItemRemove}
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
              onClick={handleCheckout}
            />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}
