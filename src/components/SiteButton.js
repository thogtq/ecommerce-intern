import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: (props) => props.width,
    height: (props) => props.height,
    backgroundColor: (props) => props.backgroundColor,
    cursor: "pointer",
    border: "none",
    borderRadius: 0,
    fontFamily: (props) => "Montserrat-" + props.weight,
    fontSize: "14px",
    lineHeight: "24px",
    color: (props) => props.color,
    "&:disabled": {
      backgroundColor: "#d4d3d3",
      cursor: "not-allowed",
    },
  },
});
export default function SiteButton({ disabled, className, ...props }) {
  if (disabled === true) {
    disabled = { disabled: "disabled" };
  }
  const { root } = useStyles(props);
  return (
    <button
      {...disabled}
      className={root + " " + className}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
