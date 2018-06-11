<config>
{
    "navigationBarTitleText": "Radio 单选",
    "usingComponents": {
        "i-panel": "/iview/panel/index",
        "i-radio": "/iview/radio/index",
        "i-button": "/iview/button/index",
        "i-radio-group": "/iview/radio-group/index"
    }
}
</config>

<template lang="wxml">
    <i-panel title="group-水果">
        <i-radio-group current="{{current}}" bindchange="handleFruitChange">
            <i-radio wx:for="{{fruit}}" position="{{position}}" wx:key="{{item.id}}" value="{{item.name}}">
            </i-radio>
        </i-radio-group>
    </i-panel>

    <i-button bindclick="handleClick" type="ghost">切换单选框位置</i-button>

    <i-panel title="radio-动物">
        <i-radio value="{{animal}}" disabled="{{disabled}}" checked="{{checked}}" bindchange="handleAnimalChange">
        </i-radio>
    </i-panel>

    <i-button bindclick="handleDisabled" type="ghost">切换disabled状态</i-button>
</template>

<script>
export default {
    data () {
        return {
            fruit: [{
                id: 1,
                name: '香蕉',
            }, {
                id: 2,
                name: '苹果',
            }, {
                id: 3,
                name: '西瓜',
            }, {
                id: 4,
                name: '葡萄',
            }],
            current: '苹果',
            position: 'left',
            animal: '熊猫',
            checked: false,
            disabled: false,
        }
    },
    methods: {
        handleFruitChange ({ detail = {} }) {
            this.current = detail.value
        },
        handleClick () {
            this.position = this.data.position.indexOf('left') !== -1 ? 'right' : 'left'
        },
        handleDisabled () {
            this.disabled = !this.data.disabled
        },
        handleAnimalChange ({ detail = {} }) {
            this.checked = detail.current
        },
    },
}
</script>

<style lang="css">


</style>
