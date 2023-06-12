<script setup>

import {useRoute} from 'vue-router'
import {useCatalogStore} from "../../../stores/CatalogStore";

const route = useRoute();
const catalogStore = useCatalogStore();

catalogStore.getCategoryGroups();

</script>


<template>
  <div class="w-full ">
    <ul class="flex justify-between">
      <li v-for="link in catalogStore.categoryGroups" :key="link.id">
        <router-link :to="/catalog/ + link.code" class="py-2 px-4 rounded-md"
                     :class="{'bg-main-second text-white': /catalog/ + link.code === route.path, 'hover:bg-hover': /catalog/ + link.code !== route.path}">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>