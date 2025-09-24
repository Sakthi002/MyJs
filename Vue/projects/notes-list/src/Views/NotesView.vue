<script setup>
import SingleNote from '@/components/Notes/SingleNote.vue';
import { ref } from 'vue';


const notes = ref([
    { id: 'id1', content: 'First note' },
    { id: 'id2', content: 'Second note' }
]);

const newNote = ref("");

const noteRef = ref(null);

const addNew = () => {

    let uniqueId = new Date().getTime();

    const note = {
        id : uniqueId.toString(),
        content: newNote.value
    }

    notes.value.unshift(note);

    newNote.value = "";

    noteRef.value.focus();
}

const doDelete = (id) => {
    
    let idx = notes.value.findIndex(obj => obj.id === id);
    
    notes.value.splice(idx,1);
    
}
</script>

<template>

    <div class="has-background-danger my-4 p-4 rounded">

        <div class="field">
        
            <label class="label">note</label>
            
            <div class="control">

                <textarea class="textarea" placeholder="Add new note.." v-model="newNote" ref="noteRef"></textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            
            <div class="control">

                <button class="button is-link" @click.prevent="addNew" :disabled="!newNote">Add New</button>
            </div>
        </div>
    </div>
  
    <SingleNote v-for="note in notes" :key="note.id" :note="note" @onDelete="doDelete"></SingleNote>
</template>