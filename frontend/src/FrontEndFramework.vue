<template>
  <el-tabs v-model="TabActiveName" class="demo-tabs" @tab-click="TabHandleClick" type="border-card">
    <el-tab-pane label="流量预测" name="first">
      <h1>流量预测</h1>
      <FlowPred id="flow_pred" v-if="activeName==='first'" :tabActive="activeName==='first'" ref="firstTab"></FlowPred>
    </el-tab-pane>
    <el-tab-pane label="出发-到达预测" name="second">
      <h1>出发-到达预测</h1>
      <ODPred id="od_pred" v-if="activeName==='second'" :tabActive="activeName==='second'" ref="secondTab"></ODPred>
    </el-tab-pane>
    <el-tab-pane label="燃气风险预测" name="third">
      <h1>燃气风险预测</h1>
      <GasLeakagePred id="gas_leakage_pred" v-if="activeName==='third'" :tabActive="activeName==='third'" ref="thirdTab"></GasLeakagePred>
    </el-tab-pane>
    <el-tab-pane label="自定义预测" name="fourth">
      <h1>自定义预测</h1>
      <ToyPred id="toy_pred" v-if="activeName==='fourth'" :tabActive="activeName==='fourth'" ref="fourthTab"></ToyPred>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import FlowPred from './components/FlowPred.vue'
import ODPred from './components/ODPred.vue'
import GasLeakagePred from './components/GasLeakagePred.vue'
import ToyPred from './components/ToyPred/ToyPred.vue'

export default {
  name: "FrontendFramework",
  components: {
    FlowPred,
    ODPred,
    GasLeakagePred,
    ToyPred
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    TabHandleClick(tab, event) {
      console.log(tab, event)
      console.log(tab.props.name)
      this.activeName = tab.props.name
      switch (tab.props.name) {
        case "first":
          break;
        case "second":
          break;
        case "third":
          break;
        case "fourth":
          ToyPred.methods.buildPage()
          break;
      }
    }
  }
}
</script>
<script setup>
import {ref} from "vue";

const TabActiveName = ref('first')

</script>


<style scoped>

</style>