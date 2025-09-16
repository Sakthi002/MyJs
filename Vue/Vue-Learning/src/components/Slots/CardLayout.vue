<script setup>

let footerMessage = "I am a footer"
let headerMessage = "I am a header"
</script>

<template>

    <div>
        
        <header>
            <slot name="header" :message="headerMessage"></slot>
        </header>
        <nav>Navigation</nav>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer" :message="footerMessage"></slot>
        </footer>
    </div>
</template>