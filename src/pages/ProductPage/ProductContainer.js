import { Grid, makeStyles } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import VerticalImageList from "./VertialImageList";
import { useState, useEffect } from "react";
import SameBrandProducts from "./SameBrandProducts";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    flexGrow: 1,
  },
  imageContainer: {
    display: "flex",
    gap: "21px",
  },
});
export default function ProductContainer({ product, cart, setCart }) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState([]);
  useEffect(() => {
    setCurrentImage(product.images[0]);
  }, [product]);
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <VerticalImageList
          setCurrentImage={setCurrentImage}
          images={product.images}
        />
        <ProductImage currentImage={currentImage} />
      </div>
      <ProductDetails product={product} cart={cart} setCart={setCart} />
      <SameBrandProducts brand={product.brand} />
    </div>
  );
}
