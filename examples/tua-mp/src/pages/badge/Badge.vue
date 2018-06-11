<config>
{
    "navigationBarTitleText": "Badge 徽章",
    "usingComponents": {
        "i-badge": "/iview/badge/index"
    }
}
</config>

<template lang="wxml">
    <view class="container">
        <view class="demo">
            <i-badge dot>
                <view class="demo-badge"></view>
            </i-badge>
        </view>
        <view class="demo">
            <i-badge count="3">
                <view class="demo-badge"></view>
            </i-badge>
        </view>
        <view class="demo">
            <i-badge count="123" overflow-count="100">
                <view class="demo-badge"></view>
            </i-badge>
        </view>
        <view class="demo">
            <i-badge count="66">
            </i-badge>
        </view>
        <view class="demo">
            <i-badge count="66" i-class-alone="demo-badge-alone">
            </i-badge>
        </view>
    </view>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.container {
    margin: 10px;
}

.demo {
    margin: 20px;
}

.demo-badge {
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}

.demo-badge-alone {
    background: #5cb85c!important;
}

</style>
