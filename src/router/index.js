import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import FilesDownload from "@/components/FilesDownload";
import FilesUpload  from "@/components/FilesUpload";

Vue.use(Router);
let basehostname = "Host Share - ";

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      meta: {
        title: basehostname+"Home"
      }
    },
    {
      path: "/filesdownload",
      name: "FilesDownload",
      component: FilesDownload,
      meta: {
        title: basehostname+"Download de Arquivos"
      }
    },
    {
      path: "/filesupload",
      name: "FilesUpload",
      component: FilesUpload,
      meta:{
        title: basehostname+"Upload de Arquivos"
      }
    }
  ]
});


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
