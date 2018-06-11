<config>
{
    "navigationBarTitleText": "iView Weapp",
    "usingComponents": {
        "i-cell": "/iview/cell/index",
        "i-panel": "/iview/panel/index",
        "i-cell-group": "/iview/cell-group/index"
    }
}
</config>

<template lang="wxml">
    <view class="logo">
        <image src="/assets/logo.png" mode="aspectFit"></image>
    </view>
    <i-panel title="布局">
        <i-cell-group>
            <i-cell title="Layout 栅格布局" is-link url="/pages/layout/layout"></i-cell>
            <i-cell title="Grid 宫格" is-link url="/pages/grid/grid"></i-cell>
            <i-cell title="Panel 面板" is-link url="/pages/panel/panel"></i-cell>
            <i-cell title="List 列表" is-link url="/pages/list/list"></i-cell>
            <i-cell title="Card 卡片" is-link url="/pages/card/card"></i-cell>
        </i-cell-group>
    </i-panel>
    <i-panel title="基础组件">
        <i-cell-group>
            <i-cell title="Button 按钮" is-link url="/pages/button/button"></i-cell>
            <i-cell title="Color 色彩" is-link url="/pages/color/color"></i-cell>
            <i-cell title="Icon 图标" is-link url="/pages/icon/icon"></i-cell>
        </i-cell-group>
    </i-panel>
    <i-panel title="导航">
        <i-cell-group>
            <i-cell title="TabBar 标签栏" is-link url="/pages/tab-bar/tab-bar"></i-cell>
            <i-cell title="Tabs 标签页" is-link url="/pages/tabs/tabs"></i-cell>
            <i-cell title="Drawer 抽屉" is-link url="/pages/drawer/drawer"></i-cell>
            <i-cell title="Page 分页" is-link url="/pages/page/page"></i-cell>
            <i-cell title="Steps 步骤条" is-link url="/pages/steps/steps"></i-cell>
            <i-cell title="NoticeBar 通告栏" is-link url="/pages/notice-bar/notice-bar"></i-cell>
        </i-cell-group>
    </i-panel>
    <i-panel title="操作反馈">
        <i-cell-group>
            <i-cell title="ActionSheer 动作面板" is-link url="/pages/action-sheet/action-sheet"></i-cell>
            <i-cell title="Toast 轻提示" is-link url="/pages/toast/toast"></i-cell>
            <i-cell title="Modal 对话框" is-link url="/pages/modal/modal"></i-cell>
            <i-cell title="Message 全局提醒" is-link url="/pages/message/message"></i-cell>
            <i-cell title="Spin 加载中" is-link url="/pages/spin/spin"></i-cell>
        </i-cell-group>
    </i-panel>
    <i-panel title="视图">
        <i-cell-group>
            <i-cell title="Badge 徽章" is-link url="/pages/badge/badge"></i-cell>
            <i-cell title="Alert 警告提示" is-link url="/pages/alert/alert"></i-cell>
            <i-cell title="Tag 标签" is-link url="/pages/tag/tag"></i-cell>
            <i-cell title="Progress 进度条" is-link url="/pages/progress/progress"></i-cell>
            <i-cell title="Avatar 头像" is-link url="/pages/avatar/avatar"></i-cell>
        </i-cell-group>
    </i-panel>
    <i-panel title="表单">
        <i-cell-group>
            <i-cell title="Input 输入框" is-link url="/pages/input/input"></i-cell>
            <i-cell title="Radio 单选" is-link url="/pages/radio/radio"></i-cell>
            <i-cell title="Checkbox 复选" is-link url="/pages/checkbox/checkbox"></i-cell>
            <i-cell title="Switch 开关" is-link url="/pages/switch/switch"></i-cell>
            <i-cell title="Rate 评分" is-link url="/pages/rate/rate"></i-cell>
            <i-cell title="InputNumber 数字输入框" is-link url="/pages/input-number/input-number"></i-cell>
        </i-cell-group>
    </i-panel>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
    },
    onShareAppMessage () {
        return {
            title: 'iView Weapp',
            imageUrl: 'https://file.iviewui.com/iview-weapp-logo.png',
        }
    },
}
</script>

<style lang="css">

.logo{
    text-align: center;
}
.logo image{
    display: block;
    margin: 0 auto;
}

</style>
