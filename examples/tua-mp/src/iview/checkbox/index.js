const prefixCls = 'i-checkbox';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../checkbox-group/index': {
            type: 'parent'
        }
    },
    properties: {
        value: {
            type: String,
            value: ''
        },
        checked: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        color: {
            type: String,
            value: '#2d8cf0'
        },
        position: {
            type: String,
            value: 'left', //left right
            observer: 'setPosition'
        }
    },
    data: {
        checked: true,
        positionCls: `${prefixCls}-checkbox-left`,
    },
    attached() {
        this.setPosition();
    },
    methods: {
        changeCurrent(current) {
            this.setData({ checked: current });
        },
        checkboxChange() {
            if (this.data.disabled) return;
            const item = { current: !this.data.checked, value: this.data.value };
            const parent = this.getRelationNodes('../checkbox-group/index')[0];
            parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
        },
        setPosition() {
            this.setData({
                positionCls: this.data.position.indexOf('left') !== -1 ? `${prefixCls}-checkbox-left` : `${prefixCls}-checkbox-right`,
            });
        }
    }
});
