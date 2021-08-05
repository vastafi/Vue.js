export default {
    namespaced: true,
    state:{
        list:[

        ]

    },
    getters: {
        getList: (state) => state.list
    },
    actions:{
    async fetch({ commit }){
       const result = await fetch('/api')
        commit( 'mutateList', await result.json())
    }
    },
    mutations:{
        mutateList(state,payload){
            state.list = payload
                       }
    }
}