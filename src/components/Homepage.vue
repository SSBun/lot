<template>
  <div>
    <el-container>
      <el-header>温湿度监测</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="12"> <monitor name="阳台温度"/></el-col>
          <el-col :span="12"> <monitor name="室内温度"/></el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-row>
      <el-button type="primary" @click="refreshData"> Refresh Data </el-button>
    </el-row>
  </div>
</template>

<script>
import Monitor from "./Monitor.vue";
import { log } from 'util';

export default {
  components: { Monitor },
  methods: {
    refreshData() {
      this.$axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        log(response)
      })
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #409EFF;
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