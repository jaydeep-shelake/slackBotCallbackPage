<template>
  <h1>we are processing</h1>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import {useRoute} from "vue-router"
onMounted(()=>{
  const route = useRoute();
  console.log(route.query);
  const code = route.query?.code
  window.opener.postMessage(code,"*")
  window.close()
})

</script>

<style>

</style>