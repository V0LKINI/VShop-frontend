<script setup>
import { ref, watch } from 'vue';
import axios from "axios";

const search = ref('');
const recipes = ref([]);
let timeoutRecipe = null;

const getRecipes = async (search) => {
  return await axios.get('recipes?search=' + search);
}

watch(search, () => {
  clearTimeout(timeoutRecipe);
  timeoutRecipe = setTimeout( () => {
    getRecipes(search.value).then((r) => {
      recipes.value = r.data.data;
    })
  }, 800);
})

getRecipes('').then((r) => {
  recipes.value = r.data.data;
})
</script>

<template>
  <input
      type="search"
      v-model="search"
      placeholder="Поиск рецептов"
  >

  <div v-for="recipe in recipes">
    {{ recipe.text }} <br><br><br>
  </div>
</template>