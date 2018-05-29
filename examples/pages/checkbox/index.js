Page({
    data: {
        fruit: [{
            id: 1,
            name: '香蕉',
        }, {
            id: 2,
            name: '苹果'
        }, {
            id: 3,
            name: '西瓜'
        }, {
            id: 4,
            name: '葡萄',
        }],
        current: ['苹果', '葡萄'],
        position: 'left',
        animal: '熊猫',
        checked: false,
        disabled: false,
    },
    handleFruitChange({ detail = {} }) {
        const index = this.data.current.indexOf(detail.value);
        index === -1 ? this.data.current.push(detail.value) : this.data.current.splice(index, 1);
        this.setData({
            current: this.data.current
        });
    },
    handleClick() {
        this.setData({
            position: this.data.position.indexOf('left') !== -1 ? 'right' : 'left',
        });
    },
    handleDisabled() {
        this.setData({
            disabled: !this.data.disabled
        });
    },
    handleAnimalChange({ detail = {} }) {
        this.setData({
            checked: detail.current
        });
    },

});
