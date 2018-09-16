Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab-bar-item/index': {
            type: 'child',
            linked () {
                this.changeCurrent();
            },
            linkChanged () {
                this.changeCurrent();
            },
            unlinked () {
                this.changeCurrent();
            }
        }
    },

    properties: {
        current: {
            type: String,
            value: '',
            observer: 'changeCurrent'
        },
        color: {
            type: String,
            value: ''
        },
        fixed: {
            type: Boolean,
            value: false
        }
    },

    data: {
        list: []
    },

    methods: {
        changeCurrent (val = this.data.current) {
            let items = this.getRelationNodes('../tab-bar-item/index');
            const len = items.length;

            if (len > 0) {
                const list = [];
                items.forEach(item => {
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(this.data.color);
                    list.push({
                        key: item.data.key
                    });
                });
                this.setData({
                    list: list
                });
            }
        },
        emitEvent (key) {
            this.triggerEvent('change', { key });
        },
        handleClickItem (e) {
            const key = e.currentTarget.dataset.key;
            this.emitEvent(key);
        }
    }
});
