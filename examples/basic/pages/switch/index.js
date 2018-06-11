Page({
    data : {
        switch1 : false
    },
    onChange(event){
        const detail = event.detail;
        this.setData({
            'switch1' : detail.value
        })
        
    }
});