import { Grid, makeStyles } from "@material-ui/core";
import ProductService from "services/ProductService";
//Fix me
//sync height image
const useStyles = makeStyles({
  root: {
    "& img": {
      width: "100%",
      objectFit: "cover",
      // minHeight: "483px",
      // maxHeight: "755px",
    },
  },
});

export default function ProductImage({ image }) {
  const classes = useStyles();
  return image ? (
    <Grid container classes={{ root: classes.root }}>
      <img src={image} alt="product-img"></img>
    </Grid>
  ) : (
    ""
  );
}
