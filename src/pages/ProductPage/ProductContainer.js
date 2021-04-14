import { Grid, makeStyles, GridList } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import VerticalImageList from "./VertialImageList";
import ProductItem from "../../components/ProductItem";
import { useState, useEffect } from "react";
import ProductService from "services/ProductService";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
  sameBrand: {
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
  const [currentImage, setCurrentImage] = useState("");
  useEffect(() => {
    setCurrentImage(ProductService.getImageURL(product.images[0]));
  }, [product]);
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
          <ProductItem
            className={classes.productItem}
            image="ziCPYSdwa3vGWcbF2q2fyY.jpg"
          />
          <ProductItem
            className={classes.productItem}
            image="ziCPYSdwa3vGWcbF2q2fyY.jpg"
            minWidth="80px"
          />
          <ProductItem
            className={classes.productItem}
            image="ziCPYSdwa3vGWcbF2q2fyY.jpg"
            minWidth="80px"
          />
          <ProductItem
            className={classes.productItem}
            image="ziCPYSdwa3vGWcbF2q2fyY.jpg"
            minWidth="80px"
          />
        </GridList>
      </Grid>
    </Grid>
  );
}
