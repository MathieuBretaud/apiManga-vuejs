<script setup>

import {useAnimesStore} from "@/stores/animes";
import {storeToRefs} from 'pinia'
import router from "@/router";
import {computed, onBeforeMount, onMounted, reactive} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const storeAnimes = useAnimesStore();

const view = reactive({
  name: 'John Doe',
});

// const onAnime = computed(() => {
//   let recipe = storeAnimes.getAnimeById(this.$route.params.id);
//   console.log(recipe);
//   return recipe;
// });

onMounted(() => {
  console.log(`the component is now mounted.`);
  // console.log(route.params.id);
  storeAnimes.getOneAnimeAction(route.params.id);
})

</script>

<template>
  <!--  <div v-if="anime">-->
  <h1>test</h1>
<!--    {{ view.name }}-->
  {{storeAnimes.view}}

</template>

<style lang="scss" scoped>
.container {
  gap: 2rem;
  display: flex;
  flex-direction: column;
}

form {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
