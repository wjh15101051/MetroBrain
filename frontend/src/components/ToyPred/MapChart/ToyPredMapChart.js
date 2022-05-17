import {createApp} from "vue"
import ToyPredMapChart from "./ToyPredMapChart.vue"
import ElementPlus from "element-plus"

const ToyPredMapChartApp = createApp(ToyPredMapChart)
ToyPredMapChartApp.use(ElementPlus)
ToyPredMapChartApp.mount("#toy_pred_map_chart")