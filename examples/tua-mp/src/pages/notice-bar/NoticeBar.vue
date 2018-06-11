<config>
{
    "navigationBarTitleText": "NoticeBar 通告栏",
    "usingComponents": {
        "i-panel": "/iview/panel/index",
        "i-notice-bar": "/iview/notice-bar/index"
    }
}
</config>

<template lang="wxml">
    <i-panel title="通告栏">
        <i-notice-bar>
            2018年世界杯,将于6月14日至7月15日举行
        </i-notice-bar>
    </i-panel>
    <i-panel title="icon 通告栏">
        <i-notice-bar icon="systemprompt">
            2018年世界杯,将于6月14日至7月15日举行
        </i-notice-bar>
    </i-panel>
    <i-panel title="关闭 通告栏">
        <i-notice-bar icon="systemprompt" closable>
            2018年世界杯,将于6月14日至7月15日举行
        </i-notice-bar>
    </i-panel>
    <i-panel title="滚动 通告栏">
        <i-notice-bar icon="systemprompt" loop>
            2018年世界杯,将于6月14日至7月15日举行;2018年世界杯,将于6月14日至7月15日举行;
        </i-notice-bar>
    </i-panel>
</template>

<script>
export default {
    data () {
        return {
            switch1: true,
        }
    },
    methods: {
        onChange (event) {
            const detail = event.detail
            this.switch1 = detail.value
        },
    },
}
</script>

<style lang="css">


</style>
