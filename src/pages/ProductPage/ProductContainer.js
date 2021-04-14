import { Grid, makeStyles, GridList } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import VerticalImageList from "./VertialImageList";
import ProductItem from "../../components/ProductItem";
const dummyImg =
  "https://fashionjackson.com/wp-content/uploads/2021/04/Fashion-Jackson-Wearing-Amazon-Fashion-Black-Long-Sleeve-Top-Ripped-Jeans-Chanel-Slingbacks-Chanel-Backpack-1140x1530.jpg";

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
export default function ProductContainer() {
  const classes = useStyles();
  return (
    <Grid
      classes={{ root: classes.root }}
      container
      direction="row"
      spacing={8}
    >
      <Grid classes={{ root: classes.imageContainer }} item xs={6} container>
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
