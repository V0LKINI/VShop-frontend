<script setup>

import {useRoute} from 'vue-router'
import {useMenuStore} from "../../../stores/MenuStore";

const route = useRoute();
const menuStore = useMenuStore();

menuStore.getCategories();

</script>

<template>
  <div class="w-full ">
    <ul class="flex justify-between mt-2">
      <li class="group rounded-md py-2" v-for="categoryGroup in menuStore.categoryGroups" :key="categoryGroup.id"
          :class=" { 'bg-main-second text-white': route.path.indexOf(/catalog/ + categoryGroup.code) >= 0,
                      'hover:bg-hover': route.path.indexOf(/catalog/ + categoryGroup.code) === -1 }">
        <router-link :to="/catalog/ + categoryGroup.code + '/'" class="px-4">
          {{ categoryGroup.name }}
        </router-link>
        <ul class="group-hover:block hidden absolute mt-2 rounded-md bg-main-grey w-48">
         <li v-for="category in categoryGroup.categories" :key="category.id" class="text-black  ">
           <router-link :to="/catalog/ + categoryGroup.code + '/' + category.code + '/'" class="block w-full  rounded-md py-2 px-4"
                        :class="{'text-main-second': /catalog/ + categoryGroup.code + '/' + category.code + '/' === route.path,
                                 'hover:text-main-second': /catalog/ + categoryGroup.code + '/' + category.code + '/' !== route.path }">
               {{ category.name }}
           </router-link>
         </li>
        </ul>
      </li>
    </ul>
  </div>
</template>