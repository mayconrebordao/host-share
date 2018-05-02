// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vueresource from 'vue-resource';
require("../node_modules/bootstrap/dist/js/bootstrap.min.js");
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../node_modules/material-icons/iconfont/material-icons.css");
require("../node_modules/popper.js/dist/esm/popper.min.js");
require("../node_modules/jquery/dist/jquery.min.js");

Vue.use(Vueresource);
// import material from "../";
// Vue.use(material);
// require("material-design-lite");

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
// process.argv.forEach(function(val, index, array) {
//   console.log(index + ": " + val);
// });
