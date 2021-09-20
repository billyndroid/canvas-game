new fullpage('#fullpage', {
    autoScrolling: true,
})
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 1);
ctx.lineTo(140, 100);
ctx.stroke();
ctx.lineTo(100, 50);
ctx.stroke();
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke(); 
ctx.beginPath();
ctx.arc(80, 75, 10, 0, 2 * Math.PI);
ctx.fill(); 
ctx.beginPath();
ctx.arc(279, 50, 10, 0, 0.8 * Math.PI);
ctx.stroke(); 