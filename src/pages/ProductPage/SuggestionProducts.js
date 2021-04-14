import { Grid, GridList, makeStyles } from "@material-ui/core";
import ProductItem from "../../components/ProductItem";
const useStyles = makeStyles({
  root: { padding: "20px 0" },
  gridList: {
    flexWrap: "nowrap",
    gap: "20px",
  },
  productItem: {
    width: "130px",
    height: "100%",
  },
});
export default function SuggestionProducts() {
  const classes = useStyles();
  return (
    <Grid classes={{ root: classes.root }} container>
      <GridList classes={{ root: classes.gridList }}>
        <ProductItem
          className={classes.productItem}
          image="ziCPYSdwa3vGWcbF2q2fyY.jpg"
          name="Button-Down Denim Mini Dress"
         
        />
        <ProductItem
          className={classes.productItem}
          image="ziCPYSdwa3vGWcbF2q2fyY.jpg"
          name="Button-Down Denim Mini Dress"
         
        />
          <ProductItem
          className={classes.productItem}
          image="ziCPYSdwa3vGWcbF2q2fyY.jpg"
          name="Button-Down Denim Mini Dress"
         
        />
          <ProductItem
          className={classes.productItem}
          image="ziCPYSdwa3vGWcbF2q2fyY.jpg"
          name="Button-Down Denim Mini Dress"
         
        />
      </GridList>
    </Grid>
  );
}
