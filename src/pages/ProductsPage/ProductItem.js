import { Grid, GridListTile, makeStyles } from "@material-ui/core";
import SiteButton from "components/SiteButton";

const useStyles = makeStyles({
  root: {
    width: "180px",
  },
  productImage: {
    objectFit: "cover",
    height: "269px",
  },
  productImageWrapper: {
    position: "relative",
  },
  shopButton: {
    position: "absolute",
    bottom: "0",
  },
  productName: {
    whiteSpace: "initial",
  },
  productPrice: {},
});
export default function ProductItem() {
  const classes = useStyles();
  return (
    <GridListTile classes={{ root: classes.root }}>
      <Grid>
        <div className={classes.productImageWrapper}>
          <img
            className={classes.productImage}
            src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/20/hoang-thuy2-1616208064114462802460.jpeg"
            alt="test"
          />
          <div className={classes.shopButton}>
            <SiteButton
              name="+ Quick shop"
              width="180px"
              height="54px"
              backgroundColor="#ffa15f"
              color="#ffffff"
              weight="Medium"
            />
          </div>
        </div>
        <div className={classes.productName}>Button-Down Denim Mini Dress</div>
        <div className={classes.productPrice}>$69.00</div>
      </Grid>
    </GridListTile>
  );
}
