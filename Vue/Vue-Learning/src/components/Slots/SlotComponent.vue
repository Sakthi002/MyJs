<script setup>

import SlotBtn from './SlotBtn.vue';
import UserCreateCard from './UserCreateCard.vue';
import { ref } from 'vue';

let value = ref('hi from slot')
</script>

<template>

    <h1>Slot Parent Component</h1>

    <SlotBtn v-slot="slotProps">
        <span style="color: red;">Click</span> Here
        <span>{{ value }}</span>

        {{ slotProps }}
    </SlotBtn>

    <SlotBtn></SlotBtn>

    <UserCreateCard></UserCreateCard>
</template>