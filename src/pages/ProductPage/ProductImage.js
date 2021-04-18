import { Grid, makeStyles } from "@material-ui/core";
import ProductService from "services/ProductService";
import { useEffect } from "react";
import { useLocation } from "react-router";
//Fix me
//sync height image
const useStyles = makeStyles({
  root: {
    "& img": {
      width: "100%",
      objectFit: "cover",
      maxHeight: "755px",
    },
  },
});

export default function ProductImage({ currentImage }) {
  const classes = useStyles();
  return currentImage ? (
    <Grid container classes={{ root: classes.root }}>
      <img src={currentImage} alt="product-img"></img>
    </Grid>
  ) : (
    ""
  );
}
