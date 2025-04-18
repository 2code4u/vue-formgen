<script setup lang="ts">
  import { computed } from 'vue'
  import { useBoardStore } from '@/stores/board'

  const boardStore = useBoardStore()

  const list = computed(() => {
    return boardStore.list
  })
</script>

<template>
  <v-data-table
    :items="list"
    hide-default-footer
  />
</template>