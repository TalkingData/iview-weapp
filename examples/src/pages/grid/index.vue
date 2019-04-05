<template>
  <div>
    <i-grid>
      <i-row>
        <i-grid-item @click="bindTaps">
          <i-grid-icon>
            <i-icon size="24" type="activity"/>
            <i-grid-label>宫格</i-grid-label>
          </i-grid-icon>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <i-icon size="24" type="addressbook"/>
            <i-grid-label>宫格</i-grid-label>
          </i-grid-icon>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <i-icon size="24" type="barrage"/>
            <i-grid-label>宫格</i-grid-label>
          </i-grid-icon>
        </i-grid-item>
      </i-row>
      <i-row>
        <i-grid-item>
          <i-grid-icon>
            <i-icon size="24" type="collection"/>
            <i-grid-label>宫格</i-grid-label>
          </i-grid-icon>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <i-icon size="24" type="computer"/>
            <i-grid-label>宫格</i-grid-label>
          </i-grid-icon>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <i-icon size="24" type="coupons"/>
            <i-grid-label>宫格</i-grid-label>
          </i-grid-icon>
        </i-grid-item>
      </i-row>
      <i-row>
        <i-grid-item>
          <i-grid-icon>
            <i-icon size="24" type="flag"/>
            <i-grid-label>宫格</i-grid-label>
          </i-grid-icon>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <i-icon size="24" type="interactive"/>
            <i-grid-label>宫格</i-grid-label>
          </i-grid-icon>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <i-icon size="24" type="mail"/>
            <i-grid-label>宫格</i-grid-label>
          </i-grid-icon>
        </i-grid-item>
      </i-row>
    </i-grid>
  </div>
</template>
<script>
import grid from "../../components/grid/grid";
import row from "../../components/row/row";
import gridItem from "../../components/grid-item/grid-item";
import gridIcon from "../../components/grid-icon/grid-icon";
import icon from "../../components/icon/icon";
import gridLabel from "../../components/grid-label/grid-label";
export default {
  components: {
    "i-grid": grid,
    "i-row": row,
    "i-grid-item": gridItem,
    "i-grid-icon": gridIcon,
    "i-icon": icon,
    "i-grid-label": gridLabel
  },
  methods: {
    bindTaps(evt) {
      console.log(12)
    }
  },
};
</script>
<style>
.row-class {
    background: #fff;
}
.col-class{
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    background: #2d8cf0;
    font-size: 12px;
}
.col-class.light{
    background: #5cadff;
}
</style>

