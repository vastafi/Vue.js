import VueRouter from 'vue-router'
import Vue from 'vue'
import Dashbord from "../layouts/Dashbord";
import dashboardRoutes from "./dashboard";
import Auth from "../layouts/Auth";
import authRoutes from "./auth";


Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/dashboard'},
    { path: '/dashboard', name: 'products',component: Dashbord, children: dashboardRoutes },
    { path: '/auth', name: 'auth',component: Auth, children: authRoutes }

];

const router = new VueRouter({
    routes,
    mode:"history"
})

export default router;
