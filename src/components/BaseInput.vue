<template>
  <div>
    <input
      v-if="type === 'simple'"
      v-model="input"
      id="input1"
      class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      :type="inputType"
      autofocus
      :placeholder="placeholder"
    />

    <select v-if="type === 'select'" v-model="input" placeholder="asd">
      <!-- <option value="" disabled >Select</option> -->
      <option v-for="(item, inx) in items" :key="inx" :value="item?.value">{{ item?.name }}</option>
    </select>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'simple'
  },
  placeholder: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => ['nothing']
  },
  inputType: {
    type: String,
    default: 'text'
  }
})
const input = ref('')
</script>
