export default{
    state:{
        item:{},
        isLoading:false,
    },
    getters:{
        getItem:(item) => item,
    },
    actions:{
       async loadItem(store, payload){
           store.commit('mutateIsLoading', true);
           let result = await fetch(`/api/item?query=${payload}`);
           store.commit('mutateItem', await result.json());
           store.commit('mutateIsLoading', false);
       }
    },
    mutation:{
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        },
        mutateItem(state,payload){
            state.item = payload;
        }
    },
}