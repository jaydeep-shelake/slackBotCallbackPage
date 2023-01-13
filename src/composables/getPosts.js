import {ref} from "vue"
const getPosts=(url)=>{
    const posts = ref([])
  const err = ref(null)
  const loading =ref(false)
   const loadPosts= async ()=>{
    loading.value=true
    try {
        const res = await fetch(url)
    const data = await res.json()
    posts.value=data
    loading.value=false
    } catch (error) {
      err.value="somthing went wrong"  
    } 
    
   }

   return {posts,err,loading,loadPosts}
}

export default getPosts