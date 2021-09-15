import categories from '../categories';
import Vuex from "vuex";
import Vue from "vue";

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
    it('should have default value an empty string', function () {
        expect(store.getters['categories/getList']).toStrictEqual([])
        expect(store.getters['categories/getIsLoading']).toBeFalsy()
    });

     it('should change to true', () => {
        store.commit('categories/mutateLoading', true);
        expect(store.getters['categories/getIsLoading']).toBeTruthy();
    });

    it('should receive an array of categories and isLoading should be false', async () => {
        await store.dispatch('categories/fetchCategories', ). then(() => {
            expect(store.getters['categories/getList']).toHaveLength(533);
            expect(store.getters['categories/getList'][0].name).toBe('Транспорт');
            expect(store.getters['categories/getIsLoading']).toBeFalsy();
        });
    });
})