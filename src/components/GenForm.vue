<template>
  <v-col cols="12" md="4">
    <v-form >
      <slot />

      <div class="d-flex justify-space-around">
        <component
          :is="options.type"
          v-bind="options.attrs"
          v-model="modValue"
         />
      </div>

      <div class="d-flex justify-space-between">
        <v-btn @click="saveForm()">
          <v-icon alt="Добавить">mdi-safe</v-icon>
           Сохранить
        </v-btn>

        <v-divider vertical></v-divider>
        <v-btn @click="cancelForm()">
          <v-icon alt="Добавить">mdi-cancel</v-icon>
           Отменить
        </v-btn>
      </div>
    </v-form>
  </v-col>
</template>

<script setup lang="ts">
  const props = defineProps(
    {
      options: {
        type: Object,
        default() {
          return {
            type: 'input',
            attrs: {}
          }
        }
      }
    }
  )

  const modValue = defineModel()

  const emit = defineEmits(['save', 'cancel'])

  function saveForm() {
    emit('save', props.options)
  }

  function cancelForm() {
    emit('cancel')
  }
</script>