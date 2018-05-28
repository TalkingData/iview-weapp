Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab/index': {
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
        scroll: {
            type: Boolean,
            value: false
        },
        fixed: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        changeCurrent (val = this.data.current) {
            let items = this.getRelationNodes('../tab/index');
            const len = items.length;

            if (len > 0) {
                items.forEach(item => {
                    item.changeScroll(this.data.scroll);
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(this.data.color);
                });
            }
        },
        emitEvent (key) {
            this.triggerEvent('change', { key });
        }
    }
});
