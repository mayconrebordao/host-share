<template>

	<div class="container  center-items">
		<div class="card container-fluid ">
			<form id="up"  method="post" enctype="mult-part/form-data" >
					
				<div class="card-header bg-primary text-light">
					Upload de Arquivos
				</div>
				<div class="card-body ">
					<div class="card-text">
					
								<p>
									{{msg}}
								</p>
								<input id="files" type="file" name="files" multiple class="btn btn-outline-dark container" >
								<div id="p" class="progress" hidden="">
									<div id="progress" class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" ></div>
								</div>

					</div>
					
					<div class="container">
						<button id="btnsend" @click.prevent.stop="Upload()" type="submit" class="card-link btn-send float-right btn btn-success  ">ENVIAR <span class="badge badge-pill material-icons">cloud_upload</span></button>
					</div>
				</div>
				<!-- <div class="card-body ">
				</div>
					<div class="card-footer"></div>					 -->
			</form>
					<div id="msg">
						
					</div>
		</div>		
	</div>
</template>

<script>
export default {

  name: 'Files',

  data () {
	return {
		url: '',
		msg: 'É possível fazer o upload de multiplos arquivos e de diversos tipos, limite máximo de 200 arquivos por vez.'

	}
  },
  beforeRouteLeave(to, from, next) {
        // called when the route that renders this component is about to
        // be navigated away from.
        // has access to `this` component instance.
		console.log("change");
		// alert('teste')
		next()
    },
  mouted(){

		// document.addEventListener('beforeunload', this.handler)	
  	// window.onbeforeunload = this.leaving;
  	// console.log(this.$route);
	// document.getElementById('p').setAttribute('hidden', '');
	// document.getElementById('progress').setAttribute('class', 'hide');
  }
  ,
  methods:{
  	
  	leaving(){
  		alert('You leaving page')
  	},
	Upload(){




		// window.onbeforeunload = this.leaving;

		this.url = '';
        let aux = window.location.href.split('/');
        // console.log(aux[0]);
        let path = aux[2].split(':');
        this.url = aux[0]+'//'+path[0]+':55555';

		let progresso = function(progress){
			let aux = (process.loaded/ process.total)*100;
			console.log(aux);
		}
		let formdata = new FormData();
		let files = document.getElementById("files");
		if (files.files.length === 0) {
			document.getElementById('msg').innerHTML+= '<div class="alert alert-warning alert-dismissible fade show" role="alert"> <strong>Error</strong> selecione algum arquivo para ser enviado antes de clicar em "enviar". <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> ';
			setTimeout(function() {
				// body
				document.getElementById('msg').innerHTML = "";
			},3000 );
		}
		else{
			this.$emit('uploading', true)
			document.getElementById('p').removeAttribute('hidden', '');
			document.getElementById('btnsend').setAttribute('disabled','');

			for (let i = 0; i < files.files.length; i++) {
				formdata.append('files', files.files[i]); 
				// console.log(files.files[i]);
			}
			this.$http.post(this.url+'/files/upload', formdata,{
				progress(e) {
						if (e.lengthComputable) {
							document.getElementById('progress').setAttribute('style', 'width: '+(e.loaded / e.total * 100)+'%;');
							// document.getElementById('progress').style.width = ""+(e.loaded / e.total * 100)+'%;';



							document.getElementById('progress').innerHTML=(e.loaded / e.total * 100).toFixed(2)+"%";
							// console.log(e.loaded / e.total * 100);
						}
				  }
			} ).then(ok => {
				if (ok) {
					this.$emit('uploading',false)
					setTimeout(function(args) {
					

					document.getElementById('msg').innerHTML+= '<div class="alert alert-success alert-dismissible fade show" role="alert"> <strong>Arquivo(s)</strong> enviados com sucesso. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> ';
					 setTimeout(function(args) {
						// body
						// document.getElementById('p').style.hidden="";
						document.getElementById('p').setAttribute('hidden', '');

						document.getElementById('progress').style.width = "0%";//('style', 'width: 0%;');
					}, 1000);
					console.log('sucesso');
					document.getElementById('up').reset();
					setTimeout(function() {
						// body
					document.getElementById('msg').innerHTML = "";

					},3000 );



					document.getElementById('btnsend').removeAttribute('disabled','');

					}, 500)

					
				}

				document.getElementById('progress').display = "none";


				// console.log(ok);
				// success callback
			}, erro => {
				if (erro) {

					document.getElementById('msg').innerHTML+= '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Erro</strong> arquivos não enviados. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> ';
					setTimeout(function() {
						// body
						document.getElementById('btnsend').removeAttribute('disabled','');

					document.getElementById('msg').innerHTML = "";
					},3000 );



					console.log('erro');
					
				}
				// error callback
			});
		}

	},
  }

}
</script>
<style lang="css" scoped>
.btn-send{
	margin-bottom: 1em;
	margin-top: 1em;
}

.hide{
	/* width:  */
	display: none;
}

.show{
	display: true;
}

.sen-btn{
	/* padding-bottom: -30px;
	margin-bottom: -10px; */
}
.file-icon{
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
	
	max-height: 32px;
	height: 32px;
	min-width: 32px;
	width: 32px; 
}
.mdl-button--file input {
  cursor: pointer;
  height: 100%;
  right: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 300px;
  z-index: 4;
}
.mdl-textfield--file .mdl-textfield__input {
  box-sizing: border-box;
  width: calc(100% - 32px);
}
.mdl-textfield--file .mdl-button--file {
  right: 0;

}
.center-items{
	justify-content: center;
}
</style>
