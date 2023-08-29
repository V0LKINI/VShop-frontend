<template>
  <div>
    <img class="mt-6 rounded-lg" :src="banner.value" alt="">
  </div>
  <div class="grid grid-cols-5 gap-4 place-items-start mt-5">
    <div v-for="offer in offers">
      <img :src="offer.images.length > 0 ? offer.images[0].image : 'product-default.png'" alt="">
      <p class="font-bold">{{ offer.category }} {{ offer.brand }}</p>
      <p>{{ offer.price }} ₽</p>
    </div>
  </div>
</template>


<script setup>
import {onMounted, ref} from 'vue';
import axios from "axios";

const banner = ref('');
const offers = ref([]);

const getData = async (params = null, url = '/home/') => {
  let config = {
    params: params,
  }

  await axios.get(url, config)
      .then((r) => {
        offers.value = r.data.data.offers;
        banner.value = r.data.data.settings.banner;
      }).catch((e) => {
        console.log(e);
      })
};

onMounted(function () {
  getData();
})

</script>
