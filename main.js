var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.textAlign = "start"; // left/right depending on language
ctx.textAlign = "end"; // left/right depending on language
ctx.textAlign = "left";
ctx.textAlign = "center";
ctx.textAlign = "right";
ctx.fillText("my text!", 150, 140);