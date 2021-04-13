import { Checkbox, withStyles } from "@material-ui/core";
const CustomCheckbox = (props) => {
  const StyledCheckbox = withStyles({
    root: {
      "&$checked": {
        color: props.color,
      },
    },
    checked: {},
  })((props) => (
    <Checkbox onChange={props.onChange}  edge="end" color="default" {...props} />
  ));
  return <StyledCheckbox />;
};

export default CustomCheckbox;
