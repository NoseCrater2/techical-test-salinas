<template>
  <div>
    <label for="app-autocomplete">{{ label }}</label>
    <v-autocomplete
      :required="required"
      label=""
      variant="outlined"
      density="compact"
      menu-icon=""
      hide-details
      item-color="primary"
      :items="options"
      @update:modelValue="handlerValue"
      item-title="text"
      item-value="value"
      :model-value="modelValue"
    >
      <template v-slot:item="{ item, props }">
        <v-list-item v-bind="props" :title="item.title">
          <template v-slot:prepend>
            <v-avatar color="primary">
              {{ $filters.capitalize(item.title) }}
            </v-avatar>
          </template>
        </v-list-item>
      </template>
    </v-autocomplete>
  </div>
</template>

<script lang="ts" setup>
import type { Select } from '@/interfaces/select.interface'

interface Props {
  options: Select[]
  label: string
  modelValue?: number
  required?: boolean
}
defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const handlerValue = (value: number) => {
  emit('update:modelValue', value)
}
</script>
<style>
.v-autocomplete__content {
  box-shadow: none !important;
}

.v-list {
  @apply border border-gray !important;
}

.v-input__control {
  @apply h-[35px];
}
</style>
