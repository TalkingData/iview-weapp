const prefixCls = 'i-drawer';

Component({
    externalClasses: ['i-class'],
    properties: {
        show: {
            type: Boolean,
            value: false,
            observer: 'initCls'
        },

        overlay: {
            type: Boolean,
            value: true
        },

        closeOverlay: {
            type: Boolean,
            value: true
        },

        // left right
        type: {
            type: String,
            value: 'left'
        }
    },
    data: {
        wrapClasses: [],
        showCls: `${prefixCls}-show`,
        maskClasses: `${prefixCls}-mask`,
        containerClasses: `${prefixCls}-container`,
    },
    attached() {
        this.initCls();
    },
    methods: {
        initCls() {
            this.setData({
                wrapClasses: [this.wrapClasses()]
            })
        },
        wrapClasses() {
            return [
                `${prefixCls}`,
                this.data.show ? `${prefixCls}-show` : '',
                `${prefixCls}-${this.data.type}`,
            ];
        },

        handleMaskClick() {
            if (!this.data.closeOverlay) {
                return;
            }
            this.triggerEvent('close', {});
        }
    }
});
