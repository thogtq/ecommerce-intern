import { Grid, makeStyles } from "@material-ui/core";

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
