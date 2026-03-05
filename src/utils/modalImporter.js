// 批量导入弹窗组件
import { defineAsyncComponent } from 'vue'

// 使用 Vite 的 glob 导入功能
const modalModules = import.meta.glob('../components/Modal/**/index.vue')

// 转换为组件对象
const modals = {}

for (const path in modalModules) {
    // 提取组件名称，使用目录名作为组件名
    // 例如：../components/Modal/LoginModalComponent/index.vue -> LoginModalComponent
    const pathParts = path.split('/')
    const directoryName = pathParts[pathParts.length - 2]
    const componentName = directoryName.charAt(0).toUpperCase() + directoryName.slice(1)

    // 注册为异步组件
    modals[componentName] = defineAsyncComponent(modalModules[path])
}

export default modals