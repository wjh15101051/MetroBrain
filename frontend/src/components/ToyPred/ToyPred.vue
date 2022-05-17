<template>
  <el-row :gutter="20">
    <el-col :span="12" style="display: block;">
      <div class="grid-content" style="border-radius: 4px;height: 75vh;border: #409EFF 1px solid;">
        <ToyPredMapChart id="toy_pred_map_chart"></ToyPredMapChart>
      </div>
    </el-col>
    <el-col :span="12" style="display: block;">
      <div class="grid-content" style="border-radius: 4px;height: 75vh;border: #409EFF 1px solid;">
        <el-row style="margin: 20px">
          <el-button type="success" v-on:click="chooseClass1">类1</el-button>
          <el-button type="danger" v-on:click="chooseClass2">类2</el-button>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
el-row {
  margin-bottom: 20px;
}
el-row:last-child {
  margin-bottom: 0;
}
el-col {
  border-radius: 4px;
}
</style>

<script>
import ToyPredMapChart from "@/components/ToyPred/MapChart/ToyPredMapChart.vue";

// let curClass = 1

export default {
  name: "ToyPred",
  components: {
    ToyPredMapChart
  }

  // methods: {
  //   chooseClass1() {
  //     curClass = 1
  //   },
  //   chooseClass2() {
  //     curClass = 2
  //   }
  // }
}

</script>