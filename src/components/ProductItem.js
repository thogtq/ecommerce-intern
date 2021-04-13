import { Grid, GridListTile, makeStyles } from "@material-ui/core";
import SiteButton from "components/SiteButton";
import { Link } from "react-router-dom";
import ProductService from "services/ProductService";

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
export default function ProductItem(props) {
  const { image, name, price, id } = props;
  const classes = useStyles();
  return (
    <GridListTile classes={{ root: classes.root }}>
      <Link to={"/product/?productID=" + id}>
        <div className={classes.productImageWrapper}>
          <img
            className={classes.productImage}
            src={ProductService.getImageURL(image)}
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
        <div className={classes.productName}>{name}</div>
        <div className={classes.productPrice}>{price?"$" + price + ".00":""}</div>
      </Link>
    </GridListTile>
  );
}
