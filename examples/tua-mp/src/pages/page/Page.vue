<config>
{
    "navigationBarTitleText": "Page 分页",
    "usingComponents": {
        "i-page": "/iview/page/index",
        "i-icon": "/iview/icon/index",
        "i-panel": "/iview/panel/index"
    }
}
</config>

<template lang="wxml">
    <i-panel title="带有文字的按钮"></i-panel>

    <i-page current="{{ current }}" total="5" bind:change="handleChange">
        <view slot="prev">Prev</view>
        <view slot="next">Next</view>
    </i-page>

    <i-panel title="带有文字和图标的按钮"></i-panel>

    <i-page current="{{ current }}" total="5" bind:change="handleChange">
        <view slot="prev">
            <i-icon type="return"></i-icon>
            上一步
        </view>
        <view slot="next">
            下一步
            <i-icon type="enter"></i-icon>
        </view>
    </i-page>

    <i-panel title="隐藏数字"></i-panel>

    <i-page current="{{ current }}" total="5" simple bind:change="handleChange">
        <view slot="prev">Prev</view>
        <view slot="next">Next</view>
    </i-page>

    <i-panel title="只显示数字"></i-panel>

    <i-page current="{{ current }}" total="5" mode="number" bind:change="handleChange"></i-page>

    <i-panel title="显示点"></i-panel>

    <i-page current="{{ current }}" total="5" mode="pointer" bind:change="handleChange"></i-page>
</template>

<script>
export default {
    data () {
        return {
            current: 1,
        }
    },
    methods: {
        handleChange ({ detail }) {
            const type = detail.type

            if (type === 'next') {
                this.current += 1
            } else if (type === 'prev') {
                this.current -= 1
            }
        },
    },
}
</script>

<style lang="css">


</style>
