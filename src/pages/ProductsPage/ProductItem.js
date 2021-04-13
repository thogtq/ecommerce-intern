import { Grid, GridListTile, makeStyles } from "@material-ui/core";
import SiteButton from "components/SiteButton";

const useStyles = makeStyles({
  root: {
    width: "180px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  productImage: {
    objectFit: "cover",
    height: "269px",
  },
  productImageWrapper: {
    position: "relative",
  },
  shopButton: {
    //Fix me
    // display: "none",
    position: "absolute",
    bottom: "0",
  },
  productName: {
    whiteSpace: "initial",
    fontFamily: "Montserrat-Medium",
    fontSize: "14px",
    color: "#202124",
    lineHeight: "22px",
  },
  productPrice: {
    fontFamily: "Montserrat-Regular",
    fontSize: "12px",
    color: "#4d4d4d",
    lineHeight: "22px",
  },
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
          <div className={classes.shopButton + " toggle"}>
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
