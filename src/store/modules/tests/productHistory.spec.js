import Vue from "vue";
import Vuex from "vuex";
import productHistory from "../productHistory";
import {state} from "../productHistory";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        productHistory
    }
})

describe('productHistory', () => {
    it('should have default value', () => {
        expect(store.getters['productHistory/getItem']).toBe(state.items);
    })
    it('should register items prices', () => {
        store.commit('productHistory/mutateItem', [{
            link: 'testProductHistory',
            price: 20
        }])
        expect(store.getters['productHistory/getItem']).toEqual({
            'testProductHistory': {
                price: [20]
            }
        });
    })
    it('should register price change', () => {
        store.commit('productHistory/mutateItem', [{
            link: 'testProductHistory',
            price: 40
        }])
        expect(store.getters['productHistory/getItem']).toEqual({
            'testProductHistory': {
                price: [20, 40]
            }
        });
    })
    it('should not register same price', () => {
        store.commit('productHistory/mutateItem', [{
            link: 'testProductHistory',
            price: 40
        }])
        expect(store.getters['productHistory/getItem']).toEqual({
            'testProductHistory': {
                price: [20, 40]
            }
        });
    })
})