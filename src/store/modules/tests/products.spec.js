import products from '../products';
import Vuex from "vuex";
import Vue from "vue";
import {state} from "../products";
import {fetchProducts} from "../../../api/999";
import {encode} from "js-base64";

Vue.use(Vuex);

const mutateItem = jest.fn()
const store = new Vuex.Store({
    modules: {
        products,
        productHistory:{
            namespaced: true,
            mutation:{
                 mutateItem
            }
        }
    }
})

jest.mock('../../../api/999', () => ({
    fetchProducts: jest.fn(),
    fetchSuggestions: jest.fn()
}))

describe("products", function() {
    beforeEach(()=>
        fetchProducts.mockReturnValue({
            data:['testProduct']
        }));

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

    it('should fetch the first page', async () => {
        const action = store.dispatch('products/loadProducts', {
            link: '/ru/list/transport/cars',
            page: 1
        })
        expect(fetchProducts).toBeCalledWith(encode('/ru/list/transport/cars?page=1'))
        expect(store.getters['products/getIsLoading']).toBeTruthy();
        await action;
        expect (store.getters['products/getIsLoading'].toBeFalsy());
        expect (store.getters['products/getList'].toEqual(['testProduct']))
    })

    it('should receive an array of products and isLoading to be false when page is 2',async ()=> {
           store.commit ('products/mutateList',['firstProduct'])
            await store.dispatch('products/loadProducts', {
                link: '/ru/list/transport/cars?test=test',
                page: 2
            })
            expect(fetchProducts).toBeCalledWith(encode('/ru/list/transport/cars?test=test&page=2'))
            expect (store.getters['products/getList'].toEqual(['firstProduct']))
        })

    it('should receive an array of search suggestions and isSearchLoading to be false', async () => {
        await store.dispatch('products/searchProducts', 'mercedes').then(() => {
            expect(store.getters['products/getSearchSuggestions']).toHaveLength(10);
            expect(store.getters['products/getSearchSuggestions'][0].title).toContain('mercedes');
            expect(store.getters['products/getIsSearchLoading']).toBeFalsy();
        })
    });

});


