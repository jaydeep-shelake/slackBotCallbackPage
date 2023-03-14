<template>
  <canvas
    id="myCanvas"
    width="934"
    height="500"
    style="border: 1px solid white"
  ></canvas>
</template>

<script setup>
import { onMounted } from "vue";

// const selectedCircle = ref(null);

let canvas;
let ctx;

const circleArray = [
  {
    text: "word 7",
    percentage: 56,
  },
  {
    text: "word 8",
    percentage: 64,
  },
  {
    text: "word 9",
    percentage: 66,
  },
  {
    text: "word 6",
    percentage: 76,
  },
  {
    text: "word 5",
    percentage: 86,
  },
  {
    text: "word 4",
    percentage: 77,
  },
  {
    text: "word 3",
    percentage: 42,
  },
  {
    text: "word 2",
    percentage: 52,
  },
  {
    text: "word 1",
    percentage: 90,
  },
];
const array = circleArray.sort(
  (a, b) => parseFloat(b.percentage) - parseFloat(a.percentage)
);

// sorted array in desending order
const DrawDottedLine = (x1, y1, x2, y2, dotRadius, dotCount, dotColor) => {
  var dx = x2 - x1;
  var dy = y2 - y1;

  var spaceX = dx / (dotCount - 1);
  var spaceY = dy / (dotCount - 1);
  var newX = x1;
  var newY = y1;
  for (var i = 0; i < dotCount; i++) {
    // incrase or decrese the i accordig to radius

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

function calcPointsCirc(cx, cy, rad, dashLength, text, fontsize) {
  ctx.fillText(text, cx, cy);
  ctx.font = `bold ${fontsize}px Calibri`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.globalCompositeOperation = "destination-over";
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";

  for (let i = 0; i < array.length; i++) {
    var percentage = array[i].percentage;

    // let minRadius = Math.min(canvas.width, canvas.height) * 0.1;
    // let maxRadius = Math.min(canvas.width, canvas.height) * 0.2;
    let maxRadius = 95;
    let maxPercentage = array[0].percentage;

    // let radius = minRadius + ((maxRadius - minRadius) * percentage) / 100;
    let radius = (percentage / maxPercentage) * maxRadius + 20;
    let center;

    if (i === 0) {
      // largest circle

      center = {
        x: canvas.width / 2,
        y: canvas.height / 3,
      };
    } else if (i >= 1 && i < 5) {
      // const angle = (i - 1) * (Math.PI / 2);

      if (i == 1) {
        center = {
          x: 588,
          y: 334,
        };
      } else if (i == 2) {
        center = {
          x: 422,
          y: 364,
        };
      } else if (i == 3) {
        center = {
          x: 626,
          y: 164,
        };
      } else if (i == 4) {
        center = {
          x: 286,
          y: 200,
        };
      }
    } else {
      if (i === 5) {
        center = {
          x: 210,
          y: 367,
        };
      } else if (i === 6) {
        center = {
          x: 131,
          y: 164,
        };
      } else if (i === 7) {
        center = {
          x: 234,
          y: 100,
        };
      } else if (i === 8) {
        center = {
          x: 700,
          y: 50,
        };
      }
    }
    let fontsize = 20;

    // points of circle

    const pointOnCircle = calcPointsCirc(
      center.x,
      center.y,
      radius,
      1,
      array[i].text,
      fontsize
    ); // circle function
    // increase the 1.2 to reduce the numbers line from circle

    for (let j = 0; j < pointOnCircle.length; j++) {
      let x = pointOnCircle[j].x;
      let y = pointOnCircle[j].y;
      // let hue = j * 30;
      const color = `#84CAFE`;

      DrawDottedLine(x, y, center.x, center.y, 1, 30 - i * 2, color);

      // decrease and increase radius as the the  calcPointsCirc radius increase decreases
    }

    canvas.addEventListener("click", (event) => {
      const distance = Math.sqrt(
        Math.pow(event.clientX - center.x, 2) +
          Math.pow(event.clientY - center.y, 2)
      );
      if (distance <= radius) {
        console.log(i, center, radius);

        for (let j = 0; j < pointOnCircle.length; j++) {
          let x = pointOnCircle[j].x;
          let y = pointOnCircle[j].y;
          // const x1 = canvas.width / 2 - radius;
          // const y1 = canvas.height / 2 - radius;
          console.log(canvas.width / 2 - radius);
          // const width = radius * 2;
          // const height = radius * 2;
          // ctx.clearRect(center.x, center.y, width, height);

          DrawDottedLine(x, y, center.x, center.y, 1, 30 - i * 2, "#84CAFE");
        }
      }
    });
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
