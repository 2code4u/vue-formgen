<template>
  <v-row class="ma-4 justify-space-between">
    <GenForm 
      v-model="formValue1"
      :options="myOptions1"
      @save="saveVariantOne"
      @cancel="cancelVariantOne"
      >
      <div class="text-center">
        <v-icon>
          mdi-delete
        </v-icon>
      </div>
    </GenForm>

    <GenForm 
      v-model="formValue2"
      :options="myOptions2"
      @save="saveVariantTwo"
      @cancel="cancelVariantTwo"
      >
      <v-icon>
        mdi-plane
      </v-icon>
    </GenForm>
  </v-row>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useBoardStore } from '@/stores/board'
  import GenForm from '@/components/GenForm.vue'

  const boardStore = useBoardStore()

  const formValue1 = ref<string>('')
  const formValue2 = ref<string>('')

  const myOptions1 = {
    type: 'v-text-field',
    attrs: {
      'label': 'My input',
      'variant': 'outlined',
      'placeholder': 'Введите текст',
      'class': 'mx-6'
    }
  }

  const myOptions2 = {
    type: 'v-select',
    attrs: {
      'label': 'My select',
      'variant': 'outlined',
      'items': ['Москва', 'Самара', 'Владивосток', 'Пермь'],
      'class': 'mx-6'
    }
  }

  function saveVariantOne(opts: any) {
    boardStore.addElement({
      type: opts?.type,
      value: formValue1.value,
      page: 'Вариант 1-1'
    })
  }

  function saveVariantTwo(opts: any) {
    boardStore.addElement({
      type: opts?.type,
      value: formValue2.value,
      page: 'Вариант 1-2'
    })
  }
  function cancelVariantOne() {
    formValue1.value = ''
  }
  function cancelVariantTwo() {
    formValue2.value = ''
  }


</script>