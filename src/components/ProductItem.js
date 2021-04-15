import { Grid, GridListTile, makeStyles } from "@material-ui/core";
import SiteButton from "components/SiteButton";
import { Link } from "react-router-dom";
import ProductService from "services/ProductService";

const useStyles = makeStyles({
  root: {
    width: "100%",
    // flex: "0 0 17%",
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover $shopButton": {
      display: "block",
    },
  },
  productImage: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
  },
  productImageWrapper: {
    position: "relative",
    height: "auto",
    paddingTop: "150%",
  },
  shopButton: {
    display: "none",
    width: "100%",
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
    <GridListTile className={props.className} classes={{ root: classes.root }}>
      <Link to={"/product/?productID=" + id}>
        <div className={classes.productImageWrapper}>
          <img
            className={classes.productImage}
            src={image}
            alt="test"
          />
          <div className={classes.shopButton + " toggle"}>
            <SiteButton
              name="+ Quick shop"
              width="100%"
              height="54px"
              backgroundColor="#ffa15f"
              color="#ffffff"
              weight="Medium"
            />
          </div>
        </div>
        <div className={classes.productName}>{name ? name : ""}</div>
        <div className={classes.productPrice}>
          {price ? "$" + price + ".00" : ""}
        </div>
      </Link>
    </GridListTile>
  );
}
