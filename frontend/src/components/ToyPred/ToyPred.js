import {createApp} from "vue"
import ToyPred from "./ToyPred"
import ElementPlus from "element-plus"

const ToyPredApp = createApp(ToyPred)
ToyPredApp.use(ElementPlus)
ToyPredApp.mount("#toy_pred")