import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./routes";
import store from "./store";
import "./plugins/infiniteScroll"
import './guards';
import './interceptors';
import MyComponent from "./MyComponent";

Vue.config.productionTip = false
Vue.component('MyComponent', MyComponent)
new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
