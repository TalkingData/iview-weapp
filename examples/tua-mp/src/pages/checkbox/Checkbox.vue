<config>
{
    "navigationBarTitleText": "Checkbox 复选",
    "usingComponents":
    {
        "i-panel": "/iview/panel/index",
        "i-button": "/iview/button/index",
        "i-checkbox": "/iview/checkbox/index",
        "i-checkbox-group": "/iview/checkbox-group/index"
    }
}
</config>

<template lang="wxml">
    <i-panel title="group-水果">
        <i-checkbox-group current="{{current}}" bindchange="handleFruitChange">
            <i-checkbox wx:for="{{fruit}}" position="{{position}}" wx:key="{{item.id}}" value="{{item.name}}">
            </i-checkbox>
        </i-checkbox-group>
    </i-panel>

    <i-button bindclick="handleClick" type="ghost">切换复选框位置</i-button>

    <i-panel title="checkbox-动物">
        <i-checkbox value="{{animal}}" disabled="{{disabled}}" checked="{{checked}}" bindchange="handleAnimalChange">
        </i-checkbox>
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
            current: ['苹果', '葡萄'],
            position: 'left',
            animal: '熊猫',
            checked: false,
            disabled: false,
        }
    },
    methods: {
        handleFruitChange ({ detail = {} }) {
            const index = this.current.indexOf(detail.value)
            index === -1
                ? this.current.push(detail.value)
                : this.current.splice(index, 1)
            this.current = this.current
        },
        handleClick () {
            this.position = this.position.indexOf('left') !== -1
                ? 'right'
                : 'left'
        },
        handleDisabled () {
            this.disabled = !this.disabled
        },
        handleAnimalChange ({ detail = {} }) {
            this.checked = detail.current
        },
    },
}
</script>

<style lang="css">
</style>
