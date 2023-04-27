<template>
  <button @click="handleClick">CLick here</button>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
  clevertapInit()
})
const clevertapInit = () => {
  var clevertap = { event: [], profile: [], account: [], onUserLogin: [], notifications: [] };
  clevertap.account.push({ id: "6ZW-89K-976Z" });
  var wzrk = document.createElement('script');
  wzrk.type = 'text/javascript';
  wzrk.async = true;
  wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wzrk, s)
  window.onload = function () {
    console.log("hello", $WZRK_WR)
    $WZRK_WR.getEmail(isReEncode);
  };

  function wzrk_email_fetched(emailStr) {
    console.log("EMAIL___", emailStr)
    email.value = emailStr
    // document.getElementById("email").innerHTML = emailStr;
  }
}
 
const handleClick  =()=>{
   console.log("clicked", $WZRK_WR)
}
</script>

