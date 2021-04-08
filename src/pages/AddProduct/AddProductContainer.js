import AdminMenu from "components/AdminMenu";
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
import AddProductForm from "./AddProductForm";

const Header = () => {
  return (
    <Grid className="admin-header" container justify="space-between">
      <Grid item>
        <Grid container direction="column">
          <Grid className="admin-header-title" item>
            Add Product
          </Grid>
          <Grid item>Products / Add product</Grid>
        </Grid>
      </Grid>
      <AdminMenu />
    </Grid>
  );
};

export default function AddProductContainer() {
  return (
    <Grid className="admin-container" item md>
      <Header />
      <AddProductForm />
    </Grid>
  );
}
