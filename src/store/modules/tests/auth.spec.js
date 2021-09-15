import auth from '../auth';
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth
    }
})
jest.mock('../../../api/999', () => ({
    testFunction: jest.fn()
}))
describe('auth', () => {
    it('should have default value false', () => {
        expect(store.getters['auth/getIsAuthorised']).toBeFalsy()
    });

    it('should have default value - empty string', function () {
        expect(store.getters['auth/getUsername']).toMatch('')
    });

    it('should change isAuthorised to true and username to test', function () {
        const exampleUsername = 'test-username';
        store.dispatch('auth/login', {username: exampleUsername})
        expect(store.getters['auth/getUsername']).toMatch(exampleUsername)
        expect(store.getters['auth/getIsAuthorised']).toBeTruthy()
    });

    it('should change isAuthorised to false and username to null', function () {
        store.dispatch('auth/logout')
        expect(store.getters['auth/getUsername']).toBe(null)
        expect(store.getters['auth/getIsAuthorised']).toBeFalsy()
    });
})