import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: (props) => props.width,
    height: (props) => props.height,
    backgroundColor: (props) => props.backgroundColor,
    cursor: "pointer",
    border: "none",
    borderRadius: 0,
    fontFamily: "Montserrat-SemiBold",
    fontSize: "14px",
    lineHeight: "24px",
    color: (props) => props.color,
  },
});
export default function SiteButton(props) {
  let submit = {};
  if (props.hasOwnProperty("submit")) {
    submit = { type: "submit", id: "submit" };
  }
  const { root } = useStyles(props);
  return (
    <button {...submit} className={root} onClick={props.onClick}>
      {props.name}
    </button>
  );
}
