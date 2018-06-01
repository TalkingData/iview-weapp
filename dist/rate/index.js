Component({
    externalClasses: ['i-class'],
    properties : {
        count : {
            type : Number,
            value : 5
        },
        value : {
            type : Number,
            value : 0
        },
        disabled : {
            type : Boolean,
            value : false
        },
        size : {
            type : Number,
            value : 20
        },
        name : {
            type : String,
            value : ''
        }
    },
    methods : {
        handleClick(e){
            const index = e.currentTarget.dataset.index;
            this.triggerEvent('change',{
                index : index + 1
            })
        },
        //later to do this
        handleTouch(e){
            //console.log(e,2222222)
        },
        handleTouchEnd(e){
            
            //console.log(e,'----handleTouchEnd')
        }
    }
});
