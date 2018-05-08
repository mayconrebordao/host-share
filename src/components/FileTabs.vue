<template>
  
</template>
<script>
export default {
    data() {
        return {
            names: []
        };
    },
    props: ["types"],
    beforeCreate() {
        this.names = this.types;
    }
};
</script>
<style>

</style>