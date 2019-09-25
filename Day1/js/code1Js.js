window.onload = function () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  context.moveTo(0, 0);
  context.lineTo(800, 600);
  context.lineWidth = 5;
  context.strokeStyle = "AA394C";
  context.stroke();
};