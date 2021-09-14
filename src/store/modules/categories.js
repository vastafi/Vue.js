import {fetchCategories,testFunction} from "../../api/999";

export default {
    namespaced: true,
    state:{
        list:[],
        isLoading: false
    },
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading
    },
    actions:{
        async fetchCategories({commit}) {
        commit('mutateLoading', true);
        const result = await fetchCategories();
        commit('mutateList', await result.data);
        commit('mutateLoading', false);
    }
    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload;
        },
        mutateLoading(state, payload) {
            state.isLoading = payload;
            console.log(testFunction());
        }
    }
}