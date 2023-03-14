<template>
  <div class="container">
    <div class="top-banner">
      <div @click="filter('all')">All</div>
      <div @click="filter('positive')">Positive</div>
      <div @click="filter('neutral')">Neutral</div>
      <div @click="filter('negative')">Negative</div>
    </div>
    <SvgVue
      v-for="(circle, i) in sortedArray"
      :key="i"
      :circle="circle"
      :u="i"
      :percentage="circle.percentage"
      :perRange="perRange"
      :minPer="minPer"
      :color="getColor(circle).background"
      :hoverColor="getColor(circle).hover"
      :activeIndex="activeIndex"
      @getWord="reciveWord"
    />
  </div>
</template>
<script setup>
import SvgVue from "@/components/SvgVue.vue";
import { onMounted, ref, watch } from "vue";
import gsap from "gsap";

const activeIndex = ref(null);
const activeWord = ref();
const circleArray = [
  {
    text: "word 1",
    percentage: 91,
    type: "neutral",
  },
  {
    text: "word 2",
    percentage: 85,
    type: "neutral",
  },
  {
    text: "word 3",
    percentage: 85,
    type: "neutral",
  },
  {
    text: "word 4",
    percentage: 83,
    type: "positive",
  },
  {
    text: "word 5",
    percentage: 80,
    type: "positive",
  },
  {
    text: "word 6",
    percentage: 79,
    type: "positive",
  },
  {
    text: "word 7",
    percentage: 65,
    type: "negative",
  },
  {
    text: "word 8",
    percentage: 65,
    type: "negative",
  },
  {
    text: "word 9",
    percentage: 65,
    type: "positive",
  },
  {
    text: "word 10",
    percentage: 64,
    type: "positive",
  },
  {
    text: "word 11",
    percentage: 63,
    type: "neutral",
  },
  {
    text: "word 12",
    percentage: 60,
    type: "positive",
  },
  {
    text: "word 13",
    percentage: 42,
    type: "negative",
  },
  {
    text: "word 14",
    percentage: 10,
    type: "negative",
  },
];
const originalArray = ref(circleArray);
const sortedArray = ref(
  originalArray.value.sort(
    (a, b) => parseFloat(b.percentage) - parseFloat(a.percentage)
  )
);
watch(originalArray, () => {
  sortedArray.value = originalArray.value.sort(
    (a, b) => parseFloat(b.percentage) - parseFloat(a.percentage)
  );
});

function filter(type) {
  callGsap();
  if (type === "all") return (originalArray.value = circleArray);
  originalArray.value = circleArray.filter((circle) => circle.type === type);
  activeIndex.value = null;
}

function getColor(circle) {
  const style = {
    background:
      circle.type === "negative"
        ? "#FF8D8D"
        : circle.type === "neutral"
        ? "#DDDDDD"
        : "#84CAFE",
    hover:
      circle.type === "negative"
        ? "#f03e3e"
        : circle.type === "neutral"
        ? "#c4c4c4"
        : "#2081c9",
  };

  if (
    activeIndex.value !== null &&
    activeIndex.value !== sortedArray.value.indexOf(circle)
  ) {
    style.background = "#DDDDDD";
    style.hover = "#DDDDDD";
  }
  return style;
}

const minPer = sortedArray.value[sortedArray.value.length - 1].percentage;
const maxPer = sortedArray.value[0].percentage;
const perRange = maxPer - minPer;

// const arrayPer = sortedArray.map((item) => item.percentage);

function callGsap() {
  const myCircle = document.querySelectorAll(".my-circle");
  myCircle.forEach((circ) => {
    circ.style.transformOrigin = "center";
    const tl = gsap.timeline();
    tl.to(circ, { duration: 1, scale: 1.5 }).to(circ, {
      duration: 1,
      scale: 1,
    });

    circ?.addEventListener("mouseover", function () {
      circ.style.transformOrigin = "center";
      const tl = gsap.timeline();
      tl.to(circ, { duration: 1, scale: 1.5 }).to(circ, {
        duration: 1,
        scale: 1,
      });
    });
  });

  const countEl = document.querySelectorAll(".count");
  gsap.from(countEl, {
    textContent: 0,
    duration: 2,
    ease: "power1.in",
    snap: { textContent: 1 },

    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  });
}
function reciveWord(wordObj) {
  activeIndex.value = wordObj.index;
  activeWord.value = wordObj.word;
  console.log(activeWord.value);
}
onMounted(() => {
  callGsap();
  console.log("mounted");
});
</script>
<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  position: relative;
  width: 900px;
  height: 500px;
}
.container svg {
  position: absolute;
}
.top-banner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-banner div {
  margin: 0 20px;
  padding: 10px;
  color: white;
  font-size: 18px;
}
</style>
