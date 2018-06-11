<config>
{
    "navigationBarTitleText": "ActionSheet 动作面板",
    "usingComponents": {
        "i-button": "/iview/button/index",
        "i-message": "/iview/message/index",
        "i-action-sheet": "/iview/action-sheet/index"
    }
}
</config>

<template lang="wxml">
    <view style="margin-top: 100px">
        <i-button type="ghost" bind:click="handleOpen1">一般用法</i-button>
        <i-button type="ghost" bind:click="handleOpen2">带有提示、异步</i-button>
    </view>

    <i-action-sheet
        show-cancel
        visible="{{ visible1 }}"
        actions="{{ actions1 }}"
        bind:cancel="handleCancel1"
        bind:click="handleClickItem1"
    />

    <i-action-sheet
        show-cancel
        visible="{{ visible2 }}"
        actions="{{ actions2 }}"
        bind:cancel="handleCancel2"
        bind:click="handleClickItem2"
        mask-closable="{{ false }}"
    >
        <view slot="header" style="padding: 16px">
            <view style="color: #444font-size: 16px">确定吗？</view>
            <text>删除后无法恢复哦</text>
        </view>
    </i-action-sheet>

    <i-message id="message" />
</template>

<script>
import { $Message } from '@/iview/base/index'

export default {
    data () {
        return {
            visible1: false,
            actions1: [
                {
                    name: '选项1',
                },
                {
                    name: '选项2',
                },
                {
                    name: '去分享',
                    icon: 'share',
                    openType: 'share',
                },
            ],
            actions2: [
                {
                    name: '删除',
                    color: '#ed3f14',
                },
            ],
        }
    },

    onShareAppMessage () {
        return {
            title: 'iView Weapp',
            imageUrl: 'https://file.iviewui.com/iview-weapp-logo.png',
        }
    },

    methods: {
        handleOpen1 () {
            this.visible1 = true
        },

        handleCancel1 () {
            this.visible1 = false
        },

        handleOpen2 () {
            this.visible2 = true
        },

        handleCancel2 () {
            this.visible2 = false
        },

        handleClickItem1 ({ detail }) {
            const index = detail.index + 1

            $Message({
                content: '点击了选项' + index,
            })
        },

        handleClickItem2 () {
            const action = [...this.data.actions2]
            action[0].loading = true

            this.actions2 = action

            setTimeout(() => {
                action[0].loading = false
                this.visible2 = false
                this.actions2 = action

                $Message({
                    content: '删除成功！',
                    type: 'success',
                })
            }, 2000)
        },
    },
}
</script>

<style lang="scss">
</style>
