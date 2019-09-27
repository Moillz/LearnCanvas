function drawRectangle(cxt, x, y, width, height, borderWidth, borderColor)
{
  cxt.beginPath();
  cxt.rect(x, y, width, height);
  cxt.strokeStyle = borderColor;
  cxt.lineWidth = borderWidth;

  cxt.stroke();
}
window.onload = function () {
  var context = document.getElementById("canvas");
  var cxt = context.getContext('2d');
  context.width = 800;
  context.height = 800;
  for (let i = 10; i < 100; i += 10)
  {
    drawRectangle(cxt, i, i, i + 1, i + 1, 4, 'black'); 
  }
}