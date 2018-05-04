<template>
    <div class="center-items container-fluid">
        <div class="card ">
            
            <div class="card-img-top bg-info"><i class="fas fa-cloud-download-alt-home fas fa-share-alt    "></i></div>
            <div class="card-body">
                <h4 class="card-title">Bem Vindo!</h4>
                <p class="card-text">{{msg_bem_vindo}}</p>
            </div>
        </div>
        <div class="separate"></div>
        <div class="card ">
            
            <div class="card-img-top bg-info"><i class="fas fa-cloud-download-alt-home fa-cloud-download-alt    "></i></div>
            <div class="card-body">
                <h4 class="card-title">Download</h4>
                <p class="card-text">{{msg_download}}</p>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg_bem_vindo:
                "Bem Vindo A Host Share, um lugar onde você poder usufruir de um serviço de compartilhamento de arquivos.",
            msg_download:
                "O download de Arquivos é bem simples, Clicando no botão download que fica na barra de menu superior, após entra na página de download, clique na aba do tipo do arquivo desejado, para baixar basta apenas clicar no botão azul em forma de nuvem, que esta do lado direito do nome do arqui e aguardar o download ser concluído."
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
