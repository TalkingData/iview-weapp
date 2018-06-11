<config>
{
    "navigationBarTitleText": "InputNumber 数字输入框",
    "usingComponents": {
        "i-panel": "/iview/panel/index",
        "i-input-number": "/iview/input-number/index"
    }
}
</config>

<template lang="wxml">
    <i-panel title="基础用法">
        <view style="padding: 16px">
            <i-input-number value="{{ value1 }}" min="0" max="100" bindchange="handleChange1" />
        </view>
    </i-panel>

    <i-panel title="小数">
        <view style="padding: 16px">
            <i-input-number value="{{ value2 }}" min="0" max="100" step="0.2" bindchange="handleChange2" />
        </view>
    </i-panel>
</template>

<script>
export default {
    data () {
        return {
            value1: 1,
            value2: 0.1,
        }
    },
    methods: {
        handleChange1 ({ detail }) {
            this.value1 = detail.value
        },
        handleChange2 ({ detail }) {
            this.value2 = detail.value
        },
    },
}
</script>

<style lang="css">


</style>
