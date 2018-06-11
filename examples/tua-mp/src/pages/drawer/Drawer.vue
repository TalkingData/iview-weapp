<config>
{
    "navigationBarTitleText": "Drawer 抽屉",
    "usingComponents": {
        "i-button": "/iview/button/index",
        "i-drawer": "/iview/drawer/index"
    }
}
</config>

<template lang="wxml">
    <view class="demo">
        <i-button bind:click="toggleLeft1" type="ghost">左边弹出1</i-button>
        <i-button bind:click="toggleLeft2" type="primary">左边弹出2</i-button>
        <i-button bind:click="toggleRight1" type="ghost">右边弹出1</i-button>
        <i-button bind:click="toggleRight2" type="primary">右边弹出2</i-button>
        <i-drawer mode="left" visible="{{showLeft1}}" bind:close="toggleLeft1">
            <view class="demo-container">
                单击遮罩层关闭
            </view>
        </i-drawer>
        <i-drawer mode="left" visible="{{showLeft2}}" mask-closable="{{false}}">
            <view class="demo-container">
                禁止单击遮罩关闭
                <i-button bind:click="toggleLeft2" type="primary">关闭</i-button>
            </view>
        </i-drawer>
        <i-drawer mode="right" visible="{{showRight1}}" bind:close="toggleRight1">
            <view class="demo-container">
                单击遮罩层关闭
            </view>
        </i-drawer>
        <i-drawer mode="right" visible="{{showRight2}}" mask-closable="{{false}}">
            <view class="demo-container">
                禁止单击遮罩关闭
                <i-button bind:click="toggleRight2" type="primary">关闭</i-button>
            </view>
        </i-drawer>
    </view>
</template>

<script>
export default {
    data () {
        return {
            showLeft1: false,
            showLeft2: false,
            showRight1: false,
            showRight2: false,
        }
    },
    methods: {
        toggleLeft1 () {
            this.showLeft1 = !this.showLeft1
        },
        toggleLeft2 () {
            this.showLeft2 = !this.showLeft2
        },
        toggleRight1 () {
            this.showRight1 = !this.showRight1
        },
        toggleRight2 () {
            this.showRight2 = !this.showRight2
        },
    },
}
</script>

<style lang="css">

.demo-container{
    width:50vw;
    height: 100vh;
    background:#fff;
}

</style>
