const default_data = {
    visible: false,
    content: '',
    icon: '',
    image: '',
    duration: 2,
    mask: true,
    type: 'default', // default || success || warning || error || loading
};

let timmer = null;

Component({
    externalClasses: ['i-class'],

    data: {
        ...default_data
    },

    methods: {
        handleShow (options) {
            this.setData({
                ...options,
                visible: true
            });

            const duration = this.data.duration * 1000;

            if (timmer) clearTimeout(timmer);
            if (duration !== 0) {
                timmer = setTimeout(() => {
                    this.handleHide();
                    timmer = null;
                }, duration);
            }
        },

        handleHide () {
            this.setData({
                ...default_data
            });
        }
    }
});
