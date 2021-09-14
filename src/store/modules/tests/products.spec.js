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
        expect(store.getters['products/getList']).toBe(state.list);
        expect(store.getters['products/getIsSearchLoading']).toBe(state.isSearchLoading);
        expect(store.getters['products/getSearchSuggestions']).toBe(state.search);
       expect(store.getters['products/getIsLoading']).toBe(state.isLoading);
    });
    it('should load a list of products', function () {
        const payload = {
            link: '/ru/list/transport/cars',
            page: 1
        }

        return store.dispatch('products/loadProducts', payload).then(() => {
            expect(store.getters['products/getList'].length).toBeGreaterThan(0)
        })
    });
    it('should load a list of products from the page 3', function () {
        const payload = {
            link: '/ru/list/transport/cars',
            page: 3
        }

        return store.dispatch('products/loadProducts', payload).then(() => {
            expect(store.getters['products/getList'].length).toBeGreaterThan(0)
        })
    });

    it('should load suggestions', function () {
        const exampleInput = 'audi'

        return store.dispatch('products/searchProducts', exampleInput).then(() => {
            expect(store.getters['products/getSearchSuggestions'].length).toBeGreaterThan(0)
        })
    })
});

