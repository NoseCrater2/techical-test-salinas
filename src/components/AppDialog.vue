<template>
  <v-dialog @update:modelValue="handlerValue" :model-value="modelValue" width="450" persistent>
    <v-card variant="flat">
      <template v-slot:append>
        <div class="absolute top-0 right-0">
          <AppButton icon="src/assets/cerrar.svg" @onClick="closeDialog" />
        </div>
      </template>
      <template v-slot:title>
        <span class="font-bold">{{ title }}</span>
        <hr class="title-underlined" />
      </template>
      <v-card-text>
        <form ref="form" @submit="preventRefresh">
          <slot name="content"> </slot>
        </form>
      </v-card-text>
      <template v-slot:actions>
        <div class="w-full flex justify-between">
          <AppButton
            :text="cancelText ? cancelText : 'Cancelar'"
            @onClick="closeDialog"
            isOutlined
          />
          <AppButton :text="confirmText ? confirmText : 'Agregar'" @onClick="validateForm" />
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import AppButton from './common/AppButton.vue'
import { ref } from 'vue'

const emit = defineEmits(['onFormValid', 'update:modelValue', 'onCloseForm'])

const handlerValue = (value: boolean) => {
  emit('update:modelValue', value)
}
const form = ref<InstanceType<typeof HTMLFormElement> | null>(null)

interface Props {
  title: string
  cancelText?: string
  confirmText?: string
  modelValue?: boolean
}
defineProps<Props>()

const closeDialog = () => {
  emit('onCloseForm')
  emit('update:modelValue', false)
}

const preventRefresh = (e: Event) => {
  e.preventDefault()
}

const validateForm = () => {
  form.value?.requestSubmit()
  const isValid = form.value?.checkValidity()
  if (isValid) {
    emit('onFormValid', isValid)
    emit('update:modelValue', false)
  }
}
</script>

<style>
.title-underlined {
  @apply p-0 m-0 border-2 border-primary;
}
</style>
