<script setup>
    
    import { useNoteStore } from '@/stores/NoteStore';
    import { computed, reactive } from 'vue';
import DeleteNoteModal from './DeleteNoteModal.vue';

    const noteStore = useNoteStore();

    const props = defineProps({

        note: { type: Object, required: true }
    })

    const charLength = computed(() => {

        let len = props.note.content.length;

        let desc = len > 1 ? 'characters' : 'character';

        return `${len} ${desc}` 
    })

    const modals = reactive({
        deleteModal: false
    })

    const handleDelete = () => {

        modals.deleteModal = true;
    }
</script>

<template>

    <div class="card">

        <div class="card-content">
            
            <div class="content">

                {{ note.content }}

                <div class="has-text-right has-text-grey-light">
                
                    <small>{{ charLength }}</small>
                </div>
            </div>
        </div>
        
        <footer class="card-footer">
        
            <RouterLink :to="{ name: 'edit-note', params: { id : note.id }}" class="card-footer-item">Edit</RouterLink>
        
            <a href="javascript:;" class="card-footer-item" @click.prevent="handleDelete">Delete</a>
        </footer>

        <DeleteNoteModal v-if="modals.deleteModal" v-model="modals.deleteModal" :noteId="note.id"></DeleteNoteModal>
    </div>
</template>