import { configureExpress } from "./service";
import { QueueManager } from "./entity/QueueManager";

const RABBIT_MQ_IP =  "127.0.0.1";
const HTTP_PORT = 8001;

const app = configureExpress();

app.use( async ( req: any, res, next: any ) => {
  req.queueManager = await QueueManager.create( RABBIT_MQ_IP );
  next();
} );

import * as routes from "./route";
app.use( "/", routes.productRoute );
app.use( "/", routes.storeLocationRoute );
app.use( "/", routes.productQuantityAtLocationRoute );
app.use( "/", routes.calculateDistanceRoute );
app.use( "/", routes.calculateVatRoute );
app.use( "/", routes.initiateCsvExport );

app.use( "/", ( req, res: any ) => {
  return res.status( 404 ).json( { error: true, errorMsg: "Not found" } );
} );
app.use( "/:anything", ( req, res: any ) => {
  return res.status( 404 ).json( { error: true, errorMsg: "Not found" } );
} );

app.listen( HTTP_PORT, () => console.log( `API running on: http://localhost:${  HTTP_PORT}` ) );
