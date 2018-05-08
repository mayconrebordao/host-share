<template>
<transition name="modal">

    <div class="modal-mask" v-show="show" >
        <div class="modal-container modal-content" >
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> {{title}} </h5>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="close()">Cancelar</button>

                <button class="modal-default-button btn btn-danger"  @click="confirm()" >
                    Excluir
                </button>
            </div>
        </div>


        <!-- <div class="">

            
            <div class="modal-footer text-right">

            </div>
        </div> -->
    </div>
</transition>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ["show", "file", "title"],
    methods: {
        teste() {
            console.log("teste");
        },
        close: function() {
            // console.log("merda");

            // console.log(this.file);

            // Some save logic goes here...

            this.$emit("close");
            // this.$emit("delete-file", id);
        },
        confirm: function() {
            // this.file
            this.$emit("confirm", this.file);
            this.$emit("close");
        }
    }
};
</script>

<style>
* {
    box-sizing: border-box;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
}

.modal-container {
    width: 300px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.text-right {
    text-align: right;
}

.form-label {
    display: block;
    margin-bottom: 1em;
}

.form-label > .form-control {
    margin-top: 0.5em;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
