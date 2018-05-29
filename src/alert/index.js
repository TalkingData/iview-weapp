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
            observer: 'setIconType'
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
        iconType: '',
    },
    methods: {
        setIconType() {
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
