Component({
    externalClasses: ['i-class'],
    properties : {
        status : {
            type : String,
            //wait、process、finish、error
            value : ''
        },
        title : {
            type : String,
            value : ''
        },
        content : {
            type : String,
            value : ''
        },
        icon : {
            type : String,
            value : ''
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    relations : {
        '../steps/index' : {
            type : 'parent'
        }
    },
    data : {
        //step length
        len : 1,
        //current in step index
        index : 0,
        //parent component select current index
        current : 0,
        //css direction
        direction : 'horizontal'
    },
    methods : {
        updateDataChange( options ){
            this.setData({
                len : options.len,
                index : options.index,
                current : options.current,
                direction : options.direction
            })
        }
    }

})