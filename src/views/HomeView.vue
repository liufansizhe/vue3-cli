<script setup>
import { useThemeStore } from '@/stores'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
const { toggleTheme } = useThemeStore()
onMounted(() => {})
</script>
<template>
    <RouterView />
    <el-button @click="toggleTheme">切换主题</el-button>
    <div class="T">demo</div>
</template>
<style scoped lang="scss">
.T {
    background: var(--button-bg);
}
</style>
