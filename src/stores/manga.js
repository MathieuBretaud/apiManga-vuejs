import {defineStore} from "pinia";
import axios from "axios";

export const useMangasStore = defineStore("mangas", {
    state: () => ({
        listMangas: [],
    }),

    getters: {
        getListeMangas(state) {
            return state.listMangas;
        }
    },

    actions: {
        async getMangasApiAction() {
            try {
                const data = await axios.get("https://kitsu.io/api/edge/trending/manga");
                this.listMangas = data.data.data;
                console.log(this.listMangas);
            } catch (error) {
                console.log(error);
                // let the form component display the error
                return error;
            }
        },
    },
});
