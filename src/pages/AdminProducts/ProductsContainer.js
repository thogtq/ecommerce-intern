import AdminMenu from "components/AdminMenu";
import ProductFeatureBar from "./ProductFeatureBar";
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
import { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";

const Header = () => {
  return (
    <Grid className="admin-header" container justify="space-between">
      <Grid className="admin-header-title" item>
        Products
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

const ProductContentTable = ({ filter, setFilter }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      let res = await ProductService.getProducts(filter);
      if (res.status === "success") {
        setProducts(res.data.products);
      } else {
        alert(res.error.message);
      }
    };
    fetchProduct();
  }, [filter]);
  console.log(products);
  return (
    <Grid className="admin-content-table">
      <TableContainer component={Paper}>
        <Table className="admin-table" aria-label="simple table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell align="left">PRODUCTS</TableCell>
              <TableCell align="left">SOLD</TableCell>
              <TableCell align="left">DATE ADDED </TableCell>
              <TableCell align="left">PROFIT($)</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {products.map((product) => {
              let profit = product.price * product.sold;
              let da = new Date(product.createdAt);
              let dateAdded =
                da.toLocaleTimeString() + ", " + da.toLocaleDateString();
              let productImage = ProductService.getImageURL(product.images[0]);
              return (
                <TableRow key={product.productID}>
                  <TableCell
                    align="left"
                    className="th-product"
                    component="th"
                    scope="row"
                  >
                    <Grid container direction="row">
                      <Grid item xs={1}>
                        <img src={productImage} alt="product-img" />
                      </Grid>
                      <Grid item xs>
                        <Grid
                          className="th-product-name"
                          container
                          direction="column"
                        >
                          <Grid item>{product.name}</Grid>
                          <Grid item>{product.categories.join(", ")}</Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align="left">
                    <span>{product.sold}</span>
                  </TableCell>
                  <TableCell align="left">{dateAdded}</TableCell>
                  <TableCell align="left">{profit}</TableCell>
                  <TableCell className="td-action" align="left">
                    <span>Actions</span>
                    <img src={dropdownIcon} alt="dropdown-icon"></img>
                  </TableCell>
                </TableRow>
              );
            })}
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

export default function ProductsContainer() {
  const [productFilter, setProductFilter] = useState({
    sort: "createdAt",
    search: "",
    page:1
  });
  return (
    <Grid className="admin-container" item md>
      <Header />
      <ProductFeatureBar />
      <ProductContentTable
        filter={productFilter}
        setFilter={setProductFilter}
      />
    </Grid>
  );
}
