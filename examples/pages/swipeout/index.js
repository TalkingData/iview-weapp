const { $Message } = require('../../dist/base/index');

Page({
    data : {
        visible2: false,
        //小程序没有refs，所以只能用动态布尔值控制关闭
        toggle : false,
        toggle2 : false,
        toggle3 : false,
        actions2: [
            {
                name: '删除',
                color: '#ed3f14'
            }
        ],
        actions : [
            {
                name : '喜欢',
                color : '#fff',
                fontsize : '20',
                width : 100,
                icon : 'like',
                background : '#ed3f14'
            },
            {
                name : '返回',
                width : 100,
                color : '#80848f',
                fontsize : '20',
                icon : 'undo'
            }
        ]
    },
    handleCancel2 () {
        this.setData({
            visible2: false,
            toggle : this.data.toggle ? false : true
        });
        console.log( this.data.toggle,111111111 )
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
                actions2: action,
                toggle: this.data.toggle ? false : true
            });
            
        }, 2000);
    },
    handlerCloseButton(){
        this.setData({
            toggle2: this.data.toggle2 ? false : true
        });
    },
    actionsTap(){
        this.setData({
            visible2: true
        });
    },
    toggleButton() { // 因为是watch toggle3 的变化，所以点击其他地方隐藏右侧的button时需要点击两次才能拉出来
        this.setData({
            toggle3: !this.data.toggle3
        })
    }
});