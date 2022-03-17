export interface ProductDataType {
  //Product-Form and Product-List
  products: [];

  sizes: [string, string, string, string, string, string, string];
  color: [string, string, string, string, string, string, string, string];
  id: number;
  productInput: string;
  sizeInput: string;
  genderInput: string;
  colorInput: string;
  priceInput: number;
  percentageInput: number;
  total: number;
  quantity: 0;
  toggle: boolean;
  //   Product-Form and Product-List
}
