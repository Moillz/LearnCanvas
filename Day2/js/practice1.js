window.onload = function () {
  var canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 600;
  var context = canvas.getContext('2d');

ontext.stroke();
    context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(400, 400);
  context.lineTo(0, 600);
  context.lineWidth = 5;
  context.strokeStyle = 'red';
  context.stroke();
  
  context.beginPath();
  context.moveTo(300, 100);
  context.lineTo(500,300);
  context.lineTo(300,500);
  context.lineWidth = 5;
  context.strokeStyle = 'blue';
  context.stroke();

  context.beginPath();
  context.moveTo(500,100);
  context.lineTo(700,300);
  context.lineTo(500,500);
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.stroke();


}