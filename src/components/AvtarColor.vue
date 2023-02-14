<template>
  <div class="color-block">
    <div :style="`background:${mainColor}`">
      {{ mainColor }}
    </div>
    <div :style="`background:${primaryLightColor}`">
      {{ primaryLightColor }}
    </div>
    <div :style="`background:${secondaryDarkColor}`">
      {{ secondaryDarkColor }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  mainColor: {
    type: String,
  },
});
function converHextToHSL(hex, num) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  //   var colorInHSL = "hsl(" + h + ", " + s + "%, " + (l + num) + "%)";

  //convert from hsl to hex
  l = l + num;
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const primaryLightColor = converHextToHSL(props.mainColor, 20); // light color
const secondaryDarkColor = converHextToHSL(props.mainColor, -20); // dark color
</script>

<style scoped>
.color-block {
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-block div {
  padding: 10px;
  color: #fff;
  font-size: 20px;
  margin: 20px;
}
</style>
