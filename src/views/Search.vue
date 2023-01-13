<template>
  <h1>Search </h1>
  <input type="text" v-model="query">
  <p>Search term- {{ query }}</p>
  <div v-for="name in searchedValue" :key="name">{{ name }}</div>
  <button @click="stopWacthers">stop</button>
</template>

<script >
import { computed, ref, watch, watchEffect } from 'vue'
export default{
name:"SearchVue",
setup(){
  const query = ref("")
    const names = ref(["jaydeep","shubham","pranav","jeevan","zaheer","balraj","swaraj"])
    const searchedValue = computed(()=>names.value.filter((name)=>name.includes(query.value)))

     const stopWatch=watch(query,()=>{
        console.log("watched run")
    })

   const stopWatchEffect= watchEffect(()=>{
        console.log("watch effect ran",query.value)
    })

    const stopWacthers=()=>{
     stopWatch()
     stopWatchEffect()
    }
  return {query,searchedValue,stopWacthers}
}
}
</script>

<style>

</style>