<template>
  <canvas id="myCanvas"></canvas>
</template>

<script setup>
const { onMounted } = require("@vue/runtime-core");
let canvas;
let ctx;
const DrawDottedLine = (x1, y1, x2, y2, dotRadius, dotCount, dotColor) => {
  var dx = x2 - x1;
  var dy = y2 - y1;
  // let slopeOfLine = (dy / dx);
  // var degOfLine = Math.atan(slopeOfLine) * (180 / Math.PI) > 0 ? Math.atan(slopeOfLine) * (180 / Math.PI) : 180 + Math.atan(slopeOfLine) * (180 / Math.PI);
  // var degOfNeedle = rotation.value * (180 / Math.PI);
  // if (rotation.value >= 0.75 * Math.PI) {
  //  dotColor = degOfLine <= degOfNeedle ? '#FF9421' : '#F97272';
  // } else {
  //  dotColor = degOfLine <= degOfNeedle ? dotColor : '#AAD4D4';
  // }
  var spaceX = dx / (dotCount - 1);
  var spaceY = dy / (dotCount - 1);
  var newX = x1;
  var newY = y1;
  for (var i = 10; i < dotCount; i++) {
    drawDot(newX, newY, dotRadius * (1 - i / dotCount), dotColor);
    newX += spaceX;
    newY += spaceY;
  }
};
const drawDot = (x, y, dotRadius, dotColor) => {
  ctx.beginPath();
  ctx.arc(x, y, dotRadius, 0, 2 * Math.PI, false);
  ctx.fillStyle = dotColor;
  ctx.fill();
};

function calcPointsCirc(cx, cy, rad, dashLength) {
  var n = rad / dashLength,
    alpha = (Math.PI * 2) / n,
    // pointObj = {},
    points = [],
    i = -1;
  while (i < n) {
    var theta = alpha * i,
      theta2 = alpha * (i + 1);
    points.push({
      x: Math.cos(theta) * rad + cx,
      y: Math.sin(theta) * rad + cy,
      ex: Math.cos(theta2) * rad + cx,
      ey: Math.sin(theta2) * rad + cy,
    });
    i += 2;
  }
  return points;
}
function CircleCanavas() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "black";

  const center = {
    x: 500,
    y: window.innerWidth / 2 - 200,
  };

  const pointOnCircle = calcPointsCirc(center.x, center.y, 300, 2);

  for (let i = 0; i < pointOnCircle.length; i++) {
    let x = pointOnCircle[i].x;
    let y = pointOnCircle[i].y;

    DrawDottedLine(x, y, center.x, center.y, 2, 50, "red");
  }
}

onMounted(() => {
  CircleCanavas();
});
</script>
<style>
body {
  background: #000;
}
</style>
