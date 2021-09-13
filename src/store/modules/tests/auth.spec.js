import auth from '../auth';
import Vuex from "vuex";
import Vue from "vue";
import {testFunction} from "../../../api/999";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth
    }
})
jest.mock('../../../api/999', () => ({
    testFunction: jest.fn()
}))
describe("auth", () => {
    it("should have default value false", () => {
        expect(store.getters['auth/getIsAuthorised']).toBe(false);
    })
    it("user id authorised", () => {
        testFunction.mockReturnValue('user id authorised');
        store.commit('auth/mutateIsAuthorised', true);
        expect(store.getters['auth/getIsAuthorised']).toBeTruthy();
        expect(testFunction).toBeCalled();
    })
})