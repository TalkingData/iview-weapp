const { $Message } = require('../../dist/base/index');

Page({
    data : {
        visible2: false,
        //小程序没有refs，所以只能用动态布尔值控制关闭
        toggle : false,
        toggle2 : false,
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
    }
});