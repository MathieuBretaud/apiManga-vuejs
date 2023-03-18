import {defineStore} from "pinia";
import axios from "axios";

export const useAnimesStore = defineStore("animes", {
    state: () => ({
        listAnimes: [],
        recipe: undefined
    }),

    getters: {
        getListeAnimes(state) {
            return state.listAnimes;
        },
        getAnimeById: (state) => {
            console.log( state.listAnimes);
            return (animeId) => state.listAnimes.find((anime) => anime.id === animeId)
        },
        getOneAnimeById: (state) => (id) =>{
            console.log(state.listAnimes.find(r => r.id));
            return state.listAnimes.find(r => r.id)
        },
        getUserById: (state) => (userId) => {
            return  state.getListeAnimes.find((user) => user.id === userId)
        },
    },

    actions: {
        async getAnimesApiAction() {
            try {
                const data = await axios.get("https://kitsu.io/api/edge/trending/anime");
                this.listAnimes = data.data.data;
                console.log(this.listAnimes);
            } catch (error) {
                console.log(error);
                // let the form component display the error
                return error;
            }
        },
        async getOneAnimeAction(animeId) {

            // on peut faire une vérification pour éviter d'envoyer une requette si la donnée complète existe déjà
            this.recipe = this.getOneAnimeById(animeId);
            console.log(this.recipe, 'je suis recipe');
            // en revanche si on a déjà récupéré les détails de cette recette et qu'entre temps un nouveau commentaire y a été ajouté, on ne le verra jamais affiché car on ira jamais re récupérer les détails de cette recette
            // if (!this.recipe) {
            //     const res = await axios.get("https://kitsu.io/api/edge/anime/" + animeId);
            //     console.log(res,'je suis res');
            //     this.recipe = res.data.data;

            // }
        },
    },
});
