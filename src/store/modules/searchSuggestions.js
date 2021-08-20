export default {
    namespaced: true,
    state: {
        search: {},
        isSearchSuggestionsLoading: false,
    },
    getters: {
        getSuggestions: (state) => state.search?.suggestions ?? [],
        getIsSearchSuggestionsLoading: (state) => state.isSearchSuggestionsLoading,
    },
    actions: {
        async showSuggestions(store, payload) {
            store.commit('mutateIsSearchSuggestionsLoading', true)
            let suggestions = await fetch(`/api/suggestions?query=${payload}`)
            store.commit('mutateSearchSuggestions', await suggestions.json())
            store.commit('mutateIsSearchSuggestionsLoading', false)
        },
    },
    mutations: {
        mutateSearchSuggestions(state, payload) {
            state.search = payload
        },
        mutateIsSearchSuggestionsLoading(state, payload) {
            state.isSearchSuggestionsLoading = payload
        },
    },
}