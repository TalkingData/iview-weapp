Page({
    data : {
        starIndex1 : 0,
        starIndex2 : 0
    },
    onChange1(e){
        const index = e.detail.index;
        this.setData({
            'starIndex1' : index
        })
    },
    onChange2(e){
        const index = e.detail.index;
        this.setData({
            'starIndex2' : index
        })
    }
});