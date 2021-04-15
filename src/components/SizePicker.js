import { Button, withStyles } from "@material-ui/core";

const SizePicker = (props) => {
  const active = Boolean(props.active);
  const handleClick = (e) => {
    props.onClick(props.size);
  };
  const SizePickerButton = withStyles({
    root: {
      minWidth: "40px",
      height: "40px",
      border: "1px solid #808080",
      borderRadius: "0px",
      "&:hover": {
        backgroundColor: "#ffa15f",
      },
      "& span": {
        color: "#202124",
        fontFamily: "Montserrat-Regular",
        fontSize: "14px",
        lineHeight: "22px",
      },
    },
  })(Button);
  return (
    <SizePickerButton
      className={active ? "size-active" : ""}
      onClick={handleClick}
    >
      {props.size}
    </SizePickerButton>
  );
};
export default SizePicker;
