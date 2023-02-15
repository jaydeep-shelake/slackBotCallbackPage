<template>
  <div class="w-full">
    <AvtarColor v-for="color in colorsArray" :key="color" :mainColor="color" />
    <button @click="share" class="share">Share</button>
  </div>
</template>

<script setup>
import AvtarColor from "@/components/AvtarColor.vue";
const colorsArray = [
  "#FF6B6B",
  "#FCE831",
  "#25C364",
  "#5B99F0",
  "#8F4EEA",
  "#F9774F",
  "#FBB02D",
  "#0EC893",
  "#758BFD",
  "#DB48DA",
  "#F4A549",
  "#C8CC29",
  "#05A8AA",
  "#77B6EA",
  "#EF5898",
  "#FF9D66",
  "#CFEC1E",
  "#A1EB78",
  "#77C7C2",
  "#C777BF",
];
async function share() {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Avatar colors",
        url: "https://staging.ssup.co/youtu/be/IcbJ",
      });
      console.log("Data was shared successfully");
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  }
}
</script>
<style scoped>
.w-full {
  background: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
}
.share {
  padding: 10px;
  background: aqua;
  color: black;
  font-size: 20px;
}
</style>
