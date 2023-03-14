<template>
  <div id="chart"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as d3 from "d3";
function bubbleGraph() {
  const percentages = [
    {
      text: "word 1",
      percentage: 60,
    },
    {
      text: "word 2",
      percentage: 40,
    },
    {
      text: "word 3",
      percentage: 20,
    },
    {
      text: "word 4",
      percentage: 24,
    },
    {
      text: "word 5",
      percentage: 37,
    },
    {
      text: "word 6",
      percentage: 62,
    },
    {
      text: "word 7",
      percentage: 90,
    },
    {
      text: "word 8",
      percentage: 70,
    },
    {
      text: "word 9",
      percentage: 56,
    },
  ];
  // Set up the chart dimensions

  const width = 900;
  const height = 500;

  // Create the SVG element
  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create the data for the bubbles
  const data = percentages.map((p, i) => ({ id: i, percentage: p.percentage }));

  // Create the force layout
  d3.forceSimulation(data)
    .force("charge", d3.forceManyBody().strength(5))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force(
      "collision",
      d3.forceCollide().radius((d) => d.percentage)
    )
    .on("tick", update);

  // Create the bubbles
  const bubbles = svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", (d) => d.percentage)
    .attr("fill", "steelblue");

  // Update the positions of the bubbles on each tick
  function update() {
    bubbles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  }

  bubbles.on("click", handleClick);

  function handleClick(event, d) {
    console.log("Bubble clicked:", d.id);
  }
}
onMounted(() => {
  bubbleGraph();
});
</script>
