Page({
    data: {
        isAdd: false
    },
    handleAdd () {
        this.setData({
            isAdd: !this.data.isAdd
        })
    }
});