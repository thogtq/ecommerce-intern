export const parentCategory = {
  Men: "Men",
  Ladies: "Ladies",
  Girls: "Girls",
  Boys: "Boys",
};
export const menCategory = [
  { name: "Shirts", value: "Men/Shirts" },
  { name: "Shorts & Pants", value: "Men/Shorts & Pants" },
  { name: "Belts", value: "Men/Belts" },
  { name: "Hats", value: "Men/Hats" },
  { name: "Coats & Jackets", value: "Men/Coats & Jackets" },
];
export const ladiesCategory = [
  { name: "Top", value: "Ladies/Top" },
  { name: "Bottom", value: "Ladies/Bottom" },
  { name: "Dresses", value: "Ladies/Dresses" },
  { name: "Shoes", value: "Ladies/Shoes" },
  { name: "Accessories", value: "Ladies/Accessories" },
];
export const girlsCategory = [
  { name: "Top", value: "Girls/Top" },
  { name: "Bottom", value: "Girls/Bottom" },
  { name: "Dresses", value: "Girls/Dresses" },
  { name: "Shoes", value: "Girls/Shoes" },
  { name: "Accessories", value: "Girls/Accessories" },
];
export const boysCategory = [
  { name: "Top", value: "Boys/Top" },
  { name: "Pants", value: "Boys/Pants" },
  { name: "Shoes", value: "Boys/Shoes" },
  { name: "Shorts", value: "Boys/Shorts" },
  { name: "Sweaters", value: "Boys/Sweaters" },
];
export const addProductCategory = [
  {
    name: "Men",
    value: "disabled",
  },
  ...menCategory,
  {
    name: "Ladies",
    value: "disabled",
  },
  ...ladiesCategory,
  {
    name: "Girls",
    value: "disabled",
  },
  ...girlsCategory,
  {
    name: "Boys",
    value: "disabled",
  },
  ...boysCategory,
];
export const categories = {
  Men: [...menCategory],
  Ladies: [...ladiesCategory],
  Girls: [...girlsCategory],
  Boys: [...boysCategory],
};
export const colors = [
  "Black",
  "Blue",
  "White",
  "Green",
  "Red",
  "Yellow",
  "Orange",
  "Violet",
  "Purple",
  "Brown",
];
export const sizes = ["S", "M", "L", "XL", "XXL"];
export const brands = [
  "Zara",
  "Nike",
  "Gucci",
  "Hermes",
  "Fendi",
  "Prada",
  "Louis Vuittion",
  "Chanel",
];
export const available = [
  {
    name: "In-store",
    value: "in",
  },
  {
    name: "Out of stock",
    value: "out",
  },
];
