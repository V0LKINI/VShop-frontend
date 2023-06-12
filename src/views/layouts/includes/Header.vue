<script setup>
  import TopMenu from "./TopMenu.vue";
  import CategoryGroupMenu from "./CategoryGroupMenu.vue";
  import Search from "../../../components/Search.vue";
  import Logo from "./Logo.vue";
</script>


<template>
    <div class="flex items-center">
        <Logo/>
        <Search/>
        <TopMenu/>
    </div>

  <CategoryGroupMenu/>
</template>