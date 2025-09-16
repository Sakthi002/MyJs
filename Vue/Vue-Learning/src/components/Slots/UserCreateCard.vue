<script setup>

import CardLayout from './CardLayout.vue';

</script>

<template>

    <CardLayout>
        <template #header="headerProps">
            <h1>Header</h1>

            {{ headerProps }}
        </template>
        <div>
            <p>This is main content</p>
            <p>Slots are very useful for content distribution</p>
        </div>
        <template #footer="footerProps">
            <p>Copyright sakthi.dev 2025</p>
            {{ footerProps }}
        </template>
    </CardLayout>

</template>