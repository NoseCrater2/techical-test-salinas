<template>
  <div>
    <label for="app-input" class="flex text-sm">
      {{ label }}
      <i v-if="required" class="text-red">*</i>
      <span class="pl-3" v-if="tooltipText">
        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <img width="20px" v-bind="props" src="/src/assets/informacion.svg" />
          </template>
          <span>{{ tooltipText }}</span>
        </v-tooltip>
      </span>
    </label>
    <div
      class="border border-black flex"
      :class="{ 'bg-gray cursor-not-allowed': disabled, 'bg-white': !disabled }"
    >
      <input
        :required="required"
        @input="handlerValue($event)"
        :value="modelValue"
        class="h-[30px] outline-0 focus:outline-0 flex-1"
        type="text"
        id="app-input"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
      />
      <img v-if="icon" width="25px" :src="icon" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  label: string
  disabled?: boolean
  tooltipText?: string
  modelValue?: string | null
  icon?: string
  readonly?: boolean
  required?: boolean
  placeholder?: string
}

const emit = defineEmits(['update:modelValue'])

defineProps<Props>()

const handlerValue = (e: Event) => {
  emit('update:modelValue', e.target?.value)
}
</script>
