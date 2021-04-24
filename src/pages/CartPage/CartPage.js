import {
  Grid,
  Table,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TableBody,
  withStyles,
  Divider,
} from "@material-ui/core";
import SiteButton from "components/SiteButton";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import CartItem from "./CartItem";
import { addOrder } from "services/OrderService";
import { AuthContext, CartContext } from "contexts/store";
import { saveCart } from "services/CartService";

export default function CartPage() {
  const [cart, cartDispatch] = useContext(CartContext);
  const [authState] = useContext(AuthContext);
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const StyledTableCell = withStyles({
    root: {
      padding: "16px 0",
      minWidth: "100px",
    },
  })(TableCell);
  const handleItemRemove = (item) => {
    cartDispatch({ type: "REMOVE_CART_ITEM", payload: { id: item.id } });
  };
  const handleItemChange = (id, quantity) => {
    const update = {
      quantity: quantity,
    };
    cartDispatch({
      type: "UPDATE_CART_ITEM",
      payload: { id: id, update: update },
    });
  };
  const handleCheckout = async () => {
    if (!authState.token) {
      history.push("?login_modal=1");
      return;
    }
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }
    let res = await addOrder(cart);
    if (res.status === "success") {
      cartDispatch({ type: "EMPTY_CART" });
      history.push("/checkout?orderID=" + res.data.orderID);
      return;
    } else {
      console.log(res);
    }
  };
  return (
    <React.Fragment>
      <Header />
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
                      key={cartItem.id}
                      cartItem={cartItem}
                      total={total}
                      setTotal={setTotal}
                      onRemove={handleItemRemove}
                      onChange={handleItemChange}
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
