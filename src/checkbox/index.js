const prefixCls = 'i-checkbox';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../checkbox-group/index': {
            type: 'parent'
        }
    },
    properties: {
        title: {
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
        iconPosition: {
            type: String,
            value: 'left',
            observer: 'setIconPosition'
        }
    },
    data: {
        checked: true,
        wrapClasses: [],
        iconType: 'circle',
        iconColor: '',
        iconCls: `${prefixCls}-icon-left`,
        iconDisabled: `${prefixCls}-icon-disabled`,
    },
    attached() {
        this.initCls();
        this.setIcon();
        this.setIconPosition();
    },
    methods: {
        initCls() {
            this.setData({
                wrapClasses: this.wrapClasses(),
            })
        },
        wrapClasses() {
            return [
                `${prefixCls}`,
            ];
        },
        changeCurrent(current) {
            this.setData({ checked: current });
            this.setIcon();
        },
        checkboxChange() {
            if (this.data.disabled) return;
            const item = { current: !this.data.checked, title: this.data.title };
            const parent = this.getRelationNodes('../checkbox-group/index')[0];
            parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
            this.setIcon();
        },
        setIcon() {
            this.setData({
                iconType: this.data.checked ? 'success' : 'circle',
                iconColor: this.data.checked ? this.data.color : '',
            });
        },
        setIconPosition() {
            this.setData({
                iconCls: this.data.iconPosition.indexOf('left') !== -1 ? `${prefixCls}-icon-left` : `${prefixCls}-icon-right`,
            });
        }
    }
});
