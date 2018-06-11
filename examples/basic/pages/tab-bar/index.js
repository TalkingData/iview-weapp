Page({
    data: {
        current: 'homepage'
    },

    handleChange ({ detail }) {
        this.setData({
            current: detail.key
        });
    }
});