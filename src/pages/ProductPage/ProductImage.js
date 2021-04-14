import { Grid, makeStyles } from "@material-ui/core";
const dummyImg =
  "https://fashionjackson.com/wp-content/uploads/2021/04/Fashion-Jackson-Wearing-Amazon-Fashion-Black-Long-Sleeve-Top-Ripped-Jeans-Chanel-Slingbacks-Chanel-Backpack-1140x1530.jpg";
//Fix me
//sync height image
const useStyles = makeStyles({
  root: {
    "& img": {
      width: "100%",
      objectFit: "cover",
      // minHeight: "483px",
      // maxHeight: "755px",
    },
  },
});

export default function ProductImage() {
  const classes = useStyles();
  return (
    <Grid container classes={{ root: classes.root }}>
      <img src={dummyImg} alt="product-img"></img>
    </Grid>
  );
}
