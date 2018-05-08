<template>
	<div class="container center-items" >
        <nav >
            <div class="nav nav-tabs nav-pills flex-column flex-sm-row  " id="nav-tab" role="tablist">
                <a @click="getFiles(index)" v-for="(item, index ) in types" :key="'div'+item.type" :id="'div'+item.type"  class="nav-item nav-link  bg-secundary tab_link" :class="{ 'active': active[index] }"   data-toggle="tab" :href="'#'+item.type" role="tab" :aria-controls="item.type" aria-selected="true">{{ item.type }}</a>
            </div>
        </nav>
        <div  class="tab-content" id="nav-tabContent">
            <div v-for="(item, index) in types" :key="item.type" :id="item.type"  class="tab-pane fade show " :class="{ 'active': active[index]}"   role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="list-group">
                    <label v-if="item.files.length === 0  ">
                        No {{ item.type }} for Download 
                    </label> 

                    <div   v-for="file in item.files" :key="file.name" class="list-group-item-action list-group-item-ligth  list-group-item d-flex justify-content-between align-items-center  "  >
                            <span class="file-list container">
                                <a :href="url+'/files/download/'+file.id">
                                    <span class=" badge badge-primary badge-pill material-icons">cloud_download</span>
                                </a>
                                {{ file.filename }}
                            </span>
                       <!-- <a >
                        </a>      --> 
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
// console.log(this.$router);
// console.log(clients.url);
// import DeleteConfirm from "@/components/DeleteConfirm";

export default {
    data() {
        return {
            url: "",
            active: [true, false, false, false, false, false],
            active2: false,
            teste: "olá!",
            types: [
                { type: "compress", files: [] },
                { type: "doc", files: [] },
                { type: "image", files: [] },
                { type: "music", files: [] },
                { type: "other", files: [] },
                { type: "video", files: [] }
            ],
            showModal: false
        };
    },
    inject: ["merge", "sortByFilename", "getFiles", "getUrl"],
    components: {
        // DeleteConfirm
    },
    mounted: () => {
        // console.log("teste");
        // function getBootstrapBreakpoint() {
        //     let w =
        //         window.innerWidth ||
        //         document.documentElement.clientWidth ||
        //         document.body.clientWidth;
        //     return w < 768 ? "xs" : w < 992 ? "sm" : w < 1200 ? "md" : "lg";
        // }
        // console.log(getBootstrapBreakpoint());
        // componentHandler.upgradeAllRegistered();
    },
    created() {
        // console.log("teste");
        this.getAll();
    },
    methods: {
        getAll() {
            for (let i = 0; i < this.types.length; i++) {
                this.getFiles(i);
            }
        },
        show() {
            // console.log(this.$route);
        },
        changeTab(index) {
            console.log(index);

            let btnType = [
                "divdoc",
                "divimage",
                "divvideo",
                "divcompress",
                "divmusic",
                "divother"
            ].sort();
            let divTypes = [
                "doc",
                "image",
                "video",
                "compress",
                "music",
                "other"
            ].sort();
            for (let i = 0; i < btnType.length; i++) {
                let elBtnType = document.getElementById(btnType[i]);
                let elDivType = document.getElementById(divTypes[i]);
                elBtnType.classList.remove("active");
                elDivType.classList.remove("active");
            }
            let elBtn = document.getElementById(btnType[index]);
            let elDiv = document.getElementById(divTypes[index]);
            elBtn.classList.add("active");
            elDiv.classList.add("active");
            console.log(this.$route);

            // console.log(this.$refs);
        }
    }
};
</script>
<style>
.file-list {
    word-break: break-all;
}

.card {
    width: 100%;
}
.lista a :link {
    display: none;
}
.link_lista {
    text-decoration: none;
}
a :hover {
    text-decoration: none;
}

.lista a:hover {
    color: red;
}
.lista a:visited {
    color: blue;
}

.tab_link {
    text-transform: uppercase;
}
</style>
