<template>
<div class="justify-center container-fluid">
    <div class="card justify-content-center ">
        <div class="card-img-top justify-content-center container-fluid text-warning bg-info">
            <i class="fas fa-search"></i>
        </div>
        <div class="card-body">
            <div class="card-title">
            <h4 >{{ info .host}}</h4>
            <h6 >{{ info.info}} </h6>

            </div>
            <p class="card-text">{{ msg }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            info: {
                host: "",
                info: "",
                msg: ""
            },
            msg:
                "Por favor confira se todas as letras do nome da url estão corretas."
        };
    },
    created() {
        let cat = (array, p, q) => {
            let text = "";
            for (let i = 0; i < array.length; i++) {
                if (p !== array[i]) {
                    text += p + array[i] + q;
                }
            }
            return text;
        };
        // console.log(window.location.href.split("/").slice(3));
        let href = window.location.href.split("/").slice(3);
        let aux = document.title.split("-");
        let info = cat(href, "/", "");

        this.info.host = "Recurso não encontrado";
        // console.log(aux.slice(1));

        this.info.info =
            "Rota: " +
            info +
            "." +
            cat(aux.slice(1), "", "-").substring(
                0,
                cat(aux.slice(1), "", "-").length - 1
            );
        // console.log(document.title);
    }
};
</script>

<style>
.card {
    word-break: break-all;
}
.fa-search {
    font-size: 20em;
}
.justify-content-center {
    justify-content: center;
}
</style>
