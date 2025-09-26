import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { collection, getDocs, onSnapshot, doc, setDoc, updateDoc, deleteDoc, addDoc, query, orderBy } from "firebase/firestore";
import { db } from "@/js/firebase";
import { useAuthStore } from "./AuthStore";

export const useNoteStore = defineStore('noteStore', () => {

    const authStore = useAuthStore();

    let noteCollectionRef;
    let notesListQuery;

    const notesLoded = ref(false);
    let notesSnapshot = null;

    const notes = ref([]);

    const getNoteContentById = computed(() => {
        return (id) => {
            return notes.value.find(note => note.id === id).content
        }
    })

    const getNotes = async () => {

        noteCollectionRef = collection(db, "users", authStore.user.uid, 'notes');
        
        notesListQuery = query(noteCollectionRef, orderBy("date", "desc"));
        
        // const querySnapshot = await getDocs(collection(db, "notes"));
        
        // querySnapshot.forEach((doc) => {
        //     let note = {
        //         id: doc.id,
        //         content: doc.data().content
        //     }
        //     notes.value.push(note);
        // });

        notesSnapshot = onSnapshot(notesListQuery, (querySnapshot) => {
            let rNotes = [];
            notesLoded.value = false;
            querySnapshot.forEach((doc) => {
                let note = {
                    id: doc.id,
                    content: doc.data().content,
                    date: doc.data().date
                }
                rNotes.push(note);
            });
            notes.value = rNotes;
            notesLoded.value = true;
        });
    }

    const addNote = async (noteContent) => {

        // let uniqueId = new Date().getTime().toString();

        // const note = {
        //     id : uniqueId.toString(),
        //     content: noteContent
        // }

        // notes.value.unshift(note);

         await addDoc(noteCollectionRef, { content : noteContent, date: Date.now() });
    }

    const deleteNote = async (noteId) => {

        // let idx = notes.value.findIndex(obj => obj.id === noteId);
    
        // notes.value.splice(idx,1);

        await deleteDoc(doc(noteCollectionRef, noteId));
    }

    const updateNote = async (id, content) => {

        // let index = notes.value.findIndex(note => note.id === id);
        
        // notes.value[index].content = content;

        await updateDoc(doc(noteCollectionRef, id), {
            content: content
        });
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

    const clearNotes = () => {
        notes.value = [];
        if(notesSnapshot) notesSnapshot()
    }

    return {
        notes,
        getNoteContentById,
        addNote,
        deleteNote,
        updateNote,
        totalNotesCount,
        totalCharactersCount,
        getNotes,
        notesLoded,
        clearNotes
    }
})