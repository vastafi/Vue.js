import productHistory from "../productHistory";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {productHistory}
})
jest.mock('../../../api/999', () => ({
    testFunction: jest.fn()
}))

describe('productHistory', () => {
    it('should have default value an empty object', function () {

    });
})