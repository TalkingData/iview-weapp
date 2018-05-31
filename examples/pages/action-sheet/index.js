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
            }
        ],
        actions2: [
            {
                name: '取消',
            },
            {
                name: '删除',
                color: '#ed3f14'
            }
        ]
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

    handleClickItem2 ({ detail }) {
        const index = detail.index;
        if (index === 0) {
            this.setData({
                visible2: false
            });
        } else if (index === 1) {
            const action = [...this.data.actions2];
            action[index].loading = true;

            this.setData({
                actions2: action
            });

            setTimeout(() => {
                action[index].loading = false;
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
    }
});