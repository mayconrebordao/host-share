<template>
<div class="center-items container-fluid">
   
    <div class="card ">

        <div class="card-img-top bg-info"><i class="fas fa-cloud-download-alt-home fas fa-share-alt    "></i></div>
        <div class="card-body">
            <h4 class="card-title">Bem Vindo!</h4>
            <p class="card-text">{{msg_bem_vindo}}</p>
        </div>
    </div>
    <!-- <div class="separate"></div> -->
    

</div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "",
            msg_bem_vindo:
                "Bem Vindo A Host Share, um lugar onde você poder usufruir de um serviço de compartilhamento de arquivos."
        };
    }
};
</script>

<style>
.center-items {
    justify-content: center;
}

.fa-cloud-download-alt-home {
    font-size: 8em;
    color: white;
}

.separate {
    height: 1em;
}

/* a {
  color: #42b983;
} */
</style>
