<template>
  <component :is="layout"/>
</template>


<script setup>
import {computed} from "vue";
import {useRoute} from 'vue-router'
import TheDefault from "./components/layouts/TheDefault.vue";

const route = useRoute();

const layout = computed(() => {
  switch (route.meta.layout) {
    default:
      return TheDefault;
  }
});

</script>