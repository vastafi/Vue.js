import { encode } from 'js-base64';
import {fetchSuggestions, fetchProducts} from "../../api/999";

export default {
    namespaced: true,
    state: {
        list: [],
        isLoading: false,
        search: [],
        isSearchLoading: false,
    },
    getters: {
        getList: (state) =>state.list,
        getIsLoading: (state) => state.isLoading,
        getSearchSuggestions: (state) => state.search ?? [],
        getIsSearchLoading: (state) => state.isSearchLoading
    },
    actions: {
        async loadProducts(store, {link, page}) {
            store.commit('mutateIsLoading', true);
            let querySymbol = link.includes('?') ? '&' : '?';
            const params = encode(`${link}${querySymbol}page=${page}`);
            let result = await fetchProducts(params);
            result = await result.data;
            store.commit('productHistory/mutateItem', result, { root: true });
            if(page > 1) {
                store.commit('mutateAddList', result);
            } else {
                store.commit('mutateList', result);
            }
            store.commit('mutateIsLoading', false);
        },
        async searchProducts(store, payload) {
            store.commit('mutateIsSearchLoading', true);
            let result = await fetchSuggestions(payload);
            store.commit('mutateSearchList', await result.data?.suggestions);
            store.commit('mutateIsSearchLoading', false);
        }

    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload
        },
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        },
        mutateAddList(state, payload) {
            state.list = state.list.concat(payload);
        },
        mutateIsSearchLoading(state, payload) {
            state.isSearchLoading = payload;
        },
        mutateSearchList(state, payload) {
            state.search = payload;
        }
    }
}
