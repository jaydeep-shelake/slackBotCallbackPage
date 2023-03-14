<template>
  <svg
    class="my-circle"
    :width="circleRadius"
    :height="circleRadius"
    :style="`top:${center.y};left:${center.x};`"
    @click="sendWord(circle.text, u)"
  >
    <g
      v-for="i in numberOfLines"
      :key="i"
      :transform="`rotate(${(i + 1) * 5} ${radius} ${radius})`"
    >
      <!-- line -->
      <circle
        v-for="j in numberOfDots"
        :key="j"
        :cx="radius"
        :cy="(j + 1) * (5 - u * 0.2)"
        :r="
          2 - 0.1 * getIndex - j * 0.1 >= 0.1
            ? 2 - 0.1 * getIndex - j * 0.1
            : 0.1
        "
        :fill="`  ${
          activeIndex === u ? hoverColor : `${color}${99 - getIndex * 2}`
        }`"
      />

      <!-- dot -->
    </g>
    <text
      :style="`font-size:${20 - u * 0.5};`"
      x="50%"
      y="50%"
      text-anchor="middle"
      :fill="color"
    >
      {{ circle.text }}
    </text>
    <text
      x="48%"
      :y="`${58 + u * 0.2}%`"
      text-anchor="middle"
      :fill="color"
      class="count"
      :style="`font-size:${20 - u * 0.5};`"
    >
      {{ circle.percentage }}
    </text>
    <text
      x="56%"
      :y="`${58 + u * 0.2}%`"
      text-anchor="middle"
      :fill="color"
      :style="`font-size:${20 - u * 0.5};`"
    >
      %
    </text>
  </svg>
</template>
<script setup>
import { ref, defineProps, computed, defineEmits } from "vue";

const props = defineProps({
  circle: {
    type: Object,
  },
  u: {
    type: Number,
  },
  percentage: {
    type: Number,
  },
  length: {
    type: Number,
  },
  perRange: {
    type: Number,
  },
  minPer: {
    type: Number,
  },
  activeIndex: {
    type: Number,
  },
  color: {
    type: String,
  },
  hoverColor: {
    type: String,
  },
});
const maxRadius = 300;

// const radius = ref(
//   (maxRadius - props.u * 20) / 2 >= 60 ? (maxRadius - props.u * 20) / 2 : 60
// );

const getRadius = (maxRadius, minRadius) => {
  const radiusRange = maxRadius - minRadius;
  const realtive = (props.percentage - props.minPer) / props.perRange;
  const realtiveRad = realtive * radiusRange;
  const absRadius = minRadius + realtiveRad;
  return absRadius;
};

const emits = defineEmits(["getWord"]);
function sendWord(word, u) {
  emits("getWord", { word, index: u });
}

const circleRadius = getRadius(320, 80);

const radius = ref(circleRadius / 2);
const numberOfLines = ref(maxRadius / 2 / 2 - 3); // radius / 2
const numberOfDots = ref(Math.ceil(radius.value / 2)); // radius / distance

// console.log(props.circle.percentage, props.u);
let center = {
  x: 0,
  y: 0,
};
const getIndex = computed(() => {
  return props.u < 9 ? props.u : 9;
});

if (props.u === 0) {
  center = {
    x: 350,
    y: 200,
  };
} else if (props.u === 1) {
  center = {
    x: 470,
    y: 360,
  };
} else if (props.u == 2) {
  center = {
    x: 237,
    y: 409,
  };
} else if (props.u == 3) {
  center = {
    x: 625,
    y: 228,
  };
} else if (props.u == 4) {
  center = {
    x: 144,
    y: 200,
  };
} else if (props.u === 5) {
  center = {
    x: 86,
    y: 520,
  };
} else if (props.u === 6) {
  center = {
    x: 10,
    y: 164,
  };
} else if (props.u === 7) {
  center = {
    x: 234,
    y: 59,
  };
} else if (props.u === 8) {
  center = {
    x: 700,
    y: 50,
  };
} else if (props.u === 9) {
  center = {
    x: 550,
    y: 20,
  };
} else if (props.u === 10) {
  center = {
    x: 26,
    y: 400,
  };
} else if (props.u === 11) {
  center = {
    x: 400,
    y: 82,
  };
} else if (props.u === 12) {
  center = {
    x: 445,
    y: 600,
  };
} else if (props.u === 13) {
  center = {
    x: 122,
    y: 67,
  };
} else if (props.u === 14) {
  center = {
    x: 500,
    y: 380,
  };
}
</script>
<style>
text {
  font-size: 20px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif !important;
}
svg:hover circle {
  fill: v-bind(hoverColor);
}
</style>
