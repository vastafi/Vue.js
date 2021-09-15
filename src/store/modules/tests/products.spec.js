import products from '../products';
import Vuex from "vuex";
import Vue from "vue";
import {state} from "../products";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        products
    }
})

jest.mock('../../../api/999', () => ({
    testFunction: jest.fn()
}))

describe("products", function() {
    it("should have all getters", function() {
        expect(store.getters['products/getList']).toEqual(state.list);
        expect(store.getters['products/getIsSearchLoading']).toEqual(state.isSearchLoading);
        expect(store.getters['products/getSearchSuggestions']).toEqual(state.search);
       expect(store.getters['products/getIsLoading']).toEqual(state.isLoading);
    });
    it('should change to true', () => {
        store.commit('products/mutateIsLoading', true);
        expect(store.getters['products/getIsLoading']).toBeTruthy();
        store.commit('products/mutateIsSearchLoading', true);
        expect(store.getters['products/getIsSearchLoading']).toBeTruthy();
    });
})

