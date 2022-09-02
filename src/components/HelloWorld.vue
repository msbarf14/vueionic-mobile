<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <div class="space-y-3">
    <h1 class="text-2xl">{{ msg }}</h1>
    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
