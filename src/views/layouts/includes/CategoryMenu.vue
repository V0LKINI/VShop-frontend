<script setup>

import {useRoute} from 'vue-router'
const route = useRoute();

const links = [
  {id: 1, name: 'Одежда', href: '/catalog/clothing/'},
  {id: 1, name: 'Обувь', href: '/catalog/shoes/'},
  {id: 2, name: 'Электроника', href: '/catalog/electronics/'},
  {id: 3, name: 'Для дома', href: '/catalog/house/'},
  {id: 3, name: 'Для огорода', href: '/catalog/garden/'},
  {id: 4, name: 'Детские товары', href: '/catalog/children/'},
  {id: 5, name: 'Продукты питания', href: '/catalog/products/'},
  {id: 6, name: 'Мебель', href: '/catalog/furniture/'},
];

</script>


<template>
  <div class="w-full ">
    <ul class="flex justify-between">

      <li v-for="link in links" :key="link.id">
        <router-link :to="link.href" class="py-2 px-4 rounded-md"
                     :class="{'bg-main-second text-white': link.href == route.path, 'hover:bg-hover': link.href != route.path }">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>