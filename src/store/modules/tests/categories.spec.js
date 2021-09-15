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
     it('should change to true', () => {
        store.commit('categories/mutateLoading', true);
        expect(store.getters['categories/getIsLoading']).toBeTruthy();
    })
})