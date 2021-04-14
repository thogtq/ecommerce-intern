import AdminMenu from "pages/AdminPage/AdminMenu";
import { Grid } from "@material-ui/core";
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
