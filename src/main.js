import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

/* example import */

// import {NAME} from ".importTest";

let TEST = require('./importTest');
console.log(TEST);

(function (test) {
    let TEST = require('./importTest');
    console.log(test + TEST.TEST);
})("Hello_")

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
