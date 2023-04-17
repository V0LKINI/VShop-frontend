<template>
  <TheTopHeader/>

  <TheTopMenu/>

  <router-view/>

  <TheFooter/>
</template>

<script setup>
import TheTopHeader from "./includes/TheTopHeader.vue";
import TheTopMenu from "./includes/TheTopMenu.vue";
import TheFooter from "./includes/TheFooter.vue";
</script>
