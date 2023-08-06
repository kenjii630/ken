<template>
  <div>
    <!-- Your view template goes here -->
    <div class="flex justify-center">
      <BaseInput class="my-4" placeholder="Search..." :items="cities" />
    </div>
    <div class="respone-sreen">
      <BaseCard :users="users">
        <template #header>

        </template>
        <template #body>
          <Skeleton>
            <div class="flex-1 space-y-6 py-1">
              <div class="bg-slate-700 rounded h-12"></div>
            </div>
          </Skeleton>
        </template>
      </BaseCard>
      <BackToTopBtn class="" />
    </div>
  </div>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue'
import { cardService } from '@/services/card-service'
import { ref, onMounted } from 'vue'
import BackToTopBtn from '@/components/BackToTopBtn.vue'
import BaseInput from '@/components/BaseInput.vue'
import Skeleton from '../components/Skeleton.vue'

const users = ref([])
const cities = [
  { name: 'New York', value: 'ny' },
  { name: 'Los Angeles', value: 'la' },
  { name: 'Chicago', value: 'chicago' }
  // Add more cities here
]
// async function fetchData() {
//   try {
//     const res = await cardService.get('users')
//     users.value = res.data
//   } catch (error) {
//     console.error(error)
//   }
// }
// onMounted(fetchData)
</script>
<style>
.respone-sreen {
  display: grid;
}
@media (min-width: 1000px) {
  .respone-sreen {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media (max-width: 868px) {
  .respone-sreen {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .respone-sreen {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
