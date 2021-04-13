import { Grid } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import VerticalImageList from "./VertialImageList";

const dummyImg =
  "https://fashionjackson.com/wp-content/uploads/2021/04/Fashion-Jackson-Wearing-Amazon-Fashion-Black-Long-Sleeve-Top-Ripped-Jeans-Chanel-Slingbacks-Chanel-Backpack-1140x1530.jpg";

export default function ProductContainer() {
  return (
    <Grid container direction="row" spacing={8}>
      <Grid item xs={6} container style={{ gap: 20 }}>
        <Grid item xs={2}>
          <VerticalImageList gap="25px">
            <img src={dummyImg} alt="small-thumbnail"></img>
            <img src={dummyImg} alt="small-thumbnail"></img>
            <img src={dummyImg} alt="small-thumbnail"></img>
            <img src={dummyImg} alt="small-thumbnail"></img>
          </VerticalImageList>
        </Grid>
        <Grid item xs>
          <ProductImage />
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <ProductDetails />
      </Grid>
      <Grid xs={1}>
        <div className="product-same-brand">
          <span>More from</span> <span className="brand-name">Zara</span>
        </div>
        <VerticalImageList gap="10px">
          <img src={dummyImg} alt="small-thumbnail"></img>
          <img src={dummyImg} alt="small-thumbnail"></img>
          <img src={dummyImg} alt="small-thumbnail"></img>
          <img src={dummyImg} alt="small-thumbnail"></img>
        </VerticalImageList>
      </Grid>
    </Grid>
  );
}
