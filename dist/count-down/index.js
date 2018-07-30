Component({
    properties: {
        target: Number,
        showDay: Boolean,
        callback: String,
        format: Array,
        clearTimer: Boolean
    },
    externalClasses: ['countdown-class'],
    data: {
        time: '',
        resultFormat: [],
        changeFormat: false
    },
    ready() {
        this.getFormat();

    },
    methods: {
        getFormat() {
            const data = this.data;
            const len = data.format.length;

            if (!data.showDay) data.resultFormat.push('');

            if (len >= 3) {
                for (let i = 0; i < len; i++) {
                    if (data.resultFormat.length >= 4) break;
                    if (data.format[i]) {
                        data.resultFormat.push(data.format[i].toString());
                    }
                }

                if (data.resultFormat.length >= 4) data.changeFormat = true;
            }

            this.getLastTime();
        },
        init() {
            const self = this;
            setTimeout(function () {
                self.getLastTime.call(self);
            }, 1000);
        },
        getLastTime() {
            const data = this.data;
            const gapTime = Math.ceil((data.target - new Date().getTime()) / 1000);
            let result = '';
            let time = '00:00:00';
            let day = '00';
            const format = data.resultFormat;

            if (gapTime > 0) {
                day = this.formatNum(parseInt(gapTime / 86400));
                let lastTime = gapTime % 86400;
                const hour = this.formatNum(parseInt(lastTime / 3600));
                lastTime = lastTime % 3600;
                const minute = this.formatNum(parseInt(lastTime / 60));
                const second = this.formatNum(lastTime % 60);

                if (data.changeFormat) time = `${hour}${format[1]}${minute}${format[2]}${second}${format[3]}`;
                else time = `${hour}:${minute}:${second}`;

                if (!data.clearTimer) this.init.call(this);
            } else {
                this.endfn();
            }

            if (data.showDay) {
                if (data.changeFormat) {
                    result = `${day}${format[0]} ${time}`;
                } else {
                    result = `${day}d ${time}`;
                }
            } else {
                result = time;
            }
            this.setData({
                time: result
            });

        },
        formatNum(num) {
            return num > 9 ? num : `0${num}`;
        },
        endfn() {
            this.triggerEvent('callback', {});
        }
    }
});
