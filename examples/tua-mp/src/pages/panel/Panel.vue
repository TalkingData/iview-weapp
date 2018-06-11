<config>
{
    "navigationBarTitleText": "Panel 面板",
    "usingComponents": {
        "i-panel": "/iview/panel/index"
    }
}
</config>

<template lang="wxml">
    <i-panel title="标题" hide-top>
        <view style="padding: 15px;">头部距离为 0 的 Panel</view>
    </i-panel>

    <i-panel title="标题">
        <view style="padding: 15px;">带有标题的 Panel</view>
    </i-panel>

    <i-panel title="标题" hide-border="{{ true }}">
        <view style="padding: 15px;">无边框的 Panel</view>
    </i-panel>
</template>

<script>
export default {
}
</script>

<style lang="css">


</style>
