function ModalInput(props) {
  return (
    <div className="input-control">
      <label>{props.name}</label>
      <input type={props.type} placeholder={props.placeHolder}></input>
    </div>
  );
}
export default ModalInput;
