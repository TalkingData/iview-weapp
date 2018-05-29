Component({
    externalClasses: ['i-class'],
    properties: {
        show: {
            type: Boolean,
            value: false
        },

        overlay: {
            type: Boolean,
            value: true
        },

        closeOverlay: {
            type: Boolean,
            value: true
        },

        type: {
            type: String,
            value: 'left' // left right
        }
    },
    data: {},
    methods: {
        handleMaskClick() {
            if (!this.data.closeOverlay) {
                return;
            }
            this.triggerEvent('close', {});
        }
    }
});
