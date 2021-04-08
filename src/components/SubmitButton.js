import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    // width: props.width,
    // height: props.height,
    // backgroundColor: "#ffa15f",
    // cursor: "pointer",
    // border: "none",
    // borderRadius: 0,
    // fontFamily: "Montserrat-SemiBold",
    // fontSize: "14px",
    // lineHeight: "24px",
    // color: "#ffffff",
  },
}));
export default function SubmitButton(props) {
  const classes = useStyles(props);
  return (
    <button type="submit" id="submit" className={classes.root}>
      {props.name}
    </button>
  );
}
