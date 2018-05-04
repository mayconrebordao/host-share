<template>
  <nav class="navbar    navbar-expand-sm navbar-dark bg-dark fixed-top ">
    <router-link to="/" @click.native="closeMenu()" class=" navbar-brand">Host Share</router-link>
    <button id='togglerMenu' class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <router-link @click.native="closeMenu()" class="nav-link" to="/">
                    <i class="fas fa-home    "></i> Home
                </router-link>
            </li>
            <li class="nav-item">
                <router-link @click.native="closeMenu()" class="nav-link" to="/filesdownload">
                   <i class="fas fa-cloud-download-alt    "></i> Downloads
                </router-link>
            </li>
            <li class="nav-item">
                <router-link @click.native="closeMenu()" class="nav-link" to="/filesupload">
                   <i class="fas fa-cloud-upload-alt    "></i> Uploads
                </router-link>
            </li>
        
        </ul>
    </div>
    
</nav>

</template>
<script>
export default {
    data() {
        return {};
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
<style>

</style>
