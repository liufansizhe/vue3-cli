import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useThemeStore } from './theme'

//demo
export const useDemo = defineStore('demo', () => {
    const demoRef = ref(null)
    return { demoRef }
})
export { useThemeStore }