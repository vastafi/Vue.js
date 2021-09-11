import {testFunction} from "../../api/999";

export default {
    namespaced: true,
    state: {
        isDarkModeEnabled: false
    },
    getters: {
        getIsDarkModeEnabled: (state) => state.isDarkModeEnabled
    },
    actions: {

    },
    mutations: {
        mutateIsDarkModeEnabled(state, payload) {
            state.isDarkModeEnabled = payload;
            console.log(testFunction());
        }
    }
}