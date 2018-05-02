<template>
    <div >
        <header>

            <nav class="navbar   navbar-expand-lg navbar-dark bg-dark fixed-top ">

                <router-link to="/" class="navbar-brand">Host Share</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/">
                                Home<span class="sr-only">(current)</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/filesdownload">
                                Downloads
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/filesupload">
                                Uploads
                            </router-link>
                        </li>
                    
                    </ul>
                </div>
                
            </nav>

        </header>
            <main  role="main" class="center-items container main_content">
                <div class="row">
                    <router-view></router-view>
                </div>
            </main>   

    
    </div>
</template>

<script>
import Files from "@/components/FilesDownload";
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
    },
    children: {
        Files
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
        }
    }
};
</script>

<style >
.main_content{
    margin-top: 4rem!important;
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
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
