import { Grid, makeStyles, GridList } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import VerticalImageList from "./VertialImageList";
import ProductItem from "../../components/ProductItem";
import { useState, useEffect } from "react";
import ProductService from "services/ProductService";
const dummyImg = "http://localhost:8080/api/product/image/dummy.jpg";
const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
  sameBrand: {
    maxWidth: "130px",
    padding: "0!important",
    marginTop: "20px",
  },
  productItem: {
    minWidth: "80px",
    width: "90%",
  },
  imageContainer: {
    gap: "20px",
  },
});
export default function ProductContainer({ product }) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  return (
    <Grid
      classes={{ root: classes.root }}
      container
      direction="row"
      spacing={8}
    >
      <Grid classes={{ root: classes.imageContainer }} item xs={6} container>
        <Grid item xs={2}>
          <VerticalImageList
            setCurrentImage={setCurrentImage}
            images={product.images}
            gap="25px"
          />
        </Grid>
        <Grid item xs>
          <ProductImage image={currentImage} />
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <ProductDetails product={product} />
      </Grid>
      <Grid classes={{ root: classes.sameBrand }} item xs>
        <div className="product-same-brand">
          <span>More from</span> <span className="brand-name">Zara</span>
        </div>
        <GridList style={{ gap: "10px" }}>
          <ProductItem className={classes.productItem} image={dummyImg} />
          <ProductItem className={classes.productItem} image={dummyImg} />
          <ProductItem className={classes.productItem} image={dummyImg} />
          <ProductItem className={classes.productItem} image={dummyImg} />
        </GridList>
      </Grid>
    </Grid>
  );
}
