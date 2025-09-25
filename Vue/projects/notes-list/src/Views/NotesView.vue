<script setup>
import SingleNote from '@/components/Notes/SingleNote.vue';
import { ref, watch } from 'vue';

import { useCharacterLength } from '@/composables/useCharacterLength';

import { useNoteStore } from '@/stores/NoteStore';
import { storeToRefs } from 'pinia';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
const noteStore = useNoteStore();

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
  
    <SingleNote v-for="note in notes" :key="note.id" :note="note"></SingleNote>
</template>