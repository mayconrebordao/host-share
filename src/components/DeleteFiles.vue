<template>
<div class="container center-items">
    
    <nav>
        <div class="nav nav-tabs nav-pills flex-column flex-sm-row " id="nav-tab" role="tablist">
            <a v-for="(item, index ) in types" @click="getFiles(index)" :key="'div'+item.type" :id="'div'+item.type" class="nav-item nav-link  tab_link" :class="{ 'active': active[index] }" data-toggle="tab" :href="'#'+item.type" role="tab" :aria-controls="item.type" aria-selected="true">{{ item.type }}</a>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div v-for="(item, index) in types" :key="item.tye" :id="item.type" class="tab-pane fade show " :class="{ 'active': active[index]}" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="list-group">
                <label v-if="item.files.length === 0  ">
                    No {{ item.type }} for Download 
                </label>
                
                <div v-for="file in item.files" :key="file.name" class="list-group-item-action list-group-item-ligth  list-group-item d-flex justify-content-between align-items-center  ">
                   
                    <span class="file-list container">
                        <a  @click="showModal = true,  setdatamodal(file) " class="btn-delete"  data-toggle="modal" data-target="#deleteConfirm" >
                            <span class=" badge badge-danger badge-pill material-icons">delete</span>
                    </a>
                    {{ file.filename }}
                    </span>
                </div>
            </div>
        </div>
    </div>
    <DeleteConfirm @keyup.enter="showModal = false" :show="showModal" :title="'Excluir?'" @close="showModal = false" @confirm="deletFile" :file="modalContent" >
        <div class="container">
            Deseja realmente excluir {{modalContent.filename}}?
        </div>
    </DeleteConfirm>
</div>
</template>

<script>
import DeleteConfirm from "@/components/Confirm";
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
            showModal: false,
            icon: "fa fa-trash",
            modalContent: {}
        };
    },
    inject: ["merge", "sortByFilename", "getFiles", "getUrl"],
    components: {
        DeleteConfirm
    },
    mounted: () => {
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
        // this.show();
        // console.clear();
        // console.log();
        this.types.sort();
        this.getAll();
    },
    methods: {
        getmodaldata() {
            return this.modalContent;
        },
        setdatamodal(data) {
            this.modalContent = data;
        },
        getAll() {
            let tmp = [
                { name: "c" },
                { name: "b" },
                { name: "r" },
                { name: "a" },
                { name: "f" },
                { name: "e" },
                { name: "i" }
            ];

            for (let i = 0; i < this.types.length; i++) {
                this.getFiles(i);
            }
        },
        getIndex(type) {
            let types = ["compress", "doc", "image", "music", "other", "video"];
            for (let i = 0; i < types.length; i++) {
                if (type === types[i]) {
                    return i;
                }
            }
        },
        removeFile(file) {
            this.types[this.getIndex(file.type)].files = this.types[
                this.getIndex(file.type)
            ].files.filter(filterfile => {
                return file !== filterfile;
            });
        },
        deletFile(file) {
            this.$http.delete(this.getUrl() + "/files/delete/" + file.id).then(
                ok => {
                    if (ok) {
                        this.removeFile(file);
                        // console.log(ok.status);
                        // this.types.log(ok);
                    }
                },
                error => {
                    if (error.status === 404) {
                        this.removeFile(file);
                    } else {
                        this.getFiles(this.getIndex(file.type));
                    }
                    console.log(error.body);
                }
            );
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
.btn-delete :hover {
    cursor: pointer;
}
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
