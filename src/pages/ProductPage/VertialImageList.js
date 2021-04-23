import { Grid, makeStyles, GridListTile, GridList } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "80px",
    height: "116px",
  },
  img: {
    cursor: "pointer",
  },
});
export default function VerticalImageList({ setCurrentImage, images }) {
  const handleClick = (e) => {
    setCurrentImage(e.currentTarget.src);
  };

  const classes = useStyles();
  return (
    <Grid container classes={{ root: classes.root }}>
      <GridList cellHeight={116} cols={1} spacing={25}>
        {images.map((image) => (
          <GridListTile key={image}>
            <img
              className={classes.img}
              src={image}
              alt="product"
              alt="small-thumbnail"
              onClick={handleClick}
            ></img>
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
}
{
  /* <Grid container direction="column" classes={{ root: classes.root }}>
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
    </Grid> */
}
