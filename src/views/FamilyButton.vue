<template>
  <div>
    <kBtn varaint="text"  class="mr-4"> Button </kBtn>
    <kBtn varaint="contain"  class="mr-4"> Button </kBtn>
    <kBtn varaint="outline"  class="mr-4"> Button </kBtn>
    <kBtn varaint="outline"  round="10px" class="mr-4"> Button </kBtn>
    <kBtn varaint="contain" class="mr-4" :isDisabled="true"> Button </kBtn>
    <kBtn varaint="text"  loading> Button </kBtn>
  </div>
</template>
<script setup>
import kBtn from '@/components/Button.vue'
import { ref } from 'vue'
</script>
