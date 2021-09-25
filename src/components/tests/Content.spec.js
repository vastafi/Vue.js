import Content from "../Content";
import {createLocalVue, shallowMount} from "@vue/test-utils";
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(VueRouter)

localVue.component('RouterView', {
    functional: true,
    render:() => 'test',
})

localVue.component('v-snackbar',{
    functional: true,
    render: ()=>'test'
})

describe('Content',()=> {
    it('should mount',()=> {
        const component = shallowMount(Content,{
           localVue
        });
        expect(component.element).toMatchSnapshot();
    })
})