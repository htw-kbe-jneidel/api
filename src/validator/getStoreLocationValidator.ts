import { GetStoreLocationInputDataType } from "../type";

export function getStoreLocationValidator( data: GetStoreLocationInputDataType ) {
  if ( !data ) {
    return {
      error   : true,
      errorMsg: "missing object",
    };
  }
  if ( !data.storeLocationId ) {
    return {
      error   : true,
      errorMsg: "missing storeLocationId",
    };
  }

  return null;
}
