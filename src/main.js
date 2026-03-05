import 'element-plus/dist/index.css'
import '@/styles/common.scss'
import 'virtual:svg-icons-register'
import 'amfe-flexible'
import '@/styles/theme.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as directive from '@/utils/directive'

import App from './App.vue'
import SvgIcon from './components/Icon/index.vue'
import VueI18n from '@/language'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
for (const [key, component] of Object.entries(directive)) {
    app.directive(key, component)
}

app.component('svg-icon', SvgIcon)
app.use(VueI18n).use(createPinia()).use(router).mount('#app')
