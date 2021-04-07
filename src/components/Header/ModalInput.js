function ModalInput(props) {
  return (
    <div className="input-control">
      <label>{props.name}</label>
      <input type={props.type} placeholder={props.placeHolder} onChange={props.onChange} required></input>
    </div>
  );
}
export default ModalInput;
