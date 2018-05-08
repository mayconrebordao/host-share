<template>
<nav class="navbar    navbar-expand-sm navbar-dark bg-dark fixed-top ">
    <router-link to="/" @click.native="closeMenu()" class=" navbar-brand text-primary">Host Share</router-link>
    <button id='togglerMenu' @click.native="showMenu()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item text-primary" v-for="item in items" :key="item.name" v-if="item.show">
                <router-link @click.native="closeMenu()" class="nav-link text-primary" :to="item.link">
                    <i :class="item.icon"></i> {{ item.name }}
                </router-link>
            </li>
            <!-- <li @click="login()" class="nav-item text-primary" >
                <a  class="nav-link text-primary">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    Login
                </a>
               
            </li> -->
        </ul>
    </div>
</nav>
</template>

<script>
// import HeaderItems from "@/components/HeaderItem";
export default {
    data() {
        return {
            items: [
                {
                    name: "Home",
                    link: "/",
                    icon: "fas fa-home",
                    show: true
                },
                {
                    name: "Downlaods",
                    link: "/files/download",
                    icon: "fas fa-cloud-download-alt",
                    show: true
                },
                {
                    name: "Uploads",
                    link: "/files/upload",
                    icon: "fas fa-cloud-upload-alt",
                    show: true
                },
                {
                    name: "Delete",
                    link: "/files/delete",
                    icon: "fa fa-trash",
                    show: false
                }
            ]
        };
    },
    components: {},
    props: ["loged"],
    mounted() {
        this.items[3].show = this.loged;
    },
    methods: {
        login() {
            this.$emit("show-login");
            this.closeMenu();
        },
        closeMenu() {
            // console.log("close menu");

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
        },
        showMenu() {
            document
                .getElementById("togglerMenu")
                .setAttribute("aria-expanded", "true");
            document
                .getElementById("togglerMenu")
                .classList.remove("collapsed");
            document.getElementById("navbarNav").classList.add("show");
            // console.log("show menu");
        }
    }
};
</script>

<style>

</style>
