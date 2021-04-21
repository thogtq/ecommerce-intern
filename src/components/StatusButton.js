import { Button, withStyles } from "@material-ui/core";
export default function StatusButton(props) {
  const pendingColor = "#fbba4e";
  const completedColor = "#82bf11";
  const canceledColor = "#f05d62";
  let color = "";
  switch (props.status) {
    case "Pending":
      color = pendingColor;
      break;
    case "Completed":
      color = completedColor;
      break;
    case "Canceled":
      color = canceledColor;
      break;
    default:
      color = "#cccccc";
  }
  const StyledButton = withStyles({
    root: {
      width: "70px",
      height: "20px",
      backgroundColor: color,
      borderRadius: "12px",
      padding: "5px 6px",
      textTransform: "none",
      "&:hover": {
        backgroundColor: color,
      },
    },
    label: {
      font: "10px/10px Montserrat-Medium",
      color: "#ffffff",
    },
  })(Button);
  return <StyledButton disableRipple={true}>{props.status}</StyledButton>;
}
