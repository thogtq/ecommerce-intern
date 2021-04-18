export default function NormalInput(props) {
  return (
    <div className="normal-input">
      <div className="form-label">{props.label}</div>
      <input
        value={props.value}
        type={props.type}
        onBlur={props.onBlur}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
