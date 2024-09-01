import { ref } from 'vue'
import type { TableItem } from '../interfaces/table-item.interface'
export const useStage = () => {
  const openModal = ref(false)
  const isEdit = ref(false)
  const items = ref<TableItem[]>([])
  const newItem = ref<TableItem>({
    id: 1,
    title: '',
    description: '',
    deriverable: '',
    start_date: null,
    end_date: null
  })

  const showModal = (id?: number) => {
    if (id) {
      isEdit.value = true
      const foundItem = items.value.find((item) => item.id === id)
      assignItem(foundItem)
    }
    openModal.value = true
  }
  const addItem = () => {
    if (isEdit.value) {
      const foundIndex = items.value.findIndex((item) => item.id === newItem.value.id)
      items.value[foundIndex] = { ...newItem.value }
      isEdit.value = false
    } else {
      const id = new Date().getTime()
      const item = { ...newItem.value, id }
      items.value.push(item)
    }
    assignItem()
  }

  const assignItem = (editItem?: TableItem) => {
    newItem.value.id = editItem?.id || 0
    newItem.value.title = editItem?.title || ''
    newItem.value.description = editItem?.description || ''
    newItem.value.deriverable = editItem?.deriverable || ''
    newItem.value.start_date = editItem?.start_date || null
    newItem.value.end_date = editItem?.end_date || null
  }
  return {
    showModal,
    addItem,
    assignItem,

    items,
    isEdit,
    openModal,
    newItem
  }
}
