<script setup>

import { vAutoFocus } from '@/directives/vAutoFocus';

import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
const { totalNotesCount, totalCharactersCount } = noteStore;

import { useCharacterLength } from '@/composables/useCharacterLength';

import { ref } from 'vue';
const feedback = ref('');

useCharacterLength(feedback, 10);

</script>

<template>

    <div class="mt-3">

        <table class="table is-fullwidth">

            <thead>

                <tr>

                    <th>Stat</th>
                
                    <th>Value</th>
                </tr>
            </thead>

            <tbody>

                <tr>

                    <td>Total Notes Count</td>
                    
                    <td>{{ totalNotesCount }}</td>
                </tr>

                 <tr>

                    <td>Total Characters Count</td>
                    
                    <td>{{ totalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>

        <input type="text" placeholder="Enter feedback..." class="input" v-auto-focus v-model="feedback"></input>
    </div>
</template>