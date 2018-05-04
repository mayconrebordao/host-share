<template>
    <body >
        <header class="pos-f-t">
            <HeaderSite/>

        </header>
            <main  role="main" class="center-items container main_content">
                <div class="row">
                    <router-view></router-view>
                </div>
            </main>
        <FooterSite/>
    </body>
</template>

<script>
import Files from "@/components/FilesDownload";
import HeaderSite from "@/components/HeaderSite";
import FooterSite from "@/components/FooterSite";
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
    components: {
        // Files
        HeaderSite,
        FooterSite
    },
    children: {
        Files,
        HeaderSite,
        FooterSite
    },
    mounted: function() {
        // componentHandler.upgradeAllRegistered();
    },
    methods: {
        closeSideMenu() {
            document
                .getElementById("second_menu")
                .classList.remove("is-visible");
            document
                .getElementById("second_menu")
                .setAttribute("aria-data", "false");
            for (
                var i = 0;
                i <
                document.getElementsByClassName("mdl-layout__obfuscator")
                    .length;
                i++
            ) {
                document
                    .getElementsByClassName("mdl-layout__obfuscator")
                    [i].classList.remove("is-visible");
                // alert(document.getElementsByClassName('mdl-layout__obfuscator')[i]);
            }
            // alert(i)
        },
        closeMenu() {
            // $('#navbarNav').toggle('hide');
            // $('.navbar-collapse').collapse('hide');
            // alert('teste')
            // console.log(', ...args')
            // $('#togglerMenu').button('click');
            // setTimeout(function() {
            //     // body

            // }, 500)
            document.getElementById("togglerMenu").classList.add("collapsed");
            document
                .getElementById("togglerMenu")
                .setAttribute("aria-expanded", "false");
            document.getElementById("navbarNav").classList.remove("show");
        }
    }
};
</script>

<style >
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
