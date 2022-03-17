import { ProductDataType } from "./ProductDataType";

export const state: ProductDataType = {
  //Product-Form and Product-List
  products: [],

  sizes: [
    "XS" as string,
    "S" as string,
    "M" as string,
    "L" as string,
    "XL" as string,
    "XXL" as string,
    "XXXL" as string,
  ],
  color: [
    "Red" as string,
    "Orange" as string,
    "Yellow" as string,
    "Green" as string,
    "Blue" as string,
    "Pink" as string,
    "Purple" as string,
    "Brown" as string,
  ],
  id: 0 as number,
  productInput: "" as string,
  sizeInput: "" as string,
  genderInput: "" as string,
  colorInput: "" as string,
  priceInput: 0 as number,
  percentageInput: 0 as number,
  total: 0,
  quantity: 0,
  toggle: true as boolean,
  //Product-Form and Product-List
};
