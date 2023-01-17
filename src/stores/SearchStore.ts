import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('searchStore', () => {
  const places = ref([])
  const loading = ref(false)

  const getPlaces = async (search: string) => {
    loading.value = true
    const res = await fetch(`https://nominatim.openstreetmap.org/?q=${search}&format=json`)
    const data = await res.json()
    places.value = data
    loading.value = false
  }
  return {
    places, getPlaces, loading
  }
})
