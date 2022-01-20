import { Router } from "express";
const router = Router();

import * as validator from "../validator";

router.get( "/product", async ( req: any, res ) => {
  const possibleError = validator.getProductValidator( req.query );
  if ( possibleError !== null )
    return res.status( 400 ).json( possibleError );

  const result = await req.queueManager.send( "getProduct", { productId: req.query.productId } );

  return res.json( result );
} );

router.get( "/products", async ( req: any, res ) => {
  const result = await req.queueManager.send( "getAllProducts", {} );

  return res.json( result );
} );

export const productRoute = router;
