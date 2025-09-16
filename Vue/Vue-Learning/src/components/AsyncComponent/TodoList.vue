<script setup>
import { ref, onMounted } from 'vue'

const todos = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    if (!res.ok) throw new Error('Network error')
    todos.value = await res.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <h2>Todo List</h2>
    <p v-if="loading">Fetching todos...</p>
    <p v-else-if="error" style="color:red;">Error: {{ error }}</p>
    <ul v-else>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.completed" disabled />
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
