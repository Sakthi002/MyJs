<script setup>
import { ref, onBeforeMount, computed } from 'vue'

const users = ref([]);
const searchText = ref("");

const getUsers = async () => {

  let response = await fetch('https://jsonplaceholder.typicode.com/users');

  users.value = await response.json();
}

const filteredUsers = computed(() => {
  return users.value.filter(obj => obj.name.includes(searchText.value) || obj.phone.includes(searchText.value) || obj.address.city.includes(searchText.value) || obj.website.includes(searchText.value))
})

onBeforeMount(() => {

  getUsers();
})


</script>

<template>
  <h1>Users</h1>

  <input type="text" v-model="searchText">
  <div>
    <table>
      <thead>
        <tr>
        <th>Name</th>
        <th>City</th>
        <th>Phone</th>
        <th>Website</th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.name}}</td>
          <td>{{ user.address?.city || '--'}}</td>
          <td>{{ user.phone || '--'}}</td>
          <td>{{ user.website || '--'}}</td>
        </tr>

        <tr v-if="!filteredUsers.length">No results found.</tr>
      </tbody>
    </table>
  </div>
</template>

// name city phone website
