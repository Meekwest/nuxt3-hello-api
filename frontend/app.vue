<template>
  <div>
    <h1>{{ data }}</h1>
  </div>
</template>

<script setup>
const { data } = await useFetch('http://127.0.0.1:1337/api/hello');
</script>