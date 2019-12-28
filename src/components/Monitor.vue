<template>
  <div>
    <ve-line :data="chartData"></ve-line>
    <div id="title"> {{ name }} </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ""
      },
      records: {        
        type: Array,
        default: () => {
          return [{date: '10-10', temperature: 30, humidity: 39},
                  {date: '10-11', temperature: 10, humidity: 89},
                  {date: '10-12', temperature: 40, humidity: 19},
                  {date: '10-13', temperature: 90, humidity: 39}]
        },
      }
    },
    computed: {
      chartData: function () {
        return {
           columns: ['date', 'temperature', 'humidity'],
          rows: this.records,
        }
      }
    }
  }
</script>

<style>

#title {
  font-size: 1.2em;
  font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  line-height: 1.2em;
  position: relative;
  margin-top: -1.5em;
}

</style>