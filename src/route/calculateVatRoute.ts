import { Router } from "express";
const router = Router();

import * as validator from "../validator";

router.post( "/caculateVat", async ( req: any, res ) => {
  const possibleError = validator.vatCalculatorValidator( req.body );
  if ( possibleError !== null )
    return res.status( 400 ).json( possibleError );

  const result = await req.queueManager.send( "caculateVat", req.body );

  return res.json( result );
} );

export const calculateVatRoute = router;
