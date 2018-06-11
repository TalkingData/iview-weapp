<config>
{
    "navigationBarTitleText": "Progress 进度条",
    "usingComponents": {
        "i-button": "/iview/button/index",
        "i-progress": "/iview/progress/index"
    }
}
</config>

<template lang="wxml">
    <view class="progress-item">
        <i-progress percent="25"></i-progress>
        <i-progress percent="45" status="active"></i-progress>
        <i-progress percent="65" status="wrong"></i-progress>
        <i-progress percent="100" status="success"></i-progress>
        <i-progress percent="25" hide-info></i-progress>
    </view>

    <view class="progress-item">
        <i-progress percent="{{ percent }}" status="{{ status }}"></i-progress>
        <i-button bindclick="handleAdd" type="ghost">增加</i-button>
        <i-button bindclick="handleReduce" type="ghost">减少</i-button>
    </view>
</template>

<script>
export default {
    data () {
        return {
            percent: 0,
            status: 'normal',
        }
    },
    handleAdd () {
        if (this.percent === 100) return

        this.percent = this.data.percent + 10

        if (this.percent === 100) {
            this.status = 'success'
        }
    },
    handleReduce () {
        if (this.percent === 0) return

        this.percent -= 10
        this.status = 'normal'
    },
}
</script>

<style lang="css">

.progress-item{
    padding: 12px;
}

</style>
