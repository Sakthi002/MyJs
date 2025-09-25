<script setup>

    import { onMounted, onUnmounted, ref } from 'vue';
    import { onClickOutside } from '@vueuse/core'

    import { useNoteStore } from '@/stores/NoteStore';
    const noteStore = useNoteStore();

    const props = defineProps({
        modelValue: { type: Boolean },
        noteId: { type: String, default: ''}
    })

    const emit = defineEmits(['update:modelValue']);

    const deleteNote = () => {
        noteStore.deleteNote(props.noteId)
    }

    const closeModal = () => {

        emit('update:modelValue', false);
    }

    const handleClose = (event) => {
            
        if(event && event.key === 'Escape') {
            
            closeModal()
        }
    }

    const modalRef = ref(null);

    onClickOutside(modalRef, closeModal);

    onMounted(() => {

        document.addEventListener('keyup', handleClose)
    })

    onUnmounted(() => {

        document.removeEventListener('keyup', handleClose)
    })
</script>

<template>

    <div class="modal is-active">
        
        <div class="modal-background"></div>
        
        <div class="modal-card" ref="modalRef">
        
            <header class="modal-card-head">
        
                <p class="modal-card-title">Delete</p>
        
                <button class="delete" aria-label="close"  @click="closeModal"></button>
            </header>
        
            <section class="modal-card-body">
                Are you sure want to delete?
            </section>
        
            <footer class="modal-card-foot">
        
                <div class="buttons">
        
                    <button class="button is-danger" @click="deleteNote">Delete</button>
        
                    <button class="button" @click="closeModal">Cancel</button>
                </div>
            </footer>
        </div>
    </div>
</template>