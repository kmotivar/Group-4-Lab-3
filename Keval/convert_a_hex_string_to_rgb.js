function hexStringToRGB(hexString) 
{
    var rgb = hexString.toUpperCase();
    var red=parseInt(rgb[1]+rgb[2], 16);
    var green=parseInt(rgb[3]+rgb[4], 16);
    var blue=parseInt(rgb[5]+rgb[6], 16);
    
    return {r: red, g: green,b: blue}
}