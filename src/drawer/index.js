Component({
    externalClasses: ['i-class'],
    properties: {
        visible: {
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

        mode: {
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
