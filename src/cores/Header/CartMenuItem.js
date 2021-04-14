import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    marginLeft: 20,
  },
  name: {
    color: "#4d4d4d",
    fontFamily: "Montserrat-SemiBold",
    fontSize: "12px",
    lineHeight: "16px",
    whiteSpace: "initial",
  },
  price: {
    float: "left",
    color: "#4d4d4d",
    fontFamily: "Montserrat-Regular",
    fontSize: "12px",
    lineHeight: "22px",
  },
  attr: {
    // marginBottom: "5px",
    float: "right",
    color: "#202124",
    fontFamily: "Montserrat-Regular",
    fontSize: "12px",
    lineHeight: "22px",
  },
});
export default function CartMenuItem() {
  const classes = useStyles();
  return (
    <Grid className={classes.image} container direction="row">
      <img
        src="http://localhost:8080/api/product/image/ziCPYSdwa3vGWcbF2q2fyY.jpg"
        alt="item"
        width="60"
        height="60"
      />
      <Grid
        classes={{ root: classes.root }}
        item
        xs
        container
        direction="column"
        justify="space-between"
      >
        <Grid item className={classes.name}>
          New Balance Men's Street Backpack
        </Grid>
        <Grid item>
          <span className={classes.price}>$485</span>
          <span className={classes.attr}> S &middot; Black &middot; 1pcs </span>
        </Grid>
      </Grid>
    </Grid>
  );
}
