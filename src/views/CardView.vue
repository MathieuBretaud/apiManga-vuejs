<script setup>

import {useAnimesStore} from "@/stores/animes";
import {storeToRefs} from 'pinia'
import router from "@/router";
import {computed, onBeforeMount, onMounted, reactive} from "vue";

const storeAnimes = useAnimesStore();
// anime = storeAnimes.getListeAnimes
// const { getViewId } = storeToRefs(storeAnimes);
// const toto = storeAnimes.getOneAnime;


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
  storeAnimes.getOneAnimeAction(12);
})
// export default {
//   name: "CardView",
//   components: {},
//   data() {
//     return {
//       OnAnime: undefined
//     };
//   },
//   methods: {
//     alertButton() {
//       alert("Commentaire envoyé !");
//     },
//   },
// }

// computed: {
//   // on récupère la recette depuis notre state via un getter
//   anime() {
//     let anime = store.getViewId(
//         parseInt(this.$route.params.id)
//     );
//     console.log(anime);
//     return anime;
//   },
// },
// beforeMount() {
//   // approche utilisant le state vuex
//   // store.getViewId
//   console.log('toto')
//   // // approche sans le state
//   // const getData = async () => {
//   //   const res = await axios.get(
//   //     "http://localhost:8000/recipes/" + parseInt(this.$route.params.id)
//   //   );
//   //   console.log(res);
//   //   this.recipe = res.data;
//   // };
//   // getData();
// },
// };
</script>

<template>
  <!--  <div v-if="anime">-->
  <h1>test</h1>
<!--    {{ view.name }}-->
  {{storeAnimes.recipe}}
<!--  {{ storeAnimes.getOneAnimeById() }}-->
  <!--    <h1>{{ getViewAnime.attributes.canonicalTitle }}</h1>-->

  <!--    <img :alt="recipe.name + '_image'" src="https://picsum.photos/200"/>-->

  <!--    <p>-->
  <!--      {{ recipe.description }}-->
  <!--    </p>-->
  <!--    <p>-->
  <!--      {{ recipe.ingredients }}-->
  <!--    </p>-->

  <!--    <h2>COMMENTAIRES ({{ recipe.comments?.length }})</h2>-->

  <!--    <div v-if="recipe.comments" class="container">-->
  <!--      <Comment-->
  <!--          v-for="(oneComment, index) in recipe.comments"-->
  <!--          :comment="oneComment"-->
  <!--          :key="oneComment.id"-->
  <!--      />-->
  <!--    </div>-->
  <!--    <form v-if="this.$store.getters.isConnected">-->
  <!--      <label> Commenter : </label>-->
  <!--      <textarea placeholder="Votre commentaire..."/>-->

  <!--      <Button @click="alertButton" color="aquamarine"> COMMENTER</Button>-->
  <!--    </form>-->
  <!--  </div>-->
  <!--  <div v-else>⏳</div>-->
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
