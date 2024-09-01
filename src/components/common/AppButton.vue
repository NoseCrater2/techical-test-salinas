<template>
  <button
    :class="{ 'big-button': !icon, 'rounded-button': isRounded, 'outlined-button': isOutlined }"
    class="min-h-[30px]"
    @click="$emit('onClick')"
  >
    <img width="30px" class="inline" :class="{ 'mr-3': text }" v-if="icon" :src="icon" />
    <span :class="{ underline: icon }">
      {{ text }}
    </span>
  </button>
</template>

<script lang="ts" setup>
interface Button {
  text?: string
  isRounded?: boolean
  icon?: string
  isOutlined?: boolean
}

defineProps<Button>()
</script>

<style scoped>
.big-button {
  @apply h-10 py-1 px-4 text-sm bg-primary min-w-[120px];
}
.rounded-button {
  border-radius: 50px;
}
.outlined-button {
  @apply border border-secondary bg-gray;
}
</style>
