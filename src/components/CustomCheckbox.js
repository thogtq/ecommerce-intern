import { Checkbox, withStyles } from "@material-ui/core";
const CustomCheckbox = (props) => {
  const StyledCheckbox = withStyles({
    root: {
      "&$checked": {
        color: props.color,
      },
    },
    checked: {},
  })(Checkbox);
  return (
    <StyledCheckbox
      edge="end"
      color="default"
      onClick={props.onClick}
      checked={Boolean(props.checked)}
    />
  );
};

export default CustomCheckbox;
