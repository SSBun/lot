<template>
  <div>
    <el-row :gutter="40" type="flex" justify="space-between">
      <el-col :span="19">
        <el-form label-position="left" :model="form" label-width="100px">
          <el-form-item label="Weather">
            <el-slider v-model="form.weather" :min="-30" :max="100" :marks="wMarks"></el-slider>
          </el-form-item>
          <el-form-item label="Humidity">
            <el-slider v-model="form.humidity" :marks="hMarks"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="uploadData">Upload a new data</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import data from "../utils/data.js";
import { log } from "util";

export default {
  data() {
    return {
      wMarks: {
        "-30": "-20°C",
        "0": "0°C",
        "100": "100°C"
      },
      hMarks: {
        "0": "0%",
        "50": "50%",
        "100": "100%"
      },
      form: {
        weather: 0,
        humidity: 0
      }
    };
  },
  methods: {
    uploadData() {
      data
        .insertData("TH", this.form)
        .then(response => {
          log(response);
          this.$notify({
            title: "Success",
            message: "Upload data success",
            type: "success"
          });
        })
        .catch(error => {
          log(error);
          this.$notify.error({
            title: "Error",
            message: "Upload message failure"
          });
        });
    }
  }
};
</script>

<style>
</style>