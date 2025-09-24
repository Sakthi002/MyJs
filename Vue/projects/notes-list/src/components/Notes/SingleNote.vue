<script setup>
import { computed } from 'vue';


    const props = defineProps({

        note: { type: Object, required: true }
    })

    const charLength = computed(() => {

        let len = props.note.content.length;

        let desc = len > 1 ? 'characters' : 'character';

        return `${len} ${desc}` 
    })

    const emit = defineEmits(['onDelete']);

    const deleteNote = (id) => {

        emit('onDelete', id);
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
        
            <a href="#" class="card-footer-item">Edit</a>
        
            <a href="javascript:;" class="card-footer-item" @click.prevent="deleteNote(note.id)">Delete</a>
        </footer>
    </div>
</template>