export default {
    namespaced: true,
    state: {
        item: {},
        isLoading: false,
    },
    getters: {
        getItem: ({item}) => item,
        getIsLoading: (state) => state.isLoading,
    },
    actions: {
        async loadItem(store, payload) {
            store.commit('mutateLoading', true)
            let item = await fetch(`/api/item?link=/ru/${payload}`)
            store.commit('mutateItem', await item.json())
            store.commit('mutateLoading', false)
        }
    },
    mutations: {
        mutateLoading(state, payload) {
            state.isLoading = payload
        },
        mutateItem(state, payload) {
            state.item = payload
        }
    },
}