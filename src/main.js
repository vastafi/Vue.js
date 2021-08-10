import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./routes";
import store from "./store";
import "./plugins/infiniteScroll"
Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
