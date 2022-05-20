<template>
  <el-row :gutter="20">
    <el-col :span="12" style="display: block;">
      <div class="grid-content" style="border-radius: 4px;height: 75vh;border: #409EFF 1px solid;">
        <div id="MapChart" style="height: 75vh;position: relative;"></div>
      </div>
    </el-col>
    <el-col :span="12" style="display: block;">
      <div class="grid-content" style="border-radius: 4px;height: 75vh;border: #409EFF 1px solid;">
        <el-row style="margin: 20px">
          <el-button type="success" v-on:click="chooseClass1">类1</el-button>
          <el-button type="danger" v-on:click="chooseClass2">类2</el-button>
        </el-row>
        <el-row style="margin: 20px">
          <el-button type="query" v-on:click="query">查询</el-button>
        </el-row>
        <el-row style="margin: 20px">
          <div>{{queryClass}}</div>
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

// import EchartsInit from "@/components/ToyPred/MapChart/ToyPredEchartsInit"
import bmap_api from "@/components/ToyPred/MapChart/ToyPredBMapInit";
export default {
  name: "ToyPred",
  props: ['tabActive'],
  data() {
    return {
      queryClass: 1
    }
  },
  methods: {
    buildPage() {
      console.log("switch to fourth tab and build page")
      // setTimeout(EchartsInit, 1000)
      setTimeout(bmap_api.BMapInit, 1000)
      bmap_api.startPred()
    },
    chooseClass1() {
      bmap_api.setClass(1)
    },
    chooseClass2() {
      bmap_api.setClass(2)
    },
    query() {
      bmap_api.query()
    }
  }
}
</script>