Component({
    externalClasses: ['i-class'],
    properties : {
        value : {
            type : Boolean,
            value : false
        },
        //large small default
        size : {
            type : String,
            value : 'default'
        },
        // is or not disable
        disabled : {
            type : Boolean,
            value : false
        },
        // hidden inut name
        name : {
            type : String,
            value : ''
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    methods : {
        toggle(){
            if( this.data.disabled ) return;
            const data = this.data;
            const value = data.value ? false : true;
            this.triggerEvent('change',{
                value : value
            })
        }
    }
});
