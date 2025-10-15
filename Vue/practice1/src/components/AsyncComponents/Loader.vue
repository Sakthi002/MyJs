<template>
  <div class="spinner">
    <div class="loader"></div>
    <p>Loading user profile...</p>
  </div>
</template>

<style scoped>
.spinner {
  text-align: center;
  padding: 40px;
  color: #555;
}
.loader {
  width: 30px;
  height: 30px;
  /* margin: 0 auto 10px; */
  border: 4px solid #ccc;
  border-top: 4px solid #42b983;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
