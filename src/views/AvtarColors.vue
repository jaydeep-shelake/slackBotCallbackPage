<template>
  <div class="w-full">
    <AvtarColor v-for="color in colorsArray" :key="color" :mainColor="color" />
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
</style>
