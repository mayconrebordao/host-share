import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import FilesDownload from "@/components/FilesDownload";
import FilesUpload  from "@/components/FilesUpload";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/filesdownload",
      name: "FilesDownload",
      component: FilesDownload
    },
    {
      path: "/filesupload",
      name: "FilesUpload",
      component: FilesUpload
    }
  ]
});
