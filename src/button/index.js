Component({
    externalClasses: ['i-class'],

    properties: {
        // default, primary, ghost, info, success, warning, error
        type: {
            type: String,
            value: '',
        },
        inline: {
            type: Boolean,
            value: false
        },
        // default, large, small
        size: {
            type: String,
            value: '',
        },
        // circle, square
        shape: {
            type: String,
            value: 'square'
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        loading: {
            type: Boolean,
            value: false,
        },
        long: {
            type: Boolean,
            value: false
        },
        openType: String,
        appParameter: String,
        hoverStopPropagation: Boolean,
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        lang: {
            type: String,
            value: 'en'
        },
        sessionFrom: {
            type: String,
            value: ''
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },

    methods: {
        handleTap () {
            if (this.data.disabled) return false;

            this.triggerEvent('click');
        },
        bindgetuserinfo({ detail = {} } = {}) {
            this.triggerEvent('getuserinfo', detail);
        },
        bindcontact({ detail = {} } = {}) {
            this.triggerEvent('contact', detail);
        },
        bindgetphonenumber({ detail = {} } = {}) {
            this.triggerEvent('getphonenumber', detail);
        },
        binderror({ detail = {} } = {}) {
            this.triggerEvent('error', detail);
        }
    }
});
