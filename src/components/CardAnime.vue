<script>
export default {
  name: "CardAnime",
  props: {
    recipe: {
      id: Number,
      name: String,
      user: {
        id: Number,
        username: String,
      },
    },
  },
};
</script>

<template>
  <!-- soit on laisse vu interpréter la route et construire l'URL -->
  <RouterLink :to="{ name: 'recette', params: { id: recipe.id } }">
    <!-- soit on passe directement l'URL nous même -->
    <!-- <RouterLink :to="'recette/' + recipe.id"> -->
    <div class="card">
      <img
        v-if="!recipe.image"
        :alt="recipe.name + '_recipe_img'"
        src="https://picsum.photos/200"
      />
      <img v-else :alt="recipe.name + '_recipe_img'" :src="recipe.image" />
      <!-- <div :style="{ backgroundImage: 'url(' + recipe.image + ')' }"></div> -->
      <div>
        <h2>{{ recipe.name }}</h2>
        <p>Par : {{ recipe.user.username }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.card {
  background-color: rgb(48, 48, 48);
  border-radius: 1rem;
  min-width: 350px;
  max-width: 500px;
  box-shadow: 0 5px 5px 2px #2e2e2e;
  img {
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
    width: 100%;
  }
  div {
    padding: 1rem;
    p {
      white-space: none;
      text-overflow: ellipsis;
    }
  }
}
</style>
