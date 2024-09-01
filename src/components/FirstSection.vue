<template>
  <v-row>
    <v-col cols="12" md="6">
      <div class="p-5">
        <AppInput label="ID Sistema ORC's" disabled /> <br />
        <AppInput label="Nombre del proyecto" /> <br />
        <AppInput label="Descripción del proyecto" /> <br />
        <AppSelect
          :options="SELECT_ITEMS"
          label="Objetivos a los que contribuyen el proyecto"
          placeholder="Selecciona un objetivo"
        />
        <br />
        <v-row>
          <v-col cols="12" md="6"> <AppDatePicker label="Fecha inicio" showIcon /><br /> </v-col>
          <v-col cols="12" md="6"> <AppDatePicker label="Fecha fin" showIcon /> <br /> </v-col>
        </v-row>
        <AppButton text="Prioridad del proyecto" isRounded />
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <div class="p-5 mt-6" style="background-color: #eff5fc">
        <v-row class="flex items-end">
          <v-col cols="12" md="6">
            <AppInput label="ID Proyecto" placeholder="Escribe el numer de ID Proyectos Sipres" />
          </v-col>
          <v-col cols="12" md="6"> <AppButton text="Buscar proyecto" isRounded /></v-col>
        </v-row>
        <AppInput disabled label="Nombre del proyecto" /> <br />
        <AppInput disabled label="Descripción del proyecto" /> <br />
        <v-row>
          <v-col cols="12" md="6">
            <AppDatePicker label="Fecha de creación" disabled />
          </v-col>
          <v-col cols="12" md="3"> <AppInput disabled label="Capex" /> </v-col>
          <v-col cols="12" md="3">
            <AppInput disabled label="Opex" />
          </v-col>
          <v-col cols="12" md="6"> <AppInput disabled label="Pilar del proyecto" /></v-col>
          <v-col cols="12" md="6">
            <AppInput disabled label="Clasificación Comité de inversión" /> <br />
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <AppAutocomplete label="Responsables del proyecto" :options="AUTOCOMPLETE_ITEMS" />
    </v-col>
    <v-col cols="12" md="4">
      <AppAutocomplete label="Administrador" :options="AUTOCOMPLETE_ITEMS" />
    </v-col>
    <v-col cols="12" md="4">
      <AppAutocomplete label="Involucrados (opcional)" :options="AUTOCOMPLETE_ITEMS" />
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import AppButton from '../components/common/AppButton.vue'
import AppSelect from '../components/common/AppSelect.vue'
import AppDatePicker from '../components/common/AppDatePicker.vue'
import AppInput from '../components/common/AppInput.vue'
import AppAutocomplete from '../components/common/AppAutocomplete.vue'
import { SELECT_ITEMS, AUTOCOMPLETE_ITEMS } from '../data'
</script>
