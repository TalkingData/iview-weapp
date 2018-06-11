<config>
{
    "navigationBarTitleText": "tag",
    "usingComponents": {
        "i-tag": "/iview/tag/index"
    }
}
</config>

<template lang="wxml">
    <view class="tag-example">
        <view class="one-tag">基本用法</view>
        <i-tag>标签一</i-tag>
        <view class="one-tag">设置边框配置</view>
        <i-tag
            class="i-tags"
            name="标签一"
            type="border"
            color="red">
            标签一
        </i-tag>
        <i-tag
            class="i-tags"
            name="标签一"
            color="green"
            type="border">
            标签一
        </i-tag>
        <view class="one-tag">各种颜色配置</view>
        <i-tag
            class="i-tags"
            name="单个标签">
            标签一
        </i-tag>
        <i-tag
            class="i-tags"
            name="单个标签"
            color="red">
            标签一
        </i-tag>
        <i-tag
            class="i-tags"
            name="标签一"
            color="green">
            标签一
        </i-tag>
        <i-tag
            class="i-tags"
            name="标签一"
            color="blue">
            标签一
        </i-tag>
        <i-tag
            class="i-tags"
            name="标签一"
            color="yellow">
            标签一
        </i-tag>
        <view class="one-tag">多个标签</view>
        <i-tag
            wx:for="{{tags}}"
            wx:key="{{index}}"
            bindchange="onChange"
            checkable="{{true}}"
            name="{{index}}"
            color="{{item.color}}"
            checked="{{item.checked}}"
            type="border"
            style="margin-right:5px;">
            {{item.name}}
        </i-tag>
    </view>
</template>

<script>
export default {
    data () {
        return {
            oneChecked: false,
            tags: [
                {
                    name: '标签一',
                    checked: false,
                    color: 'default',
                },
                {
                    name: '标签二',
                    checked: false,
                    color: 'red',
                },
                {
                    name: '标签三',
                    checked: true,
                    color: 'blue',
                },
                {
                    name: '标签4️',
                    checked: true,
                    color: 'green',
                },
            ],
        }
    },
    methods: {
        oneChange (event) {
            this.oneChecked = event.detail.checked
        },
        onChange (event) {
            const { name, checked } = event.detail
            this.tags[name].checked = checked
        },
    },
}
</script>

<style lang="scss">

.tag-example{
    padding:10px;
}
.one-tag{
    font-size:14px;
    margin:20px 5px 5px 0;
}
.i-tags{
    margin:10px 5px 0 0;
}

</style>
