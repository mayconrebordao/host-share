<template>
    <footer class="footer">
        
        <nav class="navbar navbar-dark bg-primary navbar-expand-sm">
            <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <div class="dropup">
                            <label class="nav-link text-white  dropdown-toggle"  id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                        Personal
                                    </label>
                            <div class="dropdown-menu" aria-labelledby="triggerId">
                                <a class="dropdown-item" href="https://github.com/mayconrebordao" target="_blank"><i class="fab fa-github-alt"></i> Github</a>
                                <a class="dropdown-item" href="https://www.facebook.com/maycon.rebordao" target="_blank"><i class="fab fa-facebook    "></i> Facebook</a>
                            </div>
                        </div>
                    </li>
                    
                    <li class="nav-item active">
                        <a href="https://github.com/mayconrebordao/host-share" target="_blank" class="nav-link"> <i class="fas fa-code    "></i> Source Code</a> 
                        <!-- <div class="dropup">
                            <label class="nav-link  dropdown-toggle"  id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                        Source Code
                                    </label>
                            <div class="dropdown-menu" aria-labelledby="triggerId">
                                <a class="dropdown-item" href="https://github.com/mayconrebordao" target="_blank"><i class="fab fa-github-alt"></i> Github</a>
                                <a class="dropdown-item" href="https://www.facebook.com/maycon.rebordao" target="_blank"><i class="fab fa-facebook    "></i> Facebook</a>
                            </div>
                        </div> -->
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </footer>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>

<style>
.fa-github-alt {
    /* color: white; */
    /* font-size: 1.5em; */
}
.nav-link {
    cursor: pointer;
}
/* .footer {
    position: absolute;
    background-color: blue;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
} */
</style>