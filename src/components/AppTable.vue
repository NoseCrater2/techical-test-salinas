<template>
  <div class="border border-gray">
    <h3 class="font-bold m-4">{{ title }}</h3>
    <v-table class="p-3">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>

          <th>
            <img width="15px" class="m-auto" src="/src/assets/editar.svg" alt="" />
          </th>
          <th>
            <img width="15px" class="m-auto" src="/src/assets/delete.svg" alt="" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>
            {{ item.deriverable }}
          </td>
          <td>{{ $filters.dateFormat(item.start_date) }}</td>
          <td>{{ $filters.dateFormat(item.end_date) }}</td>
          <td class="table-action-button" @click="handlerEditItem(item.id)">Editar</td>
          <td class="table-action-button" @click="handlerDeleteItem(item.id)">Eliminar</td>
        </tr>
      </tbody>
    </v-table>
    <div class="">
      <v-pagination
        :length="1"
        variant="plain"
        density="compact"
        rounded="circle"
        active-color="primary"
      ></v-pagination>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { TableItem } from '@/interfaces/table-item.interface'

const emit = defineEmits(['onClickEdit', 'onClickDelete'])

interface Props {
  title: string
  headers: string[]
  items: TableItem[]
}

defineProps<Props>()

const handlerEditItem = (id: number) => {
  emit('onClickEdit', id)
}

const handlerDeleteItem = (id: number) => {
  emit('onClickDelete', id)
}
</script>

<style>
th,
th {
  @apply min-w-[50px];
}
th {
  @apply border-4 border-gray text-center bg-secondary p-0 h-[40px] font-bold !important;
}

td {
  @apply text-center !important;
}

td:nth-child(2) {
  @apply text-justify max-w-[250px] !important;
}
.table-action-button {
  @apply underline cursor-pointer;
}
</style>
