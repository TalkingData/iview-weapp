Page({
    data : {
        scrollTop : 0
    },
    onChange(event){
        console.log(event.detail,'click right menu callback data')
    },
    //页面滚动执行方式
    onPageScroll(event){
        this.setData({
            scrollTop : event.scrollTop
        })
    }
});