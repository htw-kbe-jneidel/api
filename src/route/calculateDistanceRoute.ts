import { Router } from "express";
const router = Router();

import * as validator from "../validator";

router.post( "/calculateDistance", async ( req: any, res ) => {
  const possibleError = validator.calculateDistanceValidator( req.body );
  if ( possibleError !== null )
    return res.status( 400 ).json( possibleError );

  const result = await req.queueManager.send( "calculateDistance", req.body );

  return res.json( result );
} );

export const calculateDistanceRoute = router;
