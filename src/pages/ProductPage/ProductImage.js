import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: "379px",
    objectFit: "cover",
    height: "537px",
  },
});
export default function ProductImage({ currentImage }) {
  const classes = useStyles();
  return currentImage ? (
    <img className={classes.image} src={currentImage} alt="product-img"></img>
  ) : (
    ""
  );
}
