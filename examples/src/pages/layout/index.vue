<template>
  <div>
    <i-panel title="基础布局"></i-panel>

    <i-row i-class="demo-row">
      <i-col span="24" i-class="demo-col" @click="tabclick">24：100%</i-col>
    </i-row>
    <i-row i-class="demo-row light">
      <i-col span="12" i-class="demo-col">12：50%</i-col>
      <i-col span="12" i-class="demo-col light">12：50%</i-col>
    </i-row>
    <i-row i-class="demo-row">
      <i-col span="8" i-class="demo-col">8：33.33%</i-col>
      <i-col span="8" i-class="demo-col light">8：33.33%</i-col>
      <i-col span="8" i-class="demo-col">8：33.33%</i-col>
    </i-row>
    <i-row i-class="demo-row light">
      <i-col span="6" i-class="demo-col">6：25%</i-col>
      <i-col span="6" i-class="demo-col light">6：25%</i-col>
      <i-col span="6" i-class="demo-col">6：25%</i-col>
      <i-col span="6" i-class="demo-col light">6：25%</i-col>
    </i-row>
    <i-row i-class="demo-row">
      <i-col span="16" i-class="demo-col">16：66.66%</i-col>
      <i-col span="8" i-class="demo-col light">8：33.33%</i-col>
    </i-row>

    <i-panel title="左右偏移"></i-panel>

    <i-row i-class="row-class">
      <i-col span="8" i-class="col-class">col-8</i-col>
      <i-col span="8" offset="8" i-class="col-class light">col-8 | offset-8</i-col>
    </i-row>
    <i-row i-class="row-class">
      <i-col span="6" offset="8" i-class="col-class">col-6 | offset-8</i-col>
      <i-col span="6" offset="4" i-class="col-class light">col-6 | offset-4</i-col>
    </i-row>
    <i-row i-class="row-class">
      <i-col span="12" offset="8" i-class="col-class">col-12 | offset-8</i-col>
    </i-row>
  </div>
</template>

<script>
import panel from "../../components/panel/panel"
import row from "../../components/row/row"
import col from "../../components/col/col"
export default {
  components: {
    "i-panel": panel,
    "i-row": row,
    "i-col": col
  },
  methods: {
    tabclick() {
      console.log(1234)
    }
  },
};
</script>
<style>
.demo-row {
    margin-bottom: 5px;
    background-image: -webkit-linear-gradient(0deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
    background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
}
.demo-col {
    color: #fff;
    padding: 10px 0;
    text-align: center;
    background: rgba(0, 153, 229, .7);
}
.demo-col.light {
    background: rgba(0, 153, 229, .5);
}
.demo-row.light .demo-col  {
    background: rgba(0, 153, 229, .5);
}
.demo-row.light .demo-col.light {
    background: rgba(0, 153, 229, .3);
}

.row-class {
    background: #fff;
    margin-bottom: 6px;
}
.col-class {
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    background: #2d8cf0;
    font-size: 12px;
}
.col-class.light {
    background: #5cadff;
}
</style>

