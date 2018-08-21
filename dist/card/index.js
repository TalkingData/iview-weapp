Component({
    externalClasses: ["i-class"],

    options: {
        multipleSlots: true
    },

    properties: {
        full: {
            type: Boolean,
            value: false
        },
        thumb: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        extra: {
            type: String,
            value: ""
        },
        icon: {
            type: String,
            value: ""
        },
        size: {
            type: Number,
            value: 14
        },
        extraColor: {
            type: String,
            value: ""
        }
    }
});
