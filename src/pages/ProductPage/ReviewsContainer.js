import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "60px 100px",
  },
});
export default function ReviewsContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        className="text-regular-grey"
        container
        justify="center"
        alignItems="center"
      >
        No reviews
      </Grid>
    </div>
  );
}
