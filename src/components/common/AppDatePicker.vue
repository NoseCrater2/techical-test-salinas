<template>
  <v-menu v-model="showCalendar" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <app-input
        :label="label"
        :icon="showIcon ? '/src/assets/calendario.svg' : ''"
        tooltipText="Lorem Ipsum"
        readonly
        v-bind="props"
        v-model="formattedDate"
        :disabled="disabled"
        :required="required"
      >
      </app-input>
    </template>
    <v-date-picker
      max-width="270px"
      next-icon=""
      prev-icon=""
      color="primary"
      hide-header
      elevation="1"
      :first-day-of-week="7"
      @update:modelValue="handlerDate"
    >
    </v-date-picker>
  </v-menu>
</template>
<script setup lang="ts">
import AppInput from './AppInput.vue'
import { ref, computed } from 'vue'
interface Props {
  modelValue?: Date | null
  showIcon?: boolean
  disabled?: boolean
  required?: boolean
  label: string
}

const props = defineProps<Props>()
const showCalendar = ref(false)

const formattedDate = computed(() => {
  if (props.modelValue)
    return `${props.modelValue?.getDate()}/${props.modelValue?.getMonth() + 1}/${props.modelValue?.getFullYear()}`
  return null
})
const emit = defineEmits(['update:modelValue'])

const handlerDate = (date: Date) => {
  showCalendar.value = false
  emit('update:modelValue', date)
}
</script>
<style>
.v-date-picker-month__days {
  column-gap: 0 !important;
  flex: none !important;
}
.v-date-picker-month__weekday {
  @apply border-b border-primary !important;
}
</style>
