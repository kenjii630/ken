<template>
  <button
    v-if="showBtn"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition animate-bounce"
  >
  </button>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
const showBtn = ref(false)
const handleScroll = () => {
  showBtn.value = window.scrollY > 200
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeMount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
