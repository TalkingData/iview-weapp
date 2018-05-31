const { $Message } = require('../../dist/base/index');

Page({
    data: {
        visible1: false,
        actions1: [
            {
                name: '选项1',
            },
            {
                name: '选项2'
            },
            {
                name: '去分享',
                icon: 'share',
                openType: 'share'
            }
        ],
        actions2: [
            {
                name: '删除',
                color: '#ed3f14'
            }
        ]
    },

    onShareAppMessage() {
        return {
            title: 'iView Weapp',
            imageUrl: 'https://file.iviewui.com/iview-weapp-logo.png'
        };
    },

    handleOpen1 () {
        this.setData({
            visible1: true
        });
    },

    handleCancel1 () {
        this.setData({
            visible1: false
        });
    },

    handleOpen2 () {
        this.setData({
            visible2: true
        });
    },

    handleCancel2 () {
        this.setData({
            visible2: false
        });
    },

    handleClickItem1 ({ detail }) {
        const index = detail.index + 1;

        $Message({
            content: '点击了选项' + index
        });
    },

    handleClickItem2 () {
        const action = [...this.data.actions2];
        action[0].loading = true;

        this.setData({
            actions2: action
        });

        setTimeout(() => {
            action[0].loading = false;
            this.setData({
                visible2: false,
                actions2: action
            });
            $Message({
                content: '删除成功！',
                type: 'success'
            });
        }, 2000);
    }
});