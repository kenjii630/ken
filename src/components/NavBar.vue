<template>
  <nav class="navbar" :style="[`height: ${height}`, `background-color: ${color}`]">
   <slot></slot>
   <nav>
      <ul class=" flex">
        <li v-for="item in menuItems" :key="item.id">
          <router-link :to="item.url">{{ item.label }}</router-link>
        </li>
      </ul>
   </nav>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  position: {
    type: String,
    default: 'left',
  },
  height: {
    type: String,
    default: '60px',
  },
  color: {
    type: String,
    default: '#f0f0f0',
  },
})
const menuItems = ref([
  { id: 1, label: 'Home', url: '/' },
  { id: 2, label: 'About', url: '/about' },
  { id: 3, label: 'Contact', url: '/contact' },
  { id: 4, label: 'Blog', url: '/Card' },
]);
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}


</style>
