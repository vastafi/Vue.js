import Products from "../components/pages/Products";
import Contacts from "../components/pages/Contacts";
import About from "../components/pages/About";
import Account from "../components/pages/Account";
import Cart from "../components/pages/Cart";
import Settings from "../components/pages/Settings";
import Item from "../components/Item";

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/products'},
    { path: '/products', name:'products', component: Products, props: (router) => ({link: router.query.link})},
    { path: '/contacts', name:'contacts', component: Contacts },
    { path: '/about',name:'about',  component: About },
    { path: '/cart', name:'cart', component: Cart },
    { path: '/settings',name:'settings',  component: Settings },
    { path: '/account',name:'account',  component: Account },
    { path: '/item/:id', name:'item', component: Item, props: true},

]

const router = new VueRouter({
    routes,
    mode:"history"
})

export default router;
