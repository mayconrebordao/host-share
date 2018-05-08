<template>
<transition name="login">
    <div class="modal-mask" v-show="show" >
        <div class="login-container card container">
            <form id="form"  class="form-singin">
                <div class="card-body">
                    <h4 class="card-title">Login</h4>
                    <div class="form-label-group">
                        <input  name="email" type="email" id="email" class="form-control" placeholder="Email address" required autofocus>
                        <label for="email">Email address</label>
                    </div>

                    <div class="form-label-group">
                        <input  name="password" type="password" id="password" class="form-control" placeholder="Password" required>
                        <label for="password">Password</label>
                    </div>
                    <div class="">
                        <button  class="card-btn card-link btn btn-success float-right"  @click.stop.prevent="confirm()">Logar</button>
                        <button  class="card-btn card-link btn btn-warning float-right" @click.stop.prevent="close()">Cancelar</button>
                    </div>
                </div>
            </form>
            <div id="msg">
            </div>
        </div>
    </div>

</transition>
</template>

<script>
// import validator from "validator";
export default {
    data() {
        return {};
    },
    mounted() {
        // console.log("teste");
        // console.log(this.$validator.isEmail("sdas"));
    },
    props: ["show"],
    inject: ["getid", "getUrl"],
    methods: {
        formreset() {
            document.getElementById("form").reset();
        },
        close() {
            this.$emit("close-login");
            this.formreset();
            this.getid("msg").innerHTML = "";
        },
        confirm() {
            let email = this.getid("email").value;
            let password = this.getid("password").value;
            // console.log(password.value, email.value);

            if (email.length == 0 || password.length === 0) {
                this.getid("msg").innerHTML =
                    '<div class="alert alert-warning alert-dismissible fade show" role="alert"> <strong>Error</strong> Preencha todos os campos. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> ';
            } else {
                // alert(email);
                if (this.$validator.isEmail(email)) {
                    let form = new FormData();
                    form.append("email", email);
                    form.append("password", password);
                    this.$http
                        .post(this.getUrl() + ":55555/register", form)
                        .then(
                            ok => {
                                if (ok) {
                                    this.$emit("loged", ok.token);
                                    this.close();
                                }
                            },
                            error => {
                                if (error) {
                                    this.getid("msg").innerHTML =
                                        '<div class="alert alert-warning alert-dismissible fade show" role="alert"> <strong>Error</strong> Email ou senha errados. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> ';
                                }
                            }
                        );
                    // this.close();
                } else {
                    this.getid("msg").innerHTML =
                        '<div class="alert alert-warning alert-dismissible fade show" role="alert"> <strong>Error</strong> Formato de email invalido, por favor digite no formato válido. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> ';
                }
            }
        }
    }
};
</script>

<style>
* {
    box-sizing: border-box;
}

.card-btn {
    /* margin-top: 1%; */
    margin-bottom: 2%;
    margin-left: 2%;
    /* margin-bottom: 2%; */
}
.login-container {
    transition: all 0.2s ease;
    margin-top: 5em;
    /* margin-left: 2em; */
    /* margin-right: 200em; */
    max-width: 90%;
    /* margin-bottom: 2em; */
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

.form-signin {
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: 0 auto;
}

.form-label-group {
    position: relative;
    margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
    padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group > label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0; /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
    color: transparent;
}

.form-label-group input:-ms-input-placeholder {
    color: transparent;
}

.form-label-group input::-ms-input-placeholder {
    color: transparent;
}

.form-label-group input::-moz-placeholder {
    color: transparent;
}

.form-label-group input::placeholder {
    color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
    padding-top: calc(
        var(--input-padding-y) + var(--input-padding-y) * (2 / 3)
    );
    padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
    padding-top: calc(var(--input-padding-y) / 3);
    padding-bottom: calc(var(--input-padding-y) / 3);
    font-size: 12px;
    color: #777;
}

:root {
    --input-padding-x: 0.75rem;
    --input-padding-y: 0.75rem;
}
</style>
