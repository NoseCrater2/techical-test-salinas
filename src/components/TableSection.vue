<template>
  <v-row>
    <v-col cols="12">
      <AppButton icon="src/assets/agregar.svg" text="Agregar nuevo" @onClick="showModal" />
    </v-col>

    <v-col cols="12">
      <AppTable :headers="TABLE_HEADERS" title="Etapas" :items="items" @onClickEdit="showModal" />
    </v-col>
    <app-dialog
      :title="`${isEdit ? 'Editar' : 'Agregar'} etapa`"
      :confirmText="isEdit ? 'Modificar' : 'Agregar'"
      v-model="openModal"
      @onFormValid="addItem"
      @onCloseForm="assignItem"
    >
      <template v-slot:content>
        <AppInput v-model="newItem.title" required label="Título de la iniciativa:" /><br />
        <AppInput v-model="newItem.description" required label="Descripción de la etapa:" /><br />
        <AppInput
          v-model="newItem.deriverable"
          required
          label="Entregable de la etapa:"
          tooltipText="Lorem Ipsum"
        /><br />
        <AppDatePicker v-model="newItem.start_date" required label="Fecha inicio:" showIcon /><br />
        <AppDatePicker v-model="newItem.end_date" required label="Fecha fin:" showIcon />
      </template>
    </app-dialog>
  </v-row>
</template>
<script lang="ts" setup>
import AppButton from '../components/common/AppButton.vue'
import AppDatePicker from '../components/common/AppDatePicker.vue'
import AppInput from '../components/common/AppInput.vue'
import AppDialog from '../components/AppDialog.vue'
import AppTable from '../components/AppTable.vue'
import { TABLE_HEADERS } from '../data'
import { useStage } from '@/composables/useStage'

const { assignItem, addItem, showModal, isEdit, openModal, newItem, items } = useStage()
</script>
