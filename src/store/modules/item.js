import {fetchItem} from "../../api/999";

export const state = {
    item: {},
    isLoading: false,
}
export default {
    namespaced: true,
    state,
    getters: {
        getIsLoading: (state) => state.isLoading,
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
                   },
        mutateItem(state, payload) {
            state.item = payload
        }
    },
}