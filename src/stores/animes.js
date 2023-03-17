import {defineStore} from "pinia";
import axios from "axios";

export const useAnimesStore = defineStore("animes", {
    state: () => ({
        listAnimes: [],
    }),

    getters: {
        getListeAnimes(state) {
            return state.listAnimes;
        }
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
    },
});
