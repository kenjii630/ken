<template>
  <!-- UI for card -->
  <div v-for="(user, inx) in 15" :keys="inx" class="m-4">
    <div class="w-80 h-64 rounded-md">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
// Your component logic goes here
const props = defineProps({
  users: {
    type: Array
  }
})
</script>
