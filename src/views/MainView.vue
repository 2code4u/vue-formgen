<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import ResultBoard from '@/components/ResultBoard.vue'

</script>

<template>
    <v-card class="ma-4">
    <v-toolbar color="primary" class="mb-4">
      <v-toolbar-title>
        Генератор форм
      </v-toolbar-title>
    </v-toolbar>

    <v-tabs>
      <v-tab>
        <router-link to="/first">Вариант 1</router-link>
      </v-tab>

      <v-tab>
        <router-link to="/second">Вариант 2</router-link>
      </v-tab>
    </v-tabs>

    <v-divider :thickness="2"></v-divider>

    <RouterView />

    <ResultBoard />
  </v-card>
</template>
