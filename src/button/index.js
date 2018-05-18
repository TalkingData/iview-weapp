Component({
    externalClasses: ['i-class'],

    properties: {
        // default, primary, ghost, dashed, text, info, success, warning, error
        type: {
            type: String,
            value: '',
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
        }
    },

    methods: {
        handleTap () {
            if (this.data.disabled) return false;

            this.triggerEvent('click');
        }
    }
});
