<template>
  <el-tabs v-model="TabActiveName" class="demo-tabs" @tab-click="TabHandleClick" type="border-card">
    <el-tab-pane label="流量预测" name="first">
      <h1>流量预测</h1>
      <FlowPred id="flow_pred"></FlowPred>
    </el-tab-pane>
    <el-tab-pane label="出发-到达预测" name="second">
      <h1>出发-到达预测</h1>
      <ODPred id="od_pred"></ODPred>
    </el-tab-pane>
    <el-tab-pane label="燃气风险预测" name="third">
      <h1>燃气风险预测</h1>
      <GasLeakagePred id="gas_leakage_pred"></GasLeakagePred>
    </el-tab-pane>
    <el-tab-pane label="自定义预测" name="fourth">
      <h1>自定义预测</h1>
      <ToyPred id="toy_pred"></ToyPred>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
  import {ref} from "vue";

  const TabActiveName = ref('first')
  const TabHandleClick = (tab, event) => {
    console.log(tab, event)
  }

</script>

<script>
import FlowPred from './components/FlowPred.vue'
import ODPred from './components/ODPred.vue'
import GasLeakagePred from './components/GasLeakagePred.vue'
import ToyPred from './components/ToyPred.vue'

export default {
  name: "FrontendFramework",
  components: {
    FlowPred,
    ODPred,
    GasLeakagePred,
    ToyPred
  }
}
</script>

<style scoped>

</style>