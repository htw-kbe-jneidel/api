import { Router } from "express";
const router = Router();

import * as validator from "../validator";

router.get( "/storeLocation", async ( req: any, res ) => {
  const possibleError = validator.getStoreLocationValidator( req.query );
  if ( possibleError !== null )
    return res.status( 400 ).json( possibleError );

  const result = await req.queueManager.send( "getStoreLocation", { storeLocationId: req.query.storeLocationId } );

  return res.json( result );
} );

router.get( "/storeLocations", async ( req: any, res ) => {
  const result = await req.queueManager.send( "getAllStoreLocations", {} );

  return res.json( result );
} );

export const storeLocationRoute = router;
