<config>
{
    "navigationBarTitleText": "Spin 加载中",
    "usingComponents": {
        "i-col": "/iview/col/index",
        "i-row": "/iview/row/index",
        "i-spin": "/iview/spin/index",
        "i-grid": "/iview/grid/index",
        "i-icon": "/iview/icon/index",
        "i-panel": "/iview/panel/index",
        "i-switch": "/iview/switch/index",
        "i-grid-item": "/iview/grid-item/index"
    }
}
</config>

<template lang="wxml">
    <i-panel title="三种尺寸"></i-panel>

    <i-grid>
        <i-grid-item i-class="item">
            <i-spin size="small"></i-spin>
        </i-grid-item>
        <i-grid-item i-class="item">
            <i-spin></i-spin>
        </i-grid-item>
        <i-grid-item i-class="item">
            <i-spin size="large"></i-spin>
        </i-grid-item>
    </i-grid>

    <i-panel title="居中固定"></i-panel>

    <view class="container">
        <i-spin fix></i-spin>
    </view>

    <i-panel title="自定义内容"></i-panel>

    <i-grid>
        <i-grid-item i-class="item">
            <i-spin custom>加载中...</i-spin>
        </i-grid-item>
        <i-grid-item i-class="item">
            <i-spin custom>
                <i-icon type="refresh" size="20" i-class="icon-load"></i-icon>
                <view>Loading</view>
            </i-spin>
        </i-grid-item>
        <i-grid-item i-class="item">
            <i-spin custom>
                <view class="loading"></view>
            </i-spin>
        </i-grid-item>
    </i-grid>

    <i-panel title="切换显示状态"></i-panel>

    <view class="spin-article">
        <view class="title">登金陵凤凰台</view>
        <view class="name">李白</view>
        <view class="article">
            <view>凤凰台上凤凰游，凤去台空江自流。</view>
            <view>吴宫花草埋幽径，晋代衣冠成古丘。</view>
            <view>三山半落青天外，二水中分白鹭洲。</view>
            <view>总为浮云能蔽日，长安不见使人愁。</view>
        </view>

        <i-spin size="large" fix wx:if="{{ spinShow }}"></i-spin>
    </view>

    <view class="switch">
        <i-switch value="{{ switch }}" bindchange="onSwitchChange"></i-switch>
    </view>
</template>

<script>
export default {
    data () {
        return {
            switch: false,
            spinShow: true,
        }
    },
    methods: {
        onSwitchChange ({ detail }) {
            const value = detail.value
            this.switch = value
            this.spinShow = !value
        },
    },
}
</script>

<style lang="scss">

.item {
    height: 100px;
    text-align: center;
}
.container{
    display: block;
    width: 200px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    border: 1px solid #eee;
}

@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.icon-load {
    animation: ani-demo-spin 1s linear infinite;
}

.loading {
    display: inline-block;
    margin-right: 12px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    border: 2px solid #2d8cf0;
    border-color: #2d8cf0 #2d8cf0 #2d8cf0 transparent;
    animation: loading-spin 0.6s linear;
    animation-iteration-count: infinite;
}

@keyframes loading-spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.spin-article {
    width: 100%;
    height: 200px;
    padding: 10px;
    position: relative;
    border: 1px solid #eee;
    text-align: center;
    box-sizing: border-box;
}
.title {
    font-size: 22px;
}
.name {
    color: #999;
    font-style: normal;
    font-size: 14px;
}
.switch {
    margin: 10px;
}

</style>
