export default{
    state: {
        item:{},
        isLoading:false,
    },
    getters: {
        getItem: ({item}) => item,
        getIsLoading: (state) => state.isLoading,
    },
    actions: {
       async loadItem(store, payload) {
           store.commit('mutateIsLoading', true);
           const item = await fetch(`/api/item?link=/ru/${payload}`);
           store.commit('mutateItem', await item.json());
           store.commit('mutateIsLoading', false);
       }
    },
    mutation: {
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        },
        mutateItem(state,payload){
            state.item = payload;
        }
    },
}