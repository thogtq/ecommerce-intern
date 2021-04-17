import AdminMenu from "pages/AdminPage/AdminMenu";
import ProductFeatureBar from "./ProductFeatureBar";
import dropdownIcon from "assets/images/admin/icons/dropdown.svg";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useState, useEffect, useRef } from "react";
import ProductService from "../../services/ProductService";
import DropdownMenu from "components/DropdownMenu";
import { Link } from "react-router-dom";

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
  const handlePagination = (e) => {
    setFilter({ ...filter, page: parseInt(e.target.textContent) });
  };
  // console.log(products);
  const ActionMenu = (props) => {
    const anchorRef = useRef(null);
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    return (
      <React.Fragment>
        <span
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Actions
        </span>
        <DropdownMenu
          open={open}
          setOpen={setOpen}
          anchorRef={anchorRef}
          handleClose={handleClose}
        >
          <Link to={"/admin/products/edit-product/?productID=" + props.ID}>
            <MenuItem className="table-cell-text" onClick={handleClose}>
              <ListItemIcon>
                <CreateIcon color="disabled" />
              </ListItemIcon>
              Edit
            </MenuItem>
          </Link>
          <MenuItem className="table-cell-text" onClick={handleClose}>
            <ListItemIcon>
              <DeleteIcon color="disabled" />
            </ListItemIcon>
            Remove
          </MenuItem>
        </DropdownMenu>
        <img src={dropdownIcon} alt="dropdown-icon"></img>
      </React.Fragment>
    );
  };
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
              let productImage = product.images[0];
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
                  <TableCell className="table-cell-text" align="left">
                    {product.sold + "/" + product.quantity}
                  </TableCell>
                  <TableCell className="table-cell-text" align="left">
                    {dateAdded}
                  </TableCell>
                  <TableCell className="table-cell-text" align="left">
                    {profit}
                  </TableCell>
                  <TableCell className="td-action" align="right">
                    <ActionMenu ID={product.productID} />
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
          page={filter.page}
          onChange={handlePagination}
        />
      </div>
    </Grid>
  );
};

export default function ProductsContainer() {
  const [productFilter, setProductFilter] = useState({
    sortBy: "createdAt",
    sortOrder: -1,
    search: "",
    page: 1,
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
