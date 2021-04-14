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
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import OrdersFeatureBar from "./OrdersFeatureBar";

const Header = () => {
  return (
    <Grid className="admin-header" container justify="space-between">
      <Grid className="admin-header-title" item>
        Orders
      </Grid>
      <AdminMenu />
    </Grid>
  );
};
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Froze", "4/100", "Today, 8/11/2020", "400.00", "Actions"),
  createData("Ice", "4/100", "Today, 8/11/2020", "400.00", "Actions"),
  createData("Eclair", "4/100", "Today, 8/11/2020", "400.00", "Actions"),
  createData("Cupcake", "4/100", "Today, 8/11/2020", "400.00", "Actions"),
  createData("Gingerbread", "4/100", "Today, 8/11/2020", "400.00", "Actions"),
  createData("Bread", "4/100", "Today, 8/11/2020", "400.00", "Actions"),
];

const OrderContentTable = () => {
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
                Status{" "}
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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  align="left"
                  className="th-product"
                  component="th"
                  scope="row"
                >
                  <Grid container direction="row">
                    <Grid item xs={1}>
                      <img
                        src="https://cdn.cliqueinc.com/posts/229384/fashion-by-the-decade-229384-1499966720451-square.700x0c.jpg"
                        alt="product-img"
                      />
                    </Grid>
                    <Grid item xs>
                      <Grid
                        className="th-product-name"
                        container
                        direction="column"
                      >
                        <Grid item>{row.name}</Grid>
                        <Grid item>Women, Casual dresses</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="left">
                  <span>{row.calories}</span>
                </TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">Completed</TableCell>
                <TableCell className="td-action" align="left">
                  <span>{row.protein}</span>
                  <img src={dropdownIcon} alt="dropdown-icon"></img>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="table-footer">
        <span>Show 1 to 10 of 123 entries</span>
        <Pagination
          className="table-pagination"
          variant="outlined"
          shape="rounded"
          count={10}
          page={1}
        />
      </div>
    </Grid>
  );
};

export default function OrdersContainer() {
  return (
    <Grid className="admin-container" item md>
      <Header />
      <OrdersFeatureBar />
      <OrderContentTable />
    </Grid>
  );
}
