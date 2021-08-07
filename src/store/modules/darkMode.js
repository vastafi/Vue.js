export default {
    namespaced: true,
    state: {
        isDarkModeEnabled: false
    },
    getters: {
        getIsDarkModeEnabled: (state) => state.isDarkModeEnabled
    },
    actions: {
        changeMode(store, payload) {
            store.commit('mutateIsDarkModeEnabled', payload);
        }
    },
    mutations: {
        mutateIsDarkModeEnabled(state, payload) {
            state.isDarkModeEnabled = payload;
        }
    }
}