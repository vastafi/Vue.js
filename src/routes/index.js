import Products from "../components/pages/Products";
import Contacts from "../components/pages/Contacts";
import About from "../components/pages/About";
import Account from "../components/pages/Account";
import Cart from "../components/pages/Cart";
import Settings from "../components/pages/Settings";

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '', component: Products },
    { path: '/products', component: Products },
    { path: '/contacts', component: Contacts },
    { path: '/about', component: About },
    { path: '/cart', component: Cart },
    { path: '/about', component: Settings },
    { path: '/account', component: Account }
]

const router = new VueRouter({
    routes,
    mode:"history"
})

export default router;
