Component({
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    relations : {
        '../sticky/index' : {
            type : 'parent'
        }
    },
    data : {
        top : 0,
        height : 0,
        isFixed : false,
        index : -1,
    },
    methods: {
        updateScrollTopChange(scrollTop){
            const data = this.data;
            const top = data.top;
            const height = data.height;
            this.setData({
                isFixed : ( scrollTop >= top && scrollTop < top + height ) ? true : false
            })
        },
        updateDataChange(index) {
            const className = '.i-sticky-item';
            const query = wx.createSelectorQuery().in(this);
            query.select( className ).boundingClientRect((res)=>{
                    if( res ){
                        this.setData({
                            top : res.top,
                            height : res.height,
                            index : index
                        })
                    }
            }).exec()
        }
    }
})