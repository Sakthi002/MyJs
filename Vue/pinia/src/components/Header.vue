<script setup>

</script>

<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        
        <div class="container-fluid">
            
            <router-link class="navbar-brand" to="/">PINIA</router-link>
           
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                
                    <li class="nav-item">
                
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                
                    <li class="nav-item">
                
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>

                    <li class="nav-item">
                
                        <router-link class="nav-link" to="/posts">Posts</router-link>
                    </li>

                    <li class="nav-item">
                
                        <router-link class="nav-link" to="/counter">Counter</router-link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
</template>