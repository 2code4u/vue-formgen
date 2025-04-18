<template>
  <v-row class="ma-4 justify-space-between">
    <GenForm 
      v-model="formValue1"
      :options="myOptions1"
      @save="saveVariantOne"
      @cancel="cancelVariantOne"
      >
      <v-progress-linear
        max-width="100"
        color="yellow-darken-2"
        indeterminate
      />
    </GenForm>

    <GenForm 
      v-model="formValue2"
      :options="myOptions2"
      @save="saveVariantTwo"
      @cancel="cancelVariantTwo"
      >
    </GenForm>
  </v-row>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useBoardStore } from '@/stores/board'
  import GenForm from '@/components/GenForm.vue'

  const boardStore = useBoardStore()

  const formValue1 = ref<boolean>(false)
  const formValue2 = ref<string>('')

  const myOptions1 = {
    type: 'v-checkbox',
    attrs: {
      'label': 'My checkbox',
      'variant': 'outlined',
      'class': 'mx-6',
      'hide-details': true
    }
  }

  const myOptions2 = {
    type: 'v-textarea',
    attrs: {
      'label': 'My Textarea',
      'variant': 'outlined',
      'rows': 2,
      'class': 'mx-6'
    }
  }

  function saveVariantOne(opts: any) {
    boardStore.addElement({
      type: opts?.type,
      value: formValue1.value,
      page: 'Вариант 2-1'
    })
  }

  function saveVariantTwo(opts: any) {
    boardStore.addElement({
      type: opts?.type,
      value: formValue2.value,
      page: 'Вариант 2-2'
    })
  }
  function cancelVariantOne() {
    formValue1.value = false
  }
  function cancelVariantTwo() {
    formValue2.value = ''
  }


</script>