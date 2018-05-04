// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vueresource from 'vue-resource';
// import '../static/css/fontawesome-all.min.css'
import '../node_modules/@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '../node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
// import '../node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '../node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'



import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/material-icons/iconfont/material-icons.css"
import "../node_modules/popper.js/dist/esm/popper.min.js"
import "../node_modules/jquery/dist/jquery.min.js"


Vue.use(Vueresource);
// import material from "../";
// Vue.use(material);
// require("material-design-lite");

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
// process.argv.forEach(function(val, index, array) {
//   console.log(index + ": " + val);
// });
