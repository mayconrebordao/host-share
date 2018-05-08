<template>
    <body >
        <header class="pos-f-t">
            <HeaderSite :loged="loged" @change="verify" @show-login="login" />
            

        </header>
            <main  role="main" class="center-items container main_content">
                <div class="row" >
                    <router-view   ></router-view>
                </div>
            </main>
            <Login @loged="logedin" :show="showlogin" @close-login="showlogin = false" >

            </Login >
                <!-- <button type="button" class="btn btn-primary" @click="showlogin = true">Teste</button> -->
            <!-- <Confirm  :show="showModal" :title="'Excluir?'" @close="showModal = false"  :file="modalContent" >
                <div class="container">
                    Deseja realmente excluir {{modalContent}}?
                </div>
            </Confirm> -->

            <div class="separate"></div>
        <FooterSite/>
    </body>
</template>

<script>
import Files from "@/components/FilesDownload";
import HeaderSite from "@/components/HeaderSite";
import FooterSite from "@/components/FooterSite";
import modal from "@/components/teste";
import DeleteFiles from "@/components/DeleteFiles";
import FileslDownload from "@/components/FilesDownload";
import FileslUpload from "./components/FilesUpload";
import Confirm from "./components/Confirm";
import Login from "./components/Login";
// require("../static/css/material.lime-orange.min.css");
// require("material-design-lite/material.min.css");
// require("material-design-lite/material.min.js");

// $("#navId a").click(e => {
//     e.preventDefault();
//     $(this).tab("show");
// });
// require("material-icons/material.icons.css");

export default {
    name: "App",
    data() {
        return {
            showModal: false,
            loged: false,
            uploading: false,
            modalContent: {},
            showlogin: false
        };
    },
    components: {
        // Files
        loged: false,
        HeaderSite,
        FooterSite,
        modal,
        DeleteFiles,
        Confirm,
        Login
    },
    children: {
        HeaderSite,
        FooterSite,
        DeleteFiles,
        FileslDownload,
        FileslUpload,
        Login
    },
    created() {
        // window.onbeforeunload = function(e) {
        //     var msg = "Antes de sair gostaria de responder a nossa pesquisa?";
        //     e = e || window.event;
        //     // Pro IE e Firefox anterior a versão 4
        //     if (e) {
        //         e.returnValue = msg;
        //     }
        //     // Para Safari e Chrome
        //     return msg;
        // };
    },
    mounted() {
        // window.onbeforeunload = function() {
        //     return "Are you sure you want to close the window?";
        // };
        // componentHandler.upgradeAllRegistered();
    },

    methods: {
        logedin(token) {
            (this.loged = true), (this.$loged = true);
        },
        login() {
            this.showlogin = true;
        },
        leaving() {
            alert("asdas");
        },
        verify() {
            if (this.uploading) {
                this.showModal = true;
            }
        },
        verifyupload(value) {
            this.uploading = value;
            console.log(value);
        },
        closeMenu() {
            console.log("teste");
        }
    },
    provide: {
        getid(id) {
            return document.getElementById(id);
        },
        // método que junta dois arrays sem repetir items, comparando o id dos mesmo para garantir esse requisito
        merge(array1, array2) {
            let tmp = [];
            for (let i = 0; i < array1.length; i++) {
                if (
                    array2.find(y => {
                        return y.id === array1[i].id;
                    })
                ) {
                    tmp.push(array1[i]);
                }
            }
            for (let i = 0; i < array2.length; i++) {
                if (
                    !array1.find(y => {
                        return y.id === array2[i].id;
                    })
                ) {
                    tmp.push(array2[i]);
                }
            }
            return this.sortByFilename(tmp);
        },
        // método para ordenar um array de objetos pelo valor de filename
        sortByFilename(array) {
            return array.sort((a, b) => {
                if (a.filename.toLowerCase() < b.filename.toLowerCase()) {
                    return -1;
                }
                if (a.filename.toLowerCase() > b.filename.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
        },
        // método responsavel por buscar no servidor a lista de arquivos de um unico tipo
        getFiles(index) {
            this.$http
                .get(this.getUrl() + "/files/list/" + this.types[index].type)
                .then(
                    ok => {
                        // success callback
                        if (ok) {
                            this.types[index].files = this.merge(
                                this.types[index].files,
                                ok.body
                            );
                        }
                    },
                    error => {
                        if (error) {
                            this.types[index].files = this.merge(
                                this.types[index].files,
                                ok.body
                            );
                        }
                        // error callback
                    }
                );
        },
        getUrl() {
            this.url = "";
            let aux = window.location.href.split("/");
            // console.log(aux);
            let path = aux[2].split(":");
            this.url = aux[0] + "//" + path[0] + ":55555";
            return this.url;
        },
        teste() {
            console.log(this.getUrl());
        }
    }
};
</script>

<style >
.separate {
    height: 1em;
    /* margin-bottom: 20px; */
}
.main_content {
    margin-top: 4rem !important;
}
.center-items {
    justify-content: center;
}

.link_title {
    text-decoration: none;
    color: #47595bff;
}
#second_menu a {
    color: #1f3032ff;
}
.mdl-layout-title {
    text-decoration: none;
}
/* Footer responsivo  inicio*/
html,
body {
    height: 100%;
    width: 100%;
}

body {
    display: table;
}

.container {
    height: auto;
}

.footer {
    display: table-row;
    height: 1px;
}
/* Footer responsivo fim*/

/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
