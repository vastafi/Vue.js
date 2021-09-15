import item from '../item';
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
       item
    }
})
jest.mock('../../../api/999', () => {
    return ({
        testFunction: jest.fn(),
        fetchItem: jest.fn()
    });
})
describe('item', () => {
    it('should have default value an empty object', function () {
        expect(store.getters['item/getIsLoading']).toBeFalsy()
        expect(store.getters['item/getItem']).toEqual({})
    });

    it('should change to true', () => {
        store.commit('item/mutateIsLoading', true);
        expect(store.getters['item/getIsLoading']).toBeTruthy();
    });

    it('should receive an object and isLoading should be false', async () => {
        await store.dispatch('item/loadItem', '71654315').then(() => {
            expect(store.getters['item/getItem'].title).toBe('Opel Zafira');
            expect(store.getters['item/getIsLoading']).toBeFalsy();
        });
    });

})