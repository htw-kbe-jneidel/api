import { Router } from "express";
const router = Router();

import * as validator from "../validator";

router.get( "/productQuantityAtLocation", async ( req: any, res ) => {
  const possibleError = validator.getProductQuantityAtLocationValidator( req.query );
  if ( possibleError !== null )
    return res.status( 400 ).json( possibleError );

  const { storeLocationId, productId } = req.query;
  const result = await req.queueManager.send( "getProductQuantityAtLocation", { productId, storeLocationId } );

  return res.json( result );
} );

router.get( "/productQuantitiesAtLocations", async ( req: any, res ) => {
  const result = await req.queueManager.send( "getAllProductQuantitiesAtLocations", {} );

  return res.json( result );
} );

export const productQuantityAtLocationRoute = router;
