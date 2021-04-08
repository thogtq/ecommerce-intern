export default function NormalInput(props) {
  return (
    <div className="normal-input">
      <div className="form-label">{props.label}</div>
      <input type={props.type}></input>
    </div>
  );
}
