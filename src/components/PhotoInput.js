import addIcon from "assets/images/admin/icons/add.svg";
import closeIcon from "assets/images/icons/cross.svg";

export default function PhotoInput() {
  console.log("trigger"); //absolute not work
  const handleAddPhoto = (e) => {
    let inputFile = e.target.querySelector("input");
    if (inputFile) {
      inputFile.click();
    }
  };
  return (
    <div className="add-photo" onClick={handleAddPhoto}>
      <div className="photo-input" onClick={handleAddPhoto}>
        <input type="file" style={{ display: "none" }} />
        <img className="close-icon" src={closeIcon} alt="close"></img>
        <div className="add-icon-group">
          <img src={addIcon} alt="add-icon"></img>
          <div>Add photo</div>
        </div>
      </div>
    </div>
  );
}
