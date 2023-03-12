<script>
// import { RouterLink, RouterView } from "vue-router";
import { mapState } from "pinia";
import { useAnimeStore } from "@/stores/animes.js";
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
  <h1>HOMEPAGE</h1>
  <!-- <h2>{{ animes }}</h2> -->
  <!-- <h4>{{ animes }}</h4> -->

  <div v-for="anime in animes" :key=anime.id class="card">
      <img
        :src="anime.attributes.coverImage.small"
      />
      <!-- <div :style="{ backgroundImage: 'url(' + recipe.image + ')' }"></div> -->
      <div>
        <h2>{{ anime.id }}</h2>
      </div>
    </div>
</template>

<style scoped> </style>