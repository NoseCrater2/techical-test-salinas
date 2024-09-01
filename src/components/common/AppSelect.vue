<template>
  <label for="app-select">{{ label }}</label>
  <v-select
    :required="required"
    hide-details
    variant="outlined"
    density="compact"
    label=""
    item-color="primary"
    menu-icon="mdi-chevron-down"
    id="app-select"
    :items="options"
    item-title="text"
    item-value="value"
    :model-value="modelValue"
    @update:modelValue="handlerValue"
  >
    <template v-slot:prepend-item> {{ placeholder }} </template>
  </v-select>
</template>

<script lang="ts" setup>
import type { Select } from '@/interfaces/select.interface'

interface Props {
  options: Select[]
  label: string
  placeholder?: string
  modelValue?: number | null
  required?: boolean
}
defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const handlerValue = (value: number) => {
  emit('update:modelValue', value)
}
</script>
<style>
.v-select__menu-icon {
  color: #fec702;
  font-size: 40px !important;
  padding-left: 10px;
}
.v-select__content {
  box-shadow: none !important;
}
.v-menu {
  box-shadow: none !important;
}

.v-list::-webkit-scrollbar {
  @apply text-primary w-[5px];
}
.v-list::-webkit-scrollbar-thumb {
  @apply bg-primary;
}

.v-list-item:hover {
  caret-color: #fec702;
  @apply text-primary;
}
</style>
