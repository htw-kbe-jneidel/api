import { DistanceCalculatorInputDataType, ErrorType } from "../type";

export function calculateDistanceValidator( data: DistanceCalculatorInputDataType ): ErrorType|null {
  if ( !data || !Array.isArray( data ) ) {
    return {
      error   : true,
      errorMsg: "invalid data array",
    };
  }
  if ( data.length !== 2 ) {
    return {
      error   : true,
      errorMsg: "wrong data array length",
    };
  }

  const coordsPattern = /\d{2}\.\d{5},\d{2}\.\d{5}/;
  if ( !data[0].match( coordsPattern ) || !data[1].match( coordsPattern ) ) {
    return {
      error   : true,
      errorMsg: "coordinates dont match the pattern",
    };
  }

  return null;
}
