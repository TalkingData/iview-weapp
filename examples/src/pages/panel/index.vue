<template>
  <div>
    <i-panel title="标题" hide-top="true">
      <p style="padding: 15px;">头部距离为 0 的 Panel</p>
    </i-panel>

    <i-panel title="标题">
      <p style="padding: 15px;">带有标题的 Panel</p>
    </i-panel>

    <i-panel title="标题" hide-border="true">
      <p style="padding: 15px;">无边框的 Panel</p>
    </i-panel>
  </div>
</template>

<script>
import panel from '../../components/panel/panel'
export default {
  components: {
    'i-panel': panel
  }
}
</script>
