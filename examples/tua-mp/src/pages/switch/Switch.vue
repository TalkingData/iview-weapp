<config>
{
    "navigationBarTitleText": "Switch 开关",
    "usingComponents": {
        "i-cell": "/iview/cell/index",
        "i-icon": "/iview/icon/index",
        "i-panel": "/iview/panel/index",
        "i-switch": "/iview/switch/index",
        "i-cell-group": "/iview/cell-group/index"
    }
}
</config>

<template lang="wxml">
    <i-cell-group>
        <i-cell title="基本用法">
            <i-switch value="{{switch1}}" bind:change="onChange" slot="footer"></i-switch>
        </i-cell>
        <i-cell title="自定义内容">
            <i-switch value="{{switch1}}" size="large" bind:change="onChange" slot="footer">
                <view slot="open">开启</view>
                <view slot="close">关闭</view>
            </i-switch>
        </i-cell>
        <i-cell title="图标">
            <i-switch value="{{switch1}}" bind:change="onChange" slot="footer">
                <i-icon type="right" slot="open"></i-icon>
                <i-icon type="close" slot="close"></i-icon>
            </i-switch>
        </i-cell>
        <i-cell title="禁止切换">
            <i-switch value="{{switch1}}" disabled="{{true}}" slot="footer"></i-switch>
        </i-cell>
    </i-cell-group>
</template>

<script>
export default {
    data () {
        return {
            switch1: false,
        }
    },
    methods: {
        onChange (event) {
            const detail = event.detail
            this.switch1 = detail.value
        },
    },
}
</script>

<style lang="scss">

</style>
