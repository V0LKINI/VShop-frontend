<template>
  <div class="flex items-center">
    <div class="w-1/6">
      <a href="/"><img src="../../../../public/logo.jpg" alt=""></a>
    </div>
    <div class="w-3/6">
      <form action="">
        <input class="w-3/4 p-2 border-2 border-main rounded-md" type="text" placeholder="Введите товар для поиска">
      </form>
    </div>
    <div class="w-2/6">
      <ul class="flex justify-end justify-between ">
        <li v-for="link in links" :key="link.id">
          <router-link :to="link.href" class="py-2 px-4 ml-2 rounded-md"
                       :class="{'bg-main text-white': link.href === route.path, 'hover:bg-hover': link.href !== route.path}">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>

  <div class="w-full">
    <ul class="flex justify-between mt-2">
      <li class="group rounded-md py-2" v-for="categoryGroup in categoryGroups" :key="categoryGroup.id"
          :class=" { 'bg-main-second text-white': route.path.indexOf(/catalog/ + categoryGroup.code) >= 0,
                      'hover:bg-hover': route.path.indexOf(/catalog/ + categoryGroup.code) === -1 }">
        <router-link :to="/catalog/ + categoryGroup.code + '/'" class="px-4">
          {{ categoryGroup.name }}
        </router-link>
        <ul class="group-hover:block hidden absolute mt-2 rounded-md bg-main-grey w-48">
          <li v-for="category in categoryGroup.categories" :key="category.id" class="text-black  ">
            <router-link :to="/catalog/ + categoryGroup.code + '/' + category.code + '/'"
                         class="block w-full  rounded-md py-2 px-4"
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


<script setup>
import {useRoute} from 'vue-router'
import {ref, onMounted} from "vue";
import axios from "axios";

const route = useRoute();

const categoryGroups = ref([]);

const getCategories = async (params = null, url = '/categories/') => {
  let config = {
    params: params,
  }

  await axios.get(url, config)
      .then((r) => {
        categoryGroups.value = r.data.data;
      }).catch((e) => {
        console.log(e);
      })
};

const links = [
  {id: 1, name: 'Профиль', href: '/profile/'},
  {id: 2, name: 'Заказы', href: '/orders/'},
  {id: 3, name: 'Избранное', href: '/favorite/'},
  {id: 4, name: 'Корзина', href: '/basket/'},
];

onMounted(function () {
  getCategories()
})
</script>
