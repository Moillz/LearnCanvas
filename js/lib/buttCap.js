function buttCap() 
{
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  
  canvas.width = 500;
  canvas.height = 500;

  context.beginPath();
  context.lineCap='butt'; //设置线段的端点形状为默认值，为垂直线段的平直边缘
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.strokeStyle = 'red';
  context.lineWidth=4;
  context.stroke();
}