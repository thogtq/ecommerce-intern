import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    marginRight: "12px",
    display: "inline-block",
    width: "10px",
    height: "10px",
    backgroundColor: (props) => props.color,
    borderRadius: "50%",
  },
});
const ColorDot = (props) => {
  const classes = useStyles(props);
  return <span className={classes.root}></span>;
};
export default ColorDot;
