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
  <!-- soit on laisse vu interpréter la route et construire l'URL -->
  <!--  <RouterLink :to="{ name: 'recette', params: { id: recipe.id } }">-->
  <!-- soit on passe directement l'URL nous même -->
  <!-- <RouterLink :to="'recette/' + recipe.id"> -->
<!--  <h1>Listes D'animes</h1>-->
<!--  <div class="d-flex">-->
    <div class="card" style="width: 18rem;">
      <img :src="anime.attributes.coverImage.small"
           alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ anime.attributes.canonicalTitle }}</h5>
        <p class="card-text">{{ anime.attributes.description }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
<!--  </div>-->
  <!--  </RouterLink>-->
</template>

<style lang="scss" scoped>
.card {
  background-color: wheat;
  border-radius: 1rem;
  min-width: 350px;
  max-width: 500px;
  box-shadow: 0 5px 5px 2px #2e2e2e;

  img {
    border-radius: 1rem 1rem 0 0;
    //object-fit: cover;
    width: 100%;
    //height: 30%;
  }
}

</style>
