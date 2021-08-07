export default {
    namespaced: true,
    state:{
        list:[

        ],
        isLoading: false
    },
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading
    },
    actions:{
    async fetch({ commit }){
        commit('mutateLoading', true);
       const result = await fetch('/api/categories');
        commit( 'mutateList', await result.json());
        commit('mutateLoading', false);
    }
    },
    mutations:{
        mutateList(state,payload){
            state.list = payload
                       }
    }
}