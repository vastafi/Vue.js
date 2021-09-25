import {createLocalVue,shallowMount} from "@vue/test-utils";
import AppBar from "../AppBar"
import Vuex from 'vuex'
import Vuetify from 'vuetify';
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);
localVue.use(VueRouter);
const createElement = (element) => localVue.component(element,{
    functional:true,
    // eslint-disable-next-line no-unused-vars
    function(createElement, hack){
        return createElement('div')
    }
})

localVue.component('VIcon',createElement("VIcon"));
localVue.component('v-app-bar',{})
localVue.component('v-container',{})
localVue.component('v-toolbar-items',{})

const store = new Vuex.Store({
    getters:{
        'products/getSearchSuggestions': jest.fn(),
        'products/getIsSearchLoading': jest.fn(),
        'settings/getIsDarkModeEnabled':jest.fn()
    }
})
//
// describe('AppBar', () => {
//     it('should match snapshot',()=> {
//         const component = mount(AppBar,{
//             store,
//             localVue,
//             vuetify: new Vuetify({
//                 icons:{
//                     iconfont:'fa'
//                 }
//             })
//         });
//         expect(component.element).toMatchSnapshot();
//     })
// })

describe('AppBar', () => {
    it('should match snapshot',()=> {
        const component = shallowMount(AppBar,{
            store,
            localVue,
            vuetify: new Vuetify({
                icons:{
                    iconfont:'fa'
                }
            })
        });
        expect(component.element).toMatchSnapshot();
    })
})