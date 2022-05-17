import { createApp } from 'vue'
import FrontEndFramework from "./FrontEndFramework"
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(FrontEndFramework)
app.use(ElementPlus)
app.mount('#frontend_framework')