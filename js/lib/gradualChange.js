window.onload = function () {
  
  var canvas = document.getElementById("canvas");
        canvas.width = 800;
        canvas.height = 600;
        var context = canvas.getContext("2d");

        context.rect(200,100,400,400);

        //添加渐变线
        var grd = context.createLinearGradient(200,300,600,300);

        //添加颜色断点
        grd.addColorStop(0,"black");
        grd.addColorStop(0.5,"white");
        grd.addColorStop(1,"black");

        //应用渐变
        context.fillStyle = grd;

        context.fill();
}