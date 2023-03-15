<script>
// import { RouterLink, RouterView } from "vue-router";
import {mapState} from "pinia";
import {useAnimeStore} from "@/stores/animes.js";
import CardAnime from "@/components/CardAnime.vue";
import axios from "axios";

// const animes = useAnimeStore();

export default {
  name: "HomePage",
  data() {
    return {
      animes: undefined
    };
  },
  components: {CardAnime},
  computed: {},
  beforeCreate() {
    const getData = async () => {
      const res = await axios.get("https://kitsu.io/api/edge/trending/anime");
      console.log(res.data.data);
      return (this.animes = res.data.data);
    };
    getData();
  }
};
</script>

<template>
  <h1>Listes D'animes</h1>
  <div class="container">

<!--    <div class="row">-->
<!--      <div class="col-sm-6">-->
        <CardAnime v-for="anime in animes" :key='anime.id' :anime='anime'/>
<!--      </div>-->
<!--    </div>-->
  </div>

</template>

<style lang="scss" scoped>
//img {
//  width: 50%;
//  display: flex;
//}

.container {
  display: flex;
  //flex-direction: column;
  //justify-content: center;
  //gap: 2rem;
  //align-items: center;
  //width: 100%;
}

</style>
