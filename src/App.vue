<template>
  <AppHeader />
  <main class="px-11 pt-20">
    <v-tabs v-model="selectedTab" color="primary">
      <v-tab v-for="(tab, index) in TABS" :value="index">
        {{ tab.title }}
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="selectedTab">
      <v-tabs-window-item :value="0">
        <FirstSection />
        <TableSection />
      </v-tabs-window-item>
      <v-tabs-window-item :value="1" class="w-full h-full">
        <div class="w-full h-[50vh] flex items-center text-center justify-center">
          <div>
            <h1 class="font-bold md:text-3xl sm:text-base pb-5">Prueba técnica realizada por</h1>
            <h2 class="font-thin md:text-5xl sm:text-sl pb-5">Angel Hernández Tapia</h2>
            <h3 class="font-thin md:text-3xl sm:text-base">01/09/2024</h3>
          </div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </main>
</template>
<script setup lang="ts">
import FirstSection from './components/FirstSection.vue'
import TableSection from './components/TableSection.vue'
import AppHeader from './components/AppHeader.vue'
import { TABS } from './data'
import { ref } from 'vue'
const selectedTab = ref(0)
</script>

<style></style>
