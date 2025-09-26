<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
const authStore = useAuthStore();

const showNavbarOnMobile = ref(false);

const logOut = () => {
    authStore.logOut();
}

</script>

<template>

    <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
  
        <div class="container px-2">

            <div class="navbar-brand">
  
            <RouterLink class="navbar-item is-size-4 is-family-monospace" :to="{ name: 'notes' }">NotesList</RouterLink>

                <a role="button" class="navbar-burger" :class="{'is-active' : showNavbarOnMobile}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                    @click.prevent="showNavbarOnMobile = !showNavbarOnMobile">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active' : showNavbarOnMobile}">

                <div class="navbar-start" v-if="authStore.user.uid">

                    <button class="button is-info is-small mt-3 ml-3" style="height: 30px;" @click="logOut">Logout {{ authStore.user.email }}</button>
                </div>

                <div class="navbar-end">
                
                    <RouterLink class="navbar-item" :to="{ name: 'notes' }" :active-class="'is-active'">Notes</RouterLink>

                    <RouterLink class="navbar-item" :to="{ name: 'stats' }" :active-class="'is-active'">Stats</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
@media(max-width : 1023px) {
    .navbar-menu {
        position: absolute;
        width: 100%;
    }
}
</style>