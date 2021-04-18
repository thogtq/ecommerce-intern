import { TextField, MenuItem, Grid } from "@material-ui/core";
import PhotoInput from "pages/EditProduct/PhotoInput";
import React, { useState } from "react";
import NormalInput from "../../components/NormalInput";
import MultiSelect from "../../components/MultiSelect";
import * as productConst from "../../constants/product";
import SingleSelect from "../../components/SingleSelect";
import SiteButton from "../../components/SiteButton";
import { submitButton } from "helpers/helpers";
import { useHistory } from "react-router";
import ProductService from "../../services/ProductService";

export default function EditProductForm({ product, setProduct }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    images: product.images,
    sizes: product.sizes,
    colors: product.colors,
    categories: product.categories,
    name: product.name,
    brand: product.brand,
    quantity: product.quantity,
    price: product.price,
    description: product.description,
  });
  const CategorySelect = () => {
    const categories = productConst.addProductCategory;
    const handleCategory = (e) => {
      setProduct({ ...product, categories: e.target.value });
    };
    return (
      <MultiSelect
        label="CATEGORIES"
        onChange={handleCategory}
        choosed={product.categories}
      >
        {categories.map((category) => {
          if (category.value === "disabled") {
            return (
              <MenuItem key={category.name} disabled>
                {category.name}
              </MenuItem>
            );
          }
          return (
            <MenuItem key={category.value} value={category.value}>
              {category.name}
            </MenuItem>
          );
        })}
      </MultiSelect>
    );
  };
  const ColorsSelect = () => {
    let colors = productConst.colors;
    const handleColors = (e) => {
      setProduct({ ...product, colors: e.target.value });
    };
    return (
      <MultiSelect
        label="COLORS"
        onChange={handleColors}
        choosed={product.colors}
      >
        {colors.map((color) => {
          return (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          );
        })}
      </MultiSelect>
    );
  };
  const SizesSelect = () => {
    let sizes = productConst.sizes;
    const handleSizes = (e) => {
      setProduct({ ...product, sizes: e.target.value });
    };
    return (
      <MultiSelect label="SIZES" onChange={handleSizes} choosed={product.sizes}>
        {sizes.map((size) => {
          return (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          );
        })}
      </MultiSelect>
    );
  };
  const BrandSelect = () => {
    let brands = productConst.brands;
    const handleBrand = (e) => {
      setProduct({ ...product, brand: e.target.value });
    };
    return (
      <SingleSelect
        label="BRAND"
        onChange={handleBrand}
        choosed={product.brand}
      >
        {brands.map((brand) => {
          return (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          );
        })}
      </SingleSelect>
    );
  };
  const SubmitButton = () => {
    const handleSubmit = async () => {
      // submitButton(false);
      // let res = await ProductService.addProduct(formData);
      // if (res.status === "success") {
      //   history.push("/admin/products");
      // } else {
      //   alert(res.error.message);
      //   submitButton(true);
      // }
      console.log(product);
    };
    return (
      <SiteButton
        width="180px"
        height="48px"
        name="Update"
        color="white"
        weight="SemiBold"
        backgroundColor="#ffa15f"
        submit
        onClick={handleSubmit}
      ></SiteButton>
    );
  };
  const CancelButton = () => {
    const handleCancel = () => {
      history.push("/admin/products");
    };
    return (
      <SiteButton
        width="180px"
        height="48px"
        weight="SemiBold"
        name="Cancel"
        color="#ffa15f"
        backgroundColor="#ffffff"
        onClick={handleCancel}
      ></SiteButton>
    );
  };
  return (
    <div className="product-form-container-wrapper">
      <div className="product-form-container">
        <div className="add-photos">
          <div className="form-label">PHOTOS</div>
          {[...Array(4)].map((e, i) => {
            return (
              <PhotoInput
                key={i}
                setFormData={setProduct}
                formData={product}
                imageUrl={product.images[i]}
              />
            );
          })}
          <div className="add-photos-tip">
            You can add up to 4 photos. The 1st photo will be set as cover (main
            photo).
          </div>
        </div>
        <NormalInput
          value={product.name}
          label="NAME"
          type="text"
          onChange={(e) => {
            setProduct({ ...product, name: e.target.value });
          }}
        />
        <CategorySelect />
        <BrandSelect />
        <NormalInput
          value={product.price}
          label="PRICE ($)"
          type="number"
          onChange={(e) => {
            setProduct({ ...product, price: parseInt(e.target.value) });
          }}
        />
        <SizesSelect />
        <ColorsSelect />
        <NormalInput
          label="QUANTITY"
          type="number"
          value={product.quantity}
          onChange={(e) => {
            setProduct({ ...product, quantity: parseInt(e.target.value) });
          }}
        />
        <div className="product-description">
          <div className="form-label">DESCRIPTION</div>
          <TextField
            value={product.description}
            multiline
            rows={4}
            variant="outlined"
            fullWidth={true}
            onChange={(e) => {
              setProduct({ ...product, description: e.target.value });
            }}
          />
        </div>
        <Grid container direction="row" spacing={5} justify="flex-end">
          <Grid item>
            <CancelButton />
          </Grid>
          <Grid item>
            <SubmitButton />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
