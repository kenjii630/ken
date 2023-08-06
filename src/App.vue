<template>
  <!-- <div class="layout">
    <NavBar />
    <div class="main-content">
      <div class="sub-navbar">
        <SubNavBar position="left" />
      </div>
      <div class="content">
        <FamilyButton />
        
      </div>
    </div>
  </div> -->
  <div class="flex justify-center">
    <RouterView />
  </div>
</template>

<script setup>
import FamilyButton from '@/views/FamilyButton.vue'
import NavBar from '@/components/NavBar.vue';
import SubNavBar from '@/components/SubNavBar.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex-grow: 1;
}

.sub-navbar {
  width: 200px; /* Adjust the width of the SubNavBar */
  min-width: 200px; /* Add a minimum width to prevent collapse */
  background-color: #f0f0f0;
  padding: 10px;
}

.content {
  flex-grow: 1;
  padding: 10px;
}

/* Style for the NavBar and SubNavBar components */

/* Media query for smaller screens */
@media screen and (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  .sub-navbar {
    width: 100%; /* Make the SubNavBar full width for smaller screens */
  }
}
</style>
