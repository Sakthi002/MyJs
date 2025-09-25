<script setup>
    
    import { ref } from 'vue';
    import { vAutoFocus } from '@/directives/vAutoFocus';

    const props = defineProps({
        note: { type: String, default: '' }
    })

    const emit = defineEmits(['update:note']);

    const textAreaRef = ref(null);

    const focusTextArea = () => {

        textAreaRef.value.focus();
    }

    defineExpose({
        focusTextArea
    })

</script>

<template>

    <div class="my-4 p-4 rounded">

        <div class="field">
        
            <label class="label has-text-white">Note</label>
            
            <div class="control">

                <textarea class="textarea" placeholder="Add new note.." :value="note"
                    @input="$emit('update:note', $event.target.value)" 
                    ref="textAreaRef" v-auto-focus :maxlength="100"></textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            
            <slot name="control"></slot>
        </div>
    </div>
</template>