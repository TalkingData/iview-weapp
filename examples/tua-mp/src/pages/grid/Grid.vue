<config>
{
    "navigationBarTitleText": "Grid 宫格",
    "usingComponents": {
        "i-row": "/iview/row/index",
        "i-grid": "/iview/grid/index",
        "i-icon": "/iview/icon/index",
        "i-grid-item": "/iview/grid-item/index",
        "i-grid-icon": "/iview/grid-icon/index",
        "i-grid-label": "/iview/grid-label/index"
    }
}
</config>

<template lang="wxml">
    <i-grid>
        <i-row>
            <i-grid-item>
                <i-grid-icon>
                    <i-icon size="24" type="activity" />
                    <i-grid-label>宫格</i-grid-label>
                </i-grid-icon>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <i-icon size="24" type="addressbook" />
                    <i-grid-label>宫格</i-grid-label>
                </i-grid-icon>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <i-icon size="24" type="barrage" />
                    <i-grid-label>宫格</i-grid-label>
                </i-grid-icon>
            </i-grid-item>
        </i-row>
        <i-row>
            <i-grid-item>
                <i-grid-icon>
                    <i-icon size="24" type="collection" />
                    <i-grid-label>宫格</i-grid-label>
                </i-grid-icon>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <i-icon size="24" type="computer" />
                    <i-grid-label>宫格</i-grid-label>
                </i-grid-icon>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <i-icon size="24" type="coupons" />
                    <i-grid-label>宫格</i-grid-label>
                </i-grid-icon>
            </i-grid-item>
        </i-row>
        <i-row>
            <i-grid-item>
                <i-grid-icon>
                    <i-icon size="24" type="flag" />
                    <i-grid-label>宫格</i-grid-label>
                </i-grid-icon>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <i-icon size="24" type="interactive" />
                    <i-grid-label>宫格</i-grid-label>
                </i-grid-icon>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <i-icon size="24" type="mail" />
                    <i-grid-label>宫格</i-grid-label>
                </i-grid-icon>
            </i-grid-item>
        </i-row>
    </i-grid>
</template>

<script>
export default {
    data () {
        return {
            isAdd: false,
        }
    },
    methods: {
        handleAdd () {
            this.isAdd = !this.isAdd
        },
    },
}
</script>

<style lang="css">

.row-class{
    background: #fff;
}
.col-class{
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    background: #2d8cf0;
    font-size: 12px;
}
.col-class.light{
    background: #5cadff;
}

</style>
