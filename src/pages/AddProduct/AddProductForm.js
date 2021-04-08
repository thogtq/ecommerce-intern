import { TextField } from "@material-ui/core";
import PhotoInput from "components/PhotoInput";
import React, { useState } from "react";
import NormalInput from "../../components/NormalInput";
export default function AddProductForm() {
  const [data, setData] = useState({
    images: [],
    sizes: [],
    colors: [],
    categories: [],
    name: "",
    brand: "",
    quantity: 0,
    price: 0,
    description: "",
  });
  return (
    <div className="product-form-container">
      <div className="add-photos">
        <div className="form-label">PHOTOS</div>
        {[...Array(4)].map((e, i) => {
          return <PhotoInput key={i} setData={setData} data={data} />;
        })}
        <div className="add-photos-tip">
          You can add up to 4 photos. The 1st photo will be set as cover (main
          photo).
        </div>
      </div>
      {/* Flex div width height || long fakeimage */}
      <NormalInput label="NAME" type="text" />
      <NormalInput label="CATEGORIES" type="text" />
      <NormalInput label="BRAND" type="text" />
      {/* <MultiSelect label="CATEGORIES" /> */}
      <NormalInput label="PRICE ($)" type="number" />
      <NormalInput label="SIZE" type="text" />
      <NormalInput label="COLORS" type="text" />
      <NormalInput label="QUANTIFY" type="number" />
      <div className="product-description">
        <div className="form-label">DESCRIPTION</div>
        <TextField multiline rows={4} variant="outlined" fullWidth={true} />
      </div>
      <button
        className="submit-btn"
        // width="180px"
        // height="48px"
        // name="Complete"
      ></button>
    </div>
  );
}
