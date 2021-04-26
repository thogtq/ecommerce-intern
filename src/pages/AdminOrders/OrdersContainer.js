import AdminMenu from "pages/AdminPage/AdminMenu";
import dropdownIcon from "assets/images/admin/icons/dropdown.svg";
import {
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  makeStyles,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import OrdersFeatureBar from "./OrdersFeatureBar";
import { useEffect, useState } from "react";
import { getOrders } from "services/OrderService";
import StatusButton from "../../components/StatusButton";
import ActionMenu from "./ActionMenu";
import { getFormatedDateString } from "../../helpers/date";
import { moment } from "moment";

const useStyles = makeStyles({
  tableCell: {
    font: "14px/20px Montserrat-Medium",
    color: "#3d3d3f",
  },
});
const OrderContentTable = ({ filter, setFilter }) => {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [counts, setCounts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchOrders = async () => {
      let res = await getOrders(filter);
      if (res.status === "success") {
        setOrders(res.data.orders);
        setTotalPages(res.data.pages);
        setCounts(res.data.counts);
      } else {
        alert(res.error.message);
      }
    };
    fetchOrders();
  }, [filter]);
  const handlePagination = (e) => {
    setFilter({ ...filter, page: parseInt(e.target.textContent) });
  };
  return (
    <Grid className="admin-content-table">
      <TableContainer component={Paper}>
        <Table className="admin-table" aria-label="simple table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell align="left">ORDER ID</TableCell>
              <TableCell align="left">ORDERED DATE</TableCell>
              <TableCell align="left">DETAIL</TableCell>
              <TableCell align="left">TOTAL($)</TableCell>
              <TableCell align="left">
                STATUS{" "}
                <img
                  src={dropdownIcon}
                  alt="dropdown-icon"
                  style={{ verticalAlign: "middle" }}
                ></img>
              </TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {orders.map((order) => {
              let orderDate = new Date(order.orderDate);
              return (
                <TableRow key={order.orderID}>
                  <TableCell
                    align="left"
                    className="th-product"
                    component="th"
                    scope="row"
                  >
                    {order.orderID}
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCell }} align="left">
                    <span>{getFormatedDateString(orderDate)}</span>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCell }} align="left">
                    {order.products[0].name +
                      " (" +
                      order.products[0].size +
                      ")x " +
                      order.products[0].quantity}
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCell }} align="left">
                    {order.subtotal}
                  </TableCell>
                  <TableCell width="120px" align="left">
                    <StatusButton status={order.status} />
                  </TableCell>
                  <TableCell className="td-action" align="right">
                    <ActionMenu
                      orderID={order.orderID}
                      status={order.status}
                      setFilter={setFilter}
                      filter={filter}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="table-footer">
        <span>Show 1 to 10 of {counts} entries</span>
        <Pagination
          className="table-pagination"
          variant="outlined"
          shape="rounded"
          count={totalPages}
          page={filter.page}
          onChange={handlePagination}
        />
      </div>
    </Grid>
  );
};

export default function OrdersContainer() {
  const [orderFilter, setOrderFilter] = useState({
    search: "",
    page: 1,
    limit: 10,
  });
  return (
    <Grid className="admin-container" item md>
      <Grid className="admin-header" container justify="space-between">
        <Grid className="admin-header-title" item>
          Orders
        </Grid>
        <AdminMenu />
      </Grid>
      <OrdersFeatureBar filter={orderFilter} setFilter={setOrderFilter} />
      <OrderContentTable filter={orderFilter} setFilter={setOrderFilter} />
    </Grid>
  );
}
