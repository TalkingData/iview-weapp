<config>
{
    "navigationBarTitleText": "Color 色彩",
    "usingComponents": {
        "i-col": "/iview/col/index",
        "i-row": "/iview/row/index",
        "i-card": "/iview/card/index",
        "i-panel": "/iview/panel/index"
    }
}
</config>

<template lang="wxml">
    <i-panel title="主色"></i-panel>
    <i-row>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item primary">
                    <view class="color-item-title">Primary</view>
                    <view class="color-item-content">#2d8cf0</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item light-primary">
                    <view class="color-item-title">Light Primary</view>
                    <view class="color-item-content">#5cadff</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item dark-primary">
                    <view class="color-item-title">Dark Primary</view>
                    <view class="color-item-content">#2b85e4</view>
                </view>
            </i-card>
        </i-col>
    </i-row>
    <i-panel title="辅助色"></i-panel>
    <i-row>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item success">
                    <view class="color-item-title">Success</view>
                    <view class="color-item-content">#19be6b</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item warning">
                    <view class="color-item-title">Warning</view>
                    <view class="color-item-content">#ff9900</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item error">
                    <view class="color-item-title">Error</view>
                    <view class="color-item-content">#ed3f14</view>
                </view>
            </i-card>
        </i-col>
    </i-row>
    <i-panel title="中性色"></i-panel>
    <i-row>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item title">
                    <view class="color-item-title">标题 Title</view>
                    <view class="color-item-content">#1c2438</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item content">
                    <view class="color-item-title">正文 Content</view>
                    <view class="color-item-content">#495060</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item sub-color">
                    <view class="color-item-title">辅助 Sub Color</view>
                    <view class="color-item-content">#ed3f14</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item disabled">
                    <view class="color-item-title">失效 Disabled</view>
                    <view class="color-item-content">#bbbec4</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item border dark">
                    <view class="color-item-title">边框 Border</view>
                    <view class="color-item-content">#dddee1</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item divider dark">
                    <view class="color-item-title">分割线 Divider</view>
                    <view class="color-item-content">#e9eaec</view>
                </view>
            </i-card>
        </i-col>
        <i-col i-class="color-col" span="12">
            <i-card i-class="color">
                <view slot="content" class="color-item background dark">
                    <view class="color-item-title">背景 Background</view>
                    <view class="color-item-content">#f8f8f9</view>
                </view>
            </i-card>
        </i-col>
    </i-row>
</template>

<script>
export default {
}
</script>

<style lang="css">

.color{
    padding: 0 !important;
    border: none !important;
}
.color-col{
    margin-bottom: 16px;
}
.color-item{
    width: 100%;
    color: #fff;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
}
.color-item.dark{
    color: #657180;
}
.color-item-title{
    padding: 6px 6px 0;
    font-size: 14px;
}
.color-item-content{
    padding: 6px;
    font-size: 12px;
    opacity: 0.7;
}

.color-item.primary{
    background: #2d8cf0;
}
.color-item.light-primary{
    background: #5cadff;
}
.color-item.dark-primary{
    background: #2b85e4;
}
.color-item.success{
    background: #19be6b;
}
.color-item.warning{
    background: #ff9900;
}
.color-item.error{
    background: #ed3f14;
}
.color-item.title{
    background: #1c2438;
}
.color-item.content{
    background: #495060;
}
.color-item.sub-color{
    background: #80848f;
}
.color-item.disabled{
    background: #bbbec4;
}
.color-item.border{
    background: #dddee1;
}
.color-item.divider{
    background: #e9eaec;
}
.color-item.background{
    background: #f8f8f9;
}

</style>
