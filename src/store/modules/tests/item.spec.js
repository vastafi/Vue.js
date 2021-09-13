import item from '../item';
import Vuex from "vuex";
import Vue from "vue";
import {testFunction} from "../../../api/999";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
       item
    }
})
jest.mock('../../../api/999', () => ({
    testFunction: jest.fn()
}))
describe("item", () => {
    it("should have default value false", () => {
        expect(store.getters['item/getIsLoading']).toBe(false);
    })
    it("if item is loading", () => {
        testFunction.mockReturnValue('items loading');
        store.commit('item/mutateIsLoading', true);
        expect(store.getters['item/getIsLoading']).toBeTruthy();
        expect(testFunction).toBeCalled();
    })
})