import AdminMenu from "pages/AdminPage/AdminMenu";
import { Grid } from "@material-ui/core";
import EditProductForm from "./EditProductForm";

export default function EditProductContainer({ product, setProduct }) {
  return (
    <Grid className="admin-container" item md>
      <Grid className="admin-header" container justify="space-between">
        <Grid item>
          <Grid container direction="column">
            <Grid className="admin-header-title" item>
              Edit Product
            </Grid>
            <Grid item>Products / Edit product</Grid>
          </Grid>
        </Grid>
        <AdminMenu />
      </Grid>
      <EditProductForm product={product} setProduct={setProduct} />
    </Grid>
  );
}
