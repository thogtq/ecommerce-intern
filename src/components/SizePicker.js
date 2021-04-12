import { Button, withStyles } from "@material-ui/core";
//Rename file
const SizePicker = (props) => {
  const handleClick = (e) => {
    //rerender
    e.currentTarget.classList.toggle("active");
    //set State
  };
  const SizePickerButton = withStyles({
    root: {
      minWidth: "40px",
      height: "40px",
      border: "1px solid #808080",
      borderRadius: "0px",
    },
  })(Button);
  return (
    <SizePickerButton onClick={handleClick}>{props.size}</SizePickerButton>
  );
};
export default SizePicker;
