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

const dummyImg = "http://localhost:8080/api/product/image/dummy.jpg";

export default function SuggestionProducts() {
  const classes = useStyles();
  return (
    <Grid classes={{ root: classes.root }} container>
      <GridList classes={{ root: classes.gridList }}>
        <ProductItem
          className={classes.productItem}
          image={dummyImg}
          name="Button-Down Denim Mini Dress"
         
        />
        <ProductItem
          className={classes.productItem}
          image={dummyImg}
          name="Button-Down Denim Mini Dress"
         
        />
          <ProductItem
          className={classes.productItem}
          image={dummyImg}
          name="Button-Down Denim Mini Dress"
         
        />
          <ProductItem
          className={classes.productItem}
          image={dummyImg}
          name="Button-Down Denim Mini Dress"
         
        />
      </GridList>
    </Grid>
  );
}
