Page({
    data : {
        oneChecked : false,
        tags : [
            {
                name : '标签一',
                checked : false,
                color : 'default'
            },
            {
                name : '标签二',
                checked : false,
                color : 'red'
            },
            {
                name : '标签三',
                checked : true,
                color : 'blue'
            },
            {
                name : '标签4️',
                checked : true,
                color : 'green'
            }
        ]
    },
    oneChange(event){
        this.setData({
            'oneChecked' : event.detail.checked
        })
    },
    onChange(event){
        const detail = event.detail;
        this.setData({
            ['tags['+event.detail.name+'].checked'] : detail.checked
        })
        
    }
});