import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  item1: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "red",
    alignItems:"center",
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
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
const AdminProducts = () => {
  require("assets/sass/admin.scss");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.item1}>
        <div className={classes.child}>Item 1.1</div>
        <div className={classes.child}>Item 1.2</div>
      </div>
      <div className={classes.item2}>Item 2</div>
    </div>
  );
};
export default AdminProducts;
