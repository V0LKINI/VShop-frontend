<template>
  <div class="w-9/12 m-auto">
    <TheHeader/>

    <router-view/>

    <TheFooter/>
  </div>

</template>


<script setup>
import TheHeader from "./includes/TheHeader.vue";
import TheFooter from "./includes/TheFooter.vue";
</script>



