<template>
<div class="collapse justify-content-end navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item text-primary" v-for="item in items" :key="item.name">
            <router-link @click.stop.prevent="close_Menu()" class="nav-link" :to="item.link">
                <i :class="item.icon"></i> {{ item.name }}
            </router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ["items"],
    methods: {
        close_Menu() {
            this.$emit("close-Menu");
        }
    }
};
</script>

<style>

</style>
