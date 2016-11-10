var express  = require( 'express' ),
    path     = require( 'path' ),
    body_parser = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 5000,
    app      = express();
require("./server/config/routes.js");

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));


app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});