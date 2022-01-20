export type VatCalculatorOutputDataType = {
  error: boolean;
  errorMsg: string;
} | {
  vat: number;
  error: boolean;
};
