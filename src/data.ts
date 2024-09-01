import type { Select } from './interfaces/select.interface'
import type { Tab } from './interfaces/tab.interface'
import type { TableItem } from './interfaces/table-item.interface'

export const TABS: Tab[] = [
  {
    title: 'DATOS',
    image: 'src/assets/datos-generales.svg'
  },
  {
    title: 'PLAN',
    image: 'src/assets/plandetrabajo.svg'
  }
]

export const SELECT_ITEMS: Select[] = [
  {
    text: '2021 Garantizar que los datos y estadisticas relacionada con gente estén actualizadas',
    value: 1
  },
  {
    text: '2021 Asegurar que los directivos de unidades gestionen con base en el modelo',
    value: 2
  },
  {
    text: '2021 Fortalecer una cultura de alto desempeño impulsando',
    value: 3
  },
  {
    text: '2021 Garantizar que los datos y estadisticas relacionada con gente estén actualizadas',
    value: 4
  },
  {
    text: '2021 Asegurar que los directivos de unidades gestionen con base en el modelo',
    value: 5
  },
  {
    text: '2021 Fortalecer una cultura de alto desempeño impulsando',
    value: 6
  },
  {
    text: '2021 Fortalecer una cultura de alto desempeño impulsando',
    value: 7
  }
]

export const AUTOCOMPLETE_ITEMS: Select[] = [
  {
    text: 'Israel Ayala Vazquez',
    value: 1
  },
  {
    text: 'Adrian Laurel Isidor',
    value: 2
  }
]

export const TABLE_HEADERS: string[] = [
  'Título',
  'Descripción',
  'Entregable',
  'Fecha Inicio',
  'Fecha Fin'
]

export const TABLE_ITEMS: TableItem[] = [
  // {
  //   id: 1,
  //   title: 'Etapa 1',
  //   description: 'Lorem Ipsum dolor sit amet',
  //   deriverable: 'Entregable 2',
  //   start_date: new Date(),
  //   end_date: new Date()
  // }
]
