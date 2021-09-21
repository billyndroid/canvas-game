new fullpage('#fullpage', {
    autoScrolling: true,
})
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);