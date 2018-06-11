Page({
    data: {
        current: 1
    },
    handleChange ({ detail }) {
        const type = detail.type;
        if (type === 'next') {
            this.setData({
                current: this.data.current + 1
            });
        } else if (type === 'prev') {
            this.setData({
                current: this.data.current - 1
            });
        }
    }
});