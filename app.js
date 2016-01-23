/**
 * Created by stokesa on 1/22/16.
 */

var tideMac = '00:25:90:f4:3f:60';
var dash_button = require('node-dash-button');
var dash = dash_button("8f:3f:20:33:54:44"); //address from step above
dash.on("detected", function (d_id){
    if(d_id === tideMac) {
        console.log('tide found');
    }
    console.log("omg found");
});