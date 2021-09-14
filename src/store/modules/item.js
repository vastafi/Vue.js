import {fetchItem, testFunction} from "../../api/999";
export default {
    namespaced: true,
    state: {
        item: {},
        isLoading: false,
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        },
        getItem: ({item}) => item
    },
    actions: {
        async loadItem(store, payload) {
            store.commit('mutateIsLoading', true)
            const result = await fetchItem('/ru/' + payload);
            store.commit('mutateItem', await result.data);
            store.commit('mutateIsLoading', false);

        }
    },
    mutations: {
        mutateIsLoading(state, payload) {
            state.isLoading = payload
            console.log(testFunction());
        },
        mutateItem(state, payload) {
            state.item = payload
        }
    },
}