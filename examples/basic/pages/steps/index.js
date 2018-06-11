Page({
    data : {
        current : 2,
        verticalCurrent : 2
    },
    handleClick(){
        const addCurrent = this.data.current + 1;
        const current = addCurrent > 2 ? 0 : addCurrent;
        this.setData({
            'current' : current
        })
    }
});