<script>
// import { RouterLink, RouterView } from "vue-router";
import {mapState} from "pinia";
import {useAnimeStore} from "@/stores/animes.js";
import axios from "axios";

// const animes = useAnimeStore();

export default {
  name: "HomePage",
  data() {
    return {
      animes: undefined,
    };
  },
  computed: {},
  beforeCreate() {
    const getData = async () => {
      const res = await axios.get("https://kitsu.io/api/edge/trending/anime");
      console.log(res.data.data);
      return (this.animes = res.data.data);
    };
    getData();

    // async getAnimesAction() {
    //   this.listAnimes = await axios.get(
    //     "https://kitsu.io/api/edge/trending/anime"
    //   );
    //   console.log(this.listAnimes.data);
    //   return this.listAnimes.data;
    // },
  },
};
</script>

<template>
  <h1>Listes D'animes</h1>

  <div v-for="anime in animes" :key=anime.id class="card" style="width: 18rem;">
    <img :src="anime.attributes.coverImage.small"
         alt="" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ anime.attributes.canonicalTitle }}</h5>
      <p class="card-text">{{ anime.attributes.description }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

</template>

<style lang="scss" scoped>
//img {
//  width: 50%;
//  display: flex;
//}

</style>
