<script setup>
import SingleNote from '@/components/Notes/SingleNote.vue';
import { ref, watch, onMounted } from 'vue';

import { useCharacterLength } from '@/composables/useCharacterLength';

import { useNoteStore } from '@/stores/NoteStore';
import { storeToRefs } from 'pinia';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useAuthStore } from '@/stores/AuthStore';
const noteStore = useNoteStore();
const authStore = useNoteStore();

const { notes } = storeToRefs(noteStore);

const newNote = ref("");

const addEditNote = ref(null);

const addNew = () => {

    noteStore.addNote(newNote.value)

    newNote.value = "";

    addEditNote.value.focusTextArea();
}

useCharacterLength(newNote);

</script>

<template>

    <AddEditNote v-model:note="newNote" ref="addEditNote" class="has-background-danger">

        <template #control>

            <div class="control">

                <button class="button" @click.prevent="addNew" :disabled="!newNote">Add New</button>
            </div>
        </template>
    </AddEditNote>

    <template v-if="!noteStore.notesLoded">

        <progress class="progress is-large is-info" max="100"></progress>
    </template>
  
    <template v-else>

        <SingleNote v-for="note in notes" :key="note.id" :note="note"></SingleNote>
    </template>

    <div v-if="(noteStore.notesLoded && !notes.length)" class="has-text-centered is-size-4 py-6 has-text-grey-light is-family-monospace">
        No results found!!!
        </div>
</template>