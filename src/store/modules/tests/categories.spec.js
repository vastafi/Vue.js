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
    it('should have default value an empty string', function () {
        expect(store.getters['categories/getList']).toStrictEqual([])
        expect(store.getters['categories/getIsLoading']).toBeFalsy()
    })
    it("if categories is loading", () => {
        testFunction.mockReturnValue('categories is loading');
        store.commit('categories/mutateLoading', true);
        expect(store.getters['categories/getIsLoading']).toBeTruthy();
        expect(testFunction).toBeCalled();
    })
})