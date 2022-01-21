import { Router } from "express";
const router = Router();

router.post( "/initiateCsvExport", async ( req: any, res ) => {
  const result = await req.queueManager.send( "initiateCsvExport", {} );

  return res.json( result );
} );

export const initiateCsvExport = router;
