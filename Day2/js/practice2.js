function drawRectangle(cxt, x, y, width, height, borderWidth, borderColor)
  {
  cxt.beginPath();
  cxt.rect(x, y, width, height);
/*    cxt.moveTo(x, y);
    cxt.lineTo(x+width, y);
    cxt.lineTo(x + width, y + height);
    cxt.lineTo(x, y + height);
    cxt.lineTo(x, y);
    cxt.closePath();
*/
    cxt.strokeStyle = borderColor;
    cxt.lineWidth = borderWidth;

    cxt.stroke();
}

window.onload = function () {
  var canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 600;
  var context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(100, 600);
  context.lineTo(700, 600);
  context.lineTo(700, 100);
  context.lineTo(100, 100);//最后一笔可以不画
  context.closePath(); //使用closePath（）闭合图形就能没有缺口了

  //设置画笔状态
  context.lineWidth=6;
  context.strokeStyle = 'black'; 
  context.fillStyle = 'red';
  
  //确定绘制
  context.fill();
  context.stroke();

  drawRectangle(context, 150, 150, 200, 300, 4, 'yellow');
}