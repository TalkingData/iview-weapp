const { $Message } = require('../../dist/base/index');

Page({
    data: {
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        actions3: [
            {
                name: '现金支付',
                color: '#2d8cf0',
            },
            {
                name: '微信支付',
                color: '#19be6b'
            },
            {
                name: '取消'
            }
        ],
        actions4: [
            {
                name: '按钮1'
            },
            {
                name: '按钮2',
                color: '#ff9900'
            },
            {
                name: '按钮3',
                icon: 'search'
            }
        ],
        actions5: [
            {
                name: '取消'
            },
            {
                name: '删除',
                color: '#ed3f14',
                loading: false
            }
        ]
    },

    handleOpen1 () {
        this.setData({
            visible1: true
        });
    },

    handleClose1 () {
        this.setData({
            visible1: false
        });
    },

    handleOpen2 () {
        this.setData({
            visible2: true
        });
    },

    handleClose2 () {
        this.setData({
            visible2: false
        });
    },

    handleOpen3 () {
        this.setData({
            visible3: true
        });
    },

    handleClick3 ({ detail }) {
        const index = detail.index;

        if (index === 0) {
            $Message({
                content: '点击了现金支付'
            });
        } else if (index === 1) {
            $Message({
                content: '点击了微信支付'
            });
        }

        this.setData({
            visible3: false
        });
    },

    handleOpen4 () {
        this.setData({
            visible4: true
        });
    },

    handleClick4 () {
        this.setData({
            visible4: false
        });
    },

    handleOpen5 () {
        this.setData({
            visible5: true
        });
    },

    handleClick5 ({ detail }) {
        if (detail.index === 0) {
            this.setData({
                visible5: false
            });
        } else {
            const action = [...this.data.actions5];
            action[1].loading = true;

            this.setData({
                actions5: action
            });

            setTimeout(() => {
                action[1].loading = false;
                this.setData({
                    visible5: false,
                    actions5: action
                });
                $Message({
                    content: '删除成功！',
                    type: 'success'
                });
            }, 2000);
        }
    }
});