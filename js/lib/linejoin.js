function newLineJoin()
{
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  
  canvas.width = 500;
  canvas.height = 500;

  context.beginPath();
  context.lineJoin='miter | bevel | round'; //三个可选项
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.strokeStyle = 'red';
  context.lineWidth=4;
  context.stroke();
}