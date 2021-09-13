import categories from '../categories';
import Vuex from "vuex";
import Vue from "vue";
import {testFunction} from "../../../api/999";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        categories
    }
})
jest.mock('../../../api/999', () => ({
    testFunction: jest.fn()
}))
describe("categories", () => {
    it("should have default value false", () => {
        expect(store.getters['categories/getIsLoading']).toBe(false);
    })
    it("if categories is loading", () => {
        testFunction.mockReturnValue('categories is loading');
        store.commit('categories/mutateLoading', true);
        expect(store.getters['categories/getIsLoading']).toBeTruthy();
        expect(testFunction).toBeCalled();
    })
})