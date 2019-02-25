import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
import 'popper.js';
import './assets/app.scss';
import {fb}   from './firebase'
window.$=window.jQuery=jQuery;

Vue.component('Navbar',require('./components/Navbar.vue').default)
Vue.component('Hero',require('./components/Hero.vue').default)
Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function(user) {

    if (!app) {
        new Vue({
            router,
            render: h => h(App)
        }).$mount("#app");

    }
});