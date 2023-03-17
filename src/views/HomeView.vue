<script setup>
// import { RouterLink, RouterView } from "vue-router";
import {ref, computed, onMounted} from "vue";
import {useAnimesStore} from "@/stores/animes";

import axios from "axios";
import CardAnime from "@/components/CardAnime.vue";
import {useMangasStore} from "@/stores/manga";

const storeAnimes = useAnimesStore();
const getlistAnimes = computed(() => {
  return storeAnimes.getListeAnimes;
});
onMounted(() => {
  storeAnimes.getAnimesApiAction();
});

const storeMangas = useMangasStore();
const getlistMangas = computed(() => {
  return storeMangas.getListeMangas;
});
onMounted(() => {
  storeMangas.getMangasApiAction();
});


// export default {
//   name: "HomePage",
//   data() {
//     return {
//       animes: undefined,
//       mangas: undefined
//     };
//   },
//   // components: {CardAnime},
//
// };
</script>

<template>
  <h1 class="text-center mb-4">Listes d'animes</h1>
  <div class="container">
    <!--    {{ storeAnimes.listAnimes }}-->
    <div class="row">
      <!--      <div class="col-4">-->
      <CardAnime v-for="anime in storeAnimes.getListeAnimes" :key='anime.id' :anime='anime'/>
      <h1 class="text-center mb-4">Listes des mangas</h1>

      <CardAnime v-for="manga in storeMangas.getListeMangas" :key='manga.id' :anime='manga'/>

    </div>
    <!--    </div>-->

  </div>

</template>

<style lang="scss" scoped>
//img {
//  width: 50%;
//  display: flex;
//}

.container {
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //gap: 2rem;
  //align-items: center;
  width: 100%;
}

</style>
