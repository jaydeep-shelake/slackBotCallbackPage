<template>
  <h1>Home</h1>

  <div>Ref</div>
  <p>{{ personTwo.name }}</p>
    <p>{{  personTwo.age }}</p>
    <button @click="updatePersonTwo">Update </button>
  <div>Reactive</div>
  <p>{{ person.name }}</p>
  <p>{{ person.age }}</p>
  <button @click="updateName">update</button>
  <div>counter</div>
  <p>{{ count }}</p>
  <button @click="increaseCounter">update</button>
</template>

<script>
import { ref,reactive} from 'vue';
export default {
name:"HomePage",
setup(){
     const name = ref("")
     const count = ref(0)
     const nameTow = reactive("laugi")
     const person = reactive({name:"Laugi",age:23})
     const personTwo = ref({name:"jaydeep",age:21})
    const submit=()=>{
        console.log(name.value)
    }
     const increaseCounter=()=>{
      count.value++
     }

     const updateName=()=>{
       person.name="jaydeep"
      
       person.age++
      }
      const updatePersonTwo=()=>{
        personTwo.value.age++
      }
     return{name,submit,count,updateName,nameTow,person,updatePersonTwo,personTwo,increaseCounter}
  }

 
}

</script>

<style>

</style>