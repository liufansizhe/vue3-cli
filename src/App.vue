<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useThemeStore } from './stores/theme'
import modals from '@/utils/modalImporter'
const { initTheme } = useThemeStore()
const locale = zhCn
onMounted(() => {
    initTheme()
})
</script>

<template>
    <el-config-provider :locale="locale">
        <RouterView />
        <component :is="component" v-for="(component, name) in modals" :key="name" />
    </el-config-provider>
</template>

<style lang="scss">
#app {
    height: 100%;
    width: 100%;
}
</style>
