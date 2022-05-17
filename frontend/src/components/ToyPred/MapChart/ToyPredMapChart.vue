<template>
  <div id="toy_pred_map_chart_wrap">
    <div id="MapChart" style="height: 75vh;position: relative;"></div>
  </div>
</template>

<script>
import EchartsInit from "@/components/ToyPred/MapChart/ToyPredEchartsInit"
export default {
  name: "ToyPredMapChart",
  mounted() {
    console.log("ToyPredMapChart mounted")
    setTimeout(EchartsInit, 1000)
  }
}
</script>

<style scoped>

</style>