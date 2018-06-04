const VALID_MODE = ['closeable'];
const FONT_COLOR = '#f60';
const BG_COLOR = '#fff7cc';

Component({
    externalClasses: ['i-class'],

    properties: {
        closable: {
            type: Boolean,
            value: false
        },
        icon: {
            type: String,
            value: ''
        },
        loop: {
            type: Boolean,
            value: false
        }
    },

    data: {
        show: true,
        wrapWidth: 0,
        width: 0,
        duration: 0,
        animation: null,
        timer: null,
    },
    detached() {
        this.destroyTimer();
    },
    ready() {
        if (this.data.loop) {
            this.initAnimation();
        }
    },

    methods: {
        initAnimation() {
            wx.createSelectorQuery().in(this).select('.i-noticebar-content-wrap').boundingClientRect((wrapRect) => {
                wx.createSelectorQuery().in(this).select('.i-noticebar-content').boundingClientRect((rect) => {
                    const duration = rect.width / 40 * 1000;
                    const animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: "linear",
                    });
                    this.setData({
                        wrapWidth: wrapRect.width,
                        width: rect.width,
                        duration: duration,
                        animation: animation
                    }, () => {
                        this.startAnimation();
                    });
                }).exec();

            }).exec();
        },
        startAnimation() {
            //reset
            if (this.data.animation.option.transition.duration !== 0) {
                this.data.animation.option.transition.duration = 0;
                const resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: resetAnimation.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            const animationData = this.data.animation.translateX(-this.data.width).step();
            setTimeout(() => {
                this.setData({
                    animationData: animationData.export()
                });
            }, 100);
            const timer = setTimeout(() => {
                this.startAnimation();
            }, this.data.duration);
            this.setData({
                timer,
            });
        },
        destroyTimer() {
            if (this.data.timer) {
                clearTimeout(this.data.timer);
            }
        },
        handleClose() {
            this.destroyTimer();
            this.setData({
                show: false,
                timer: null
            });
        }
    }
});
