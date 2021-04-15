import { Grid, makeStyles } from "@material-ui/core";
import ProductService from "services/ProductService";

const dummyImg =
  "https://fashionjackson.com/wp-content/uploads/2021/04/Fashion-Jackson-Wearing-Amazon-Fashion-Black-Long-Sleeve-Top-Ripped-Jeans-Chanel-Slingbacks-Chanel-Backpack-1140x1530.jpg";

const useStyles = makeStyles({
  root: {
    gap: (props) => props.gap,
    "& img": {
      cursor: "pointer",
      width: "100%",
    },
  },
});
export default function VerticalImageList({
  setCurrentImage,
  images,
  ...props
}) {
  const handleClick = (e) => {
    setCurrentImage(e.currentTarget.src);
  };
  const classes = useStyles(props);
  return (
    <Grid container direction="column" classes={{ root: classes.root }}>
      {images.map((image, index) => {
        return (
          <img
            key={index}
            onClick={handleClick}
            src={image}
            alt="small-thumbnail"
          ></img>
        );
      })}
    </Grid>
  );
}
