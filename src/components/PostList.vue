<template>
  <div v-for="post in posts " :key="post.id">
   <SinglePost v-if="showPosts" :post="post"/>
   <button @click="togglePosts">toggle posts</button>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated,ref } from '@vue/runtime-core';
import SinglePost from './SinglePost.vue';
export default {
 props:["posts"],
 components:{
    SinglePost,
},

setup(){
    const showPosts=ref(true)
    const togglePosts=()=>{
     showPosts.value=!showPosts.value
    }
    onMounted(()=>{
        console.log("componet mounted")
    })

    onUpdated(()=>{
        console.log("component updated")
    })

    onUnmounted(()=>{
        console.log("component unmounted")
    })

    return {togglePosts,showPosts}
}

}
</script>

<style>

</style>