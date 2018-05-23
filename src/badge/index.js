const prefixCls = 'i-badge';

Component({
    externalClasses: ['i-class', 'i-class-alone'],
    properties: {
        count: {
            type: Number,
            value: 0
        },
        overflowCount: {
            type: Number,
            value: 99
        },
        dot: {
            type: Boolean,
            value: false
        },
    },
    data: {
        classes: '',
        dotClasses: '',
        countClasses: '',
        finalCount: 0
    },
    attached() {
        this.initCls();
    },
    methods: {
        initCls() {
            this.classes();
            this.dotClasses();
            this.countClasses();
            this.finalCount();
        },
        classes() {
            this.setData({
                classes: `${prefixCls}`
            });
        },
        dotClasses() {
            this.setData({
                dotClasses: `${prefixCls}-dot`
            });
        },
        countClasses() {
            this.setData({
                countClasses: `${prefixCls}-count`
            });
        },
        finalCount() {
            this.setData({
                finalCount: Number(this.data.count) >= Number(this.data.overflowCount) ? `${this.data.overflowCount}+` : this.data.count
            });
        },
    }
});
