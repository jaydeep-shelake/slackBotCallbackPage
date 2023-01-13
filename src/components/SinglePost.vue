<template>
  <h1>{{ post.title }}</h1>
  <p>{{ snnipet }} <span @click="toogleSnippet">{{ seeMore?"...see more":"see less" }}</span></p>
</template>

<script>
import {ref,computed} from "vue"
export default {
props:["post"],
setup(props){
    const seeMore= ref(true)
    const words =ref(100)
    const color=ref("blue")
  const snnipet= computed(()=>props.post.body.substring(0,words.value))

  const toogleSnippet =()=>{
    seeMore.value=!seeMore.value
     seeMore.value? words.value=100 :words.value=200
     seeMore.value? color.value="blue" :color.value="red"
  }

  return {snnipet,toogleSnippet,seeMore,color}
}
}
</script>

<style>
 span{
    color: v-bind(color);
    font-weight: 600;
 }
</style>