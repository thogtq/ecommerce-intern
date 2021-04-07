import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  item1: {
    backgroundColor: "red",
    height: 100,
  },
  item2: {
    backgroundColor: "blue",
    height: 100,
  },
  child: {
    backgroundColor: "green",
    height: 50,
  },
}));
const AdminProducts = () => {
  require("assets/sass/admin.scss");
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item xs={3}>
        <Grid className={classes.item1}  container justify="space-evenly" alignItems="center" alignContent="center">
          <Grid className={classes.child} >Item 1.1</Grid>
          <Grid  className={classes.child} >Item 1.2</Grid>
        </Grid>
      </Grid>
      <Grid className={classes.item2} item xs={9}>
        Item 2
      </Grid>
    </Grid>
  );
};
export default AdminProducts;
