//import {drawRectangle} from "E:Projects/LearnCanvas/LearnCanvas/common.js"
function drawRectangle(cxt, x, y, width, height, borderWidth, borderColor)
  {
  cxt.beginPath();
  cxt.rect(x, y, width, height);
  cxt.strokeStyle = borderColor;
  cxt.lineWidth = borderWidth;

  cxt.stroke();
}
window.onload = function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 800;
  for (let i = 0; i < 30; i++)
  {
    drawRectangle(context, 100 + i * 10, 100 + i * 10, 500 - i * 20, 500 - i * 20, 5, 'black');
    //drawRectangle(context, 100 + i * 10, 100+ i * 10, 500 - i* 20,500-i*20,'red','black',4); 
  }
  
}