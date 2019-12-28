<template>
  <div>
    <el-container>
      <el-header>温湿度监测</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="12">
            <monitor :records="records" name="阳台温度" />
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
  data: function() {
    return {
      records: [],
    }
  },
  methods: {
    refreshData() {
      data.queryData("TH").then(response => {
        let data = response.data;
        let tempArr = []
        for (let i in data.results) {
          let record = data.results[i]
          let temperature = record.weather
          let humidity = record.humidity
          let time = new Date(Date.parse(record.createdAt))
          let date = `${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`
          tempArr.push({
            temperature,
            humidity,
            date,
          })
          this.records = tempArr
        }
        log(data.results[0].title);
        this.$notify.success({
          title: "Refresh records success"
        })
      }).catch(err => {
        this.$$notify.err({
          title: "Refresh failure",
          message: err,          
        })
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