<script setup>
  import { ref, watch } from 'vue';
  import axios from "axios";
  import {useHomeStore} from "../stores/HomeStore";

  const homeStore = useHomeStore();

  homeStore.getData();

</script>

<template>

<div>
    <img class="mt-6 rounded-lg" :src="homeStore.banner.value" alt="">
</div>

<div class="grid grid-cols-5 gap-4 place-items-start mt-5">
    <div v-for="offer in homeStore.offers">
        <img :src="offer.images[0].image" alt="">
    </div>
</div>

</template>
