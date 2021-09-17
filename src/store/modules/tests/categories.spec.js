import categories from '../categories';
import Vuex from "vuex";
import Vue from "vue";
import {state} from "../categories";
import {fetchCategories} from "../../../api/999";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        categories
    }
})
jest.mock('../../../api/999', () => ({
      fetchCategories: jest.fn()

}))
describe("categories", () => {
    beforeEach(() => {
        fetchCategories.mockReturnValue({
            data: ['testCategories']
        })
    });
    it('should have default value', () => {
        expect(store.getters['categories/getIsLoading']).toBe(state.isLoading);
        expect(store.getters['categories/getList']).toBe(state.list);
    });

    it('should change to true', () => {
        store.commit('categories/mutateLoading', true);
        expect(store.getters['categories/getIsLoading']).toBeTruthy();
    });

    it('should fetch categories', async () => {
        const categories = store.dispatch('categories/fetchCategories');
        expect(fetchCategories).toBeCalled();
        expect(store.getters['categories/getIsLoading']).toBeTruthy();
        await categories;
        expect(store.getters['categories/getIsLoading']).toBeFalsy();
        expect(store.getters['categories/getList']).toEqual(['testCategories']);
    })
})