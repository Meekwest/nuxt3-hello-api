<template>
  <div>
    <h1>{{ data.hello }}</h1>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/hello')
</script>