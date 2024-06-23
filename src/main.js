import Vue from 'vue';
import App from './App.vue';
import './assets/css/plugins.css';
import './assets/css/colors.css';
import './assets/css/style.css';
import $ from 'jquery';
import 'jquery.ripples';

// Attach jQuery to the window object
window.$ = window.jQuery = $;

// Import your custom scripts after jQuery is attached to the window object
import './assets/js/plugins.js';
import './assets/js/init.js';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
