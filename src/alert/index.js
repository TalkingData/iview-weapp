const prefixCls = 'i-alert';

Component({
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        //info, success, warning, error
        type: {
            type: String,
            value: 'info',
        },
        closable: {
            type: Boolean,
            value: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        desc: {
            type: Boolean,
            default: false
        },
    },
    data: {
        closed: false,
        wrapClasses: [],
        iconClasses: '',
        iconType: '',
    },
    ready() {
        this.initCls();
        this.iconType();
    },
    methods: {
        initCls() {
            this.setData({
                wrapClasses: this.wrapClasses(),
                iconClasses: this.iconClasses(),
            })
        },
        wrapClasses() {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.data.type}`,
                this.data.showIcon ? `${prefixCls}-with-icon` : '',
                this.data.desc ? [`${prefixCls}-with-desc`] : '',
            ];
        },
        iconClasses() {
            return `${prefixCls}-icon`;
        },
        iconType() {
            let type = '';

            switch (this.data.type) {
                case 'success':
                    type = 'success';
                    break;
                case 'info':
                    type = 'prompt';
                    break;
                case 'warning':
                    type = 'warning';
                    break;
                case 'error':
                    type = 'delete';
                    break;
            }
            this.setData({
                iconType: type
            });
        },
        handleTap() {
            this.setData({
                closed: !this.data.closed,
            });
            this.triggerEvent('click');
        },

    }
});
