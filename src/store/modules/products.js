import {encode} from 'js-base64'
export default {
    namespaced: true,
    state: {
        list:[],
        isLoading: false,
    },
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading,
    },
    actions: {
        async loadProducts(store, {link, page}) {
            store.commit('mutateIsLoading', true)
            let appender = link.includes('?') ? '&' : '?'
            let fullLink = encode(`${link}${appender}page=${page}`);
            const result = await fetch(`/api/products?linkBase64=${fullLink}`);

            if (page > 1) {
                store.commit('mutateAddList', await result.json());
            } else {
                store.commit('mutateList', await result.json());
            }
            store.commit('mutateIsLoading', false);
        },
    },
    mutations: {
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        },
        mutateList(state, payload) {
            state.list = payload;
        },
        mutateAddList(state, payload) {
            state.list = state.list.concat(payload);
        },
    }
}

