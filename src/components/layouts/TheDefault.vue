<template>
  <TheHeader/>

  <router-view/>

  <TheFooter/>
</template>

<script setup>
import TheHeader from "./includes/TheHeader.vue";
import TheFooter from "./includes/TheFooter.vue";
</script>
