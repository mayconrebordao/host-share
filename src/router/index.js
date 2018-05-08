import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import FilesDownload from "@/components/FilesDownload";
import FilesUpload from "@/components/FilesUpload";
import DeleteFiles from "@/components/DeleteFiles";
import NotFound from "@/components/404NotFound";
import Ajuda from '@/components/Ajuda.vue';

Vue.use(Router);
let basehostname = "Host Share - ";

const router = new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      meta: {
        title: basehostname + "Home"
      }
    },
    {
      path: "/files/download",
      name: "FilesDownload",
      component: FilesDownload,
      meta: {
        title: basehostname + "Download de Arquivos"
      }
    },
    {
      path: "/files/upload",
      name: "FilesUpload",
      component: FilesUpload,
      meta: {
        title: basehostname + "Upload de Arquivos"
      }
    },
    {
      path: "/files/delete",
      name: "DeleteFiles",
      component: DeleteFiles,
      beforeEnter: (to, from, next) => {
        // ...
        console.log('/deletes-files');
        if (!this.$loged) {
          console.log('/teste');
          console.log(from)

          next(from.path)

        } else {

          next()
        }


      },

      meta: {
        title: basehostname + "Deletar Arquivos"
      }
    }, {
      path: "/ajuda",
      name: "Ajuda",
      component: Ajuda,

      meta: {
        title: basehostname + "Turotial"
      },

    }, {


      path: "/*",
      name: "404",
      component: NotFound,
      meta: {
        title: basehostname + "404 - Recurso Não Encontrado"

      }
    }

  ]
});


router.beforeEach((to, from, next) => {
  document.title = to.meta.title,
    next()

})

// if (from.name == 'DeleteFiles') {
//   if (!this.$loged) {
//     console.log('/teste');
//     next('/')

//   } else {

//     next()
//   }

// } else {

//   next()
// }

export default router;
