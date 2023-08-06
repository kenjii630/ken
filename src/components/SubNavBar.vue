<template>
  <div :class="navbarClass" class="contain" :style="[`width: ${width}`, `height: ${height}`]">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// const props = defineProps(['position']) // Define the 'position' prop
const props = defineProps({
  position: {
    type: String,
    default: 'left'
  },
  width: {
    type: String,
    default: '200px'
  },
  height: {
    type: String,
    default: '100%'
  }
})

const menuItems = ref([
  { id: 1, label: 'Home', url: '/' },
  { id: 2, label: 'About', url: '/about' },
  { id: 3, label: 'Contact', url: '/contact' }
])

// Determine the CSS class based on the 'position' prop
const navbarClass = computed(() => ({
  'left-navbar': props.position === 'left',
  'right-navbar': props.position === 'right'
}))
</script>

<style scoped>
/* Remove the width property to make the navbar fit the content */
.left-navbar {
    left: 0;
}
.right-navbar {
  right: 0;
}
.contain {
    background-color: #f0f0f0;
    padding: 10px;
    position: absolute;
}
</style>
