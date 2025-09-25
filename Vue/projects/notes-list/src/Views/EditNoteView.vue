<script setup>

import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { ref } from 'vue';

import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();

import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
    id: { type: String, required: true }
})

const noteContent = ref(noteStore.getNoteContentById(props.id));

const updateNote = () => {
    
    noteStore.updateNote(props.id, noteContent.value);

    router.push({ name : 'notes' })
}
</script>

<template>

    <AddEditNote v-model:note="noteContent" ref="addEditNote" class="has-background-link">

        <template #control>

            <div class="control">

                <button class="button is-primary mr-2" @click.prevent="$router.back()">Cancel</button>

                <button class="button" @click.prevent="updateNote" :disabled="!noteContent">Update Note</button>
            </div>
        </template>
    </AddEditNote>
</template>