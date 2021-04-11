import addIcon from "assets/images/admin/icons/add.svg";
import closeIcon from "assets/images/icons/cross.svg";
import ProductService from "../../services/ProductService";
import { useState, useRef, useEffect } from "react";

export default function PhotoInput() {
  let inputPhotoDiv = useRef(null);
  const [uploaded, setUploaded] = useState("");
  const handleUpload = async (e) => {
    let data = new FormData();
    let file = e.currentTarget.files[0];
    data.append("productImage", file);
    let res = await ProductService.uploadImage(data);
    if (res.status === "success") {
      setUploaded(res.data.fileName);
    } else {
      console.log(res.error);
    }
  };
  const handleAddPhotoClick = (e) => {
    let inputFile = e.currentTarget.querySelector("input");
    if (inputFile) {
      inputFile.click();
    }
  };
  const handleRemoveImage = (e) => {
    setUploaded("");
  };
  useEffect(() => {
    if (inputPhotoDiv != null) {
      if (uploaded !== "") {
        inputPhotoDiv.current.style.backgroundImage =
          "url(" + ProductService.getTempImageURL(uploaded) + ")";
      } else {
        inputPhotoDiv.current.style.backgroundImage = "unset";
      }
    }
  }, [uploaded]);
  return (
    <div className="add-photo">
      <div
        ref={inputPhotoDiv}
        className="photo-input"
        onClick={handleAddPhotoClick}
      >
        {uploaded !== "" ? (
          <img
            className="close-icon"
            src={closeIcon}
            alt="close"
            onClick={handleRemoveImage}
          ></img>
        ) : (
          <div className="add-icon-group">
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              name="productImage"
              onChange={handleUpload}
            />
            <img src={addIcon} alt="add-icon"></img>
            <div>Add photo</div>
          </div>
        )}
      </div>
    </div>
  );
}
