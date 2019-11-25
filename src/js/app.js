// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';


import store from '../store';
import routes1 from './routes.js';
// Import App Component
import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
new Vue({
  el: '#app',
  framework7: {
    root: '#app',
    // Map routes
    routes: routes1
  },
  render: (h) => h(App),
  store,
  // Register App Component
  components: {
    app: App
  },
});
