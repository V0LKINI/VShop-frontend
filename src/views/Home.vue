<script setup>
  import { ref, watch } from 'vue';
  import axios from "axios";
  import {useHomeStore} from "../stores/HomeStore";

  const homeStore = useHomeStore();

  homeStore.getData();

  console.log(12345, homeStore.banner)
</script>

<template>

<div>
    <img class="mt-6 rounded-lg" :src="homeStore.banner.value" alt="">
</div>

</template>
