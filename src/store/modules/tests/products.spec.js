import products from '../products';
import Vuex from "vuex";
import Vue from "vue";
import {testFunction} from "../../../api/999";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        products
    }
})
jest.mock('../../../api/999', () => ({
    testFunction: jest.fn()
}))
describe("products", () => {
    it("should have default value false", () => {
        expect(store.getters['products/getIsSearchLoading']).toBe(false);
    })
    it("if products is loading", () => {
        testFunction.mockReturnValue('products is loading');
        store.commit('products/mutateIsSearchLoading', true);
        expect(store.getters['products/getIsSearchLoading']).toBeTruthy();
        expect(testFunction).toBeCalled();
    })
})