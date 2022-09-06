var c = document.getElementById("canvas");
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;
var ctx = c.getContext("2d");
var ciz = false;

ctx.clearRect(0, 0, c.width, c.height);
ctx.fillRect(0, 0, c.width, c.height);
ctx.strokeStyle = "orange";
ctx.lineWidth = 10;

c.addEventListener("mousedown",(e)=>{
    ctx.moveTo(e.pageX,e.pageY);
    ciz = true;
});

c.addEventListener("mouseup",(e)=>{
    ciz = false;
})

c.addEventListener("mousemove", (e) => {
    if(ciz){
        ctx.lineTo(e.pageX, e.pageY);
        ctx.stroke();
    }
});