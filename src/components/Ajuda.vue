<template>
<div class="justify-center container">
    <div v-for="item in helps" :key="item.title" class="card ">
        <div class="card-img-top bg-info"><i :class="item.icon"></i></div>
        <div class="card-body">
            <h4 class="card-title">{{ item.title}}</h4>
            <p class="card-text">{{ item.msg }}</p>
        </div>
    </div>
</div>  
</template>
<script>
export default {
    data() {
        return {
            helps: [
                {
                    icon:
                        "fas fa-cloud-download-alt-home fa-cloud-download-alt",
                    title: "Download",
                    msg:
                        "O download de Arquivos é bem simples, Clicando no botão download que fica na barra de menu superior, após entra na página de download, clique na aba do tipo do arquivo desejado, para baixar basta apenas clicar no botão azul em forma de nuvem, que esta do lado direito do nome do arquivo e aguardar o download ser concluído."
                }
            ]
        };
    }
};
</script>
<style lang="css">

</style>
