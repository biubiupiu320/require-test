<template>
  <button @click="enterFullscreen">enterFullscreen</button>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: "VButton",
  methods: {
    enterFullscreen() {
      screenfull.request()
    }
  }
}
</script>

<style scoped>

</style>