import { GetProductInputDataType } from "../type";

export function getProductValidator( data: GetProductInputDataType ) {
  if ( !data ) {
    return {
      error   : true,
      errorMsg: "missing object",
    };
  }
  if ( !data.productId ) {
    return {
      error   : true,
      errorMsg: "missing productId",
    };
  }

  return null;
}
