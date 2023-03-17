<script>
import axios from "axios";

export default {
  name: "CardAnime",
  props: {
    anime: undefined
  },

}
</script>

<template>

  <div class="col-3">
    <div class="card" style="">
      <img :src="anime.attributes.posterImage.small"
           alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title text-center">{{ anime.attributes.canonicalTitle }}</h5>
<!--        <p class="card-text">{{ anime.attributes.description }}</p>-->
<!--        <a href="#" class="btn btn-primary">Go somewhere</a>-->
      </div>
    </div>
  </div>
  <!--  </RouterLink>-->
</template>

<style lang="scss" scoped>
.card {
  background-color: wheat;
  border-radius: 1rem;
  //min-width: 350px;
  //max-width: 500px;
  box-shadow: 0 5px 5px 2px #2e2e2e;
  margin-bottom: 50px;


  img {
    border-radius: 1rem 1rem 0 0;
    //object-fit: cover;
    //width: 100%;
    //height: 30%;
  }
}

</style>
