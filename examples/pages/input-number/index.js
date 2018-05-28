Page({
    data: {
        value1: 1,
        value2: 0.1
    },

    handleChange1 ({ detail }) {
        this.setData({
            value1: detail.value
        })
    },

    handleChange2 ({ detail }) {
        this.setData({
            value2: detail.value
        })
    }
});