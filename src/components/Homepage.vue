<template>
  <div>
    <el-container>
      <el-header>温湿度监测</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="12">
            <monitor name="阳台温度" />
          </el-col>
          <el-col :span="12">
            <monitor name="室内温度" />
          </el-col>
        </el-row>
        <el-button type="primary" @click="refreshData">Refresh Data</el-button>
      </el-main>
    </el-container>
    <el-row>
      <el-header>数据测试</el-header>
      <el-main>
        <el-row :gutter="0">
          <WeatherHumidityTestView />         
        </el-row>
      </el-main>
    </el-row>
  </div>
</template>

<script>
import Monitor from "./Monitor.vue";
import WeatherHumidityTestView from "./WeatherHumidityTestView.vue";
import { log } from "util";
import data from "../utils/data.js";

export default {
  components: { Monitor, WeatherHumidityTestView },
  methods: {
    refreshData() {
      // this.$axios
      // .get('/1.1/classes/Product?limit=10&&order=-updatedAt&&')
      data.queryData("Product").then(response => {
        // let data = JSON.parse(response)
        let data = response.data;
        log(data.results[0].title);
      });
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #409eff;
  border-radius: 8px;
  color: #fff;
  font-size: 1.8em;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>