<template>
  <p>Posts</p>
  <Suspense>
    <template #default>
        <PostList :posts="posts"/>
    </template>
    <template #fallback>
        <h1 >Loading...</h1>
    </template>
  </Suspense>
  
  <div v-if="err">{{ err }}</div>

</template>

<script>
import getPosts from "../composables/getPosts"
import PostList from "../components/PostList.vue"
import { onMounted } from "vue"
export default {
name:"PostPage",
components:{
PostList
},
setup(){
  
 
   const {posts,err,loadPosts,loading}=getPosts("http://localhost:3000/posts")
   onMounted(()=>{
    setTimeout(()=>{
        loadPosts()
    },3000)
   })

  return {posts,err,loading}
}
}
</script>

<style>

</style>