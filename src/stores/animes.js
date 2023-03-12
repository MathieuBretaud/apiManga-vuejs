import { defineStore } from "pinia";
import axios from "axios";

export const useAnimeStore = defineStore("animes", {
  state: () => ({
    listAnimes: [],
  }),

  getters: {
    getListeAnimes: (state) => state.listAnimes,
  },

  actions: {
    // async getAnimesAction() {
    //   try {
    //     this.listAnimes = await axios.get("https://kitsu.io/api/edge/trending/anime");
    //     console.log(this.listAnimes);
    //   } catch (error) {
    //     console.log(error);;
    //     // let the form component display the error
    //     return error;
    //   }
    // },

    async getAnimesAction() {
      this.listAnimes = await axios.get(
        "https://kitsu.io/api/edge/trending/anime"
      );
      console.log(this.listAnimes);
    },
    // },
  },
});
