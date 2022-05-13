<template>
  <div id="ToyPredDiv">
    <el-button @click="RequestData()">request data</el-button>
    <div id="toy">0</div>
    <div id="MapChart" style="width: 75%;height: 100%;"></div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "ToyPred",
  methods: {
    RequestData() {
      axios.get('/test',{
        params: {
          index: 0
        }
      }).then((response) => {
        console.log(response)
        document.getElementById("toy").innerHTML = response.data
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>