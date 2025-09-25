import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useNoteStore = defineStore('noteStore', () => {

    const notes = ref([
        { id: 'id1', content: 'First note' },
        { id: 'id2', content: 'Second note' }
    ]);

    const getNoteContentById = computed(() => {
        return (id) => {
            return notes.value.find(note => note.id === id).content
        }
    })

    const addNote = (noteContent) => {

        let uniqueId = new Date().getTime();

        const note = {
            id : uniqueId.toString(),
            content: noteContent
        }

        notes.value.unshift(note);
    }

    const deleteNote = (noteId) => {

        let idx = notes.value.findIndex(obj => obj.id === noteId);
    
        notes.value.splice(idx,1);
    }

    const updateNote = (id, content) => {

        let index = notes.value.findIndex(note => note.id === id);
        
        notes.value[index].content = content;
    }

    const totalNotesCount = computed(() => {

        return notes.value.length;
    })

    const totalCharactersCount = computed(() => {

        let count = 0;

        for(let note of notes.value) {

            count += note.content.length;
        }

        return count;
    })

    return {
        notes,
        getNoteContentById,
        addNote,
        deleteNote,
        updateNote,
        totalNotesCount,
        totalCharactersCount
    }
})