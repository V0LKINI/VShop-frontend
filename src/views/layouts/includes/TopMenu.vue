<script setup>

import {useRoute} from 'vue-router'
const route = useRoute();

const links = [
  {id: 1, name: 'Профиль', href: '/profile/'},
  {id: 2, name: 'Заказы', href: '/orders/'},
  {id: 3, name: 'Избранное', href: '/favorite/'},
  {id: 4, name: 'Корзина', href: '/basket/'},
];

</script>


<template>
  <div class="w-2/6">
    <ul class="flex justify-end justify-between ">
      <li v-for="link in links" :key="link.id">
        <router-link :to="link.href"  class="py-2 px-4 ml-2 rounded-md"
                     :class="{'bg-main text-white': link.href == route.path, 'hover:bg-hover': link.href != route.path}">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>