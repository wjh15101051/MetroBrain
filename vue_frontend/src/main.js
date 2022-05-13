import './plugins/axios'
import {createApp} from "vue"
import FrameWork from './FrontendFramework.vue'
import installElementPlus from './plugins/element'
import 'element-plus/theme-chalk/index.css'

const frame_work_app = createApp(FrameWork)
installElementPlus(frame_work_app)
frame_work_app.mount('#frontend_framework')