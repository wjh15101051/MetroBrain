<template>
  <h2>FlowPred</h2>
  <p>周一 晚上七点半 天通苑站 到达流量 : {{example_value}}</p>
  <el-icon><LocationFilled /></el-icon>
</template>

<script>
import axios from 'axios'
export default {
  name: "FlowPred",
  data() {
    return {
      example_value: 0
    }
  },
  mounted() {
    axios.get('/station_static', {
      params: {
        station: 0
      }
    }).then(function (response) {
      console.log(response.name)
      console.log(response.x)
      console.log(response.y)
    })
  }
}
</script>

<style scoped>

</style>