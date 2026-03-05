import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    // 主题状态，默认为亮色主题
    const isDark = ref(false)

    // 计算属性，返回当前主题名称
    const currentTheme = computed(() => (isDark.value ? 'dark' : 'light'))

    // 切换主题
    const toggleTheme = () => {
        isDark.value = !isDark.value
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
        updateDocumentTheme()
    }

    // 更新文档主题类名
    const updateDocumentTheme = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark-theme')
        } else {
            document.documentElement.classList.remove('dark-theme')
        }
    }

    // 初始化主题
    const initTheme = () => {
        // 从 localStorage 读取主题设置
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            isDark.value = savedTheme === 'dark'
        }
        updateDocumentTheme()
    }

    return {
        isDark,
        currentTheme,
        toggleTheme,
        initTheme
    }
})

