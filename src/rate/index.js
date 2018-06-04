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
        //支持touch必须使用id去获取位置信息
        starid : {
            type : String,
            default : ''
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
    data : {
        touchesStart : {
            pageX : 0
        }
    },
    methods : {
        handleClick(e){
            const index = e.currentTarget.dataset.index;
            this.triggerEvent('change',{
                index : index + 1
            })
        },
        handleTouchMove(e){

            if( !e.changedTouches[0] ){
                return;
            }

            const data = this.data;
            const movePageX =  e.changedTouches[0].pageX;
            const space = movePageX - data.touchesStart.pageX;

            if( data.space <= 1 ){
                return;
            }
            let setIndex = Math.ceil( space/data.size );
            setIndex = setIndex  > data.count ? data.count : ( setIndex < 1 ? 1 : setIndex ) ;
            this.triggerEvent('change',{
                index : setIndex 
            })
        }
    },
    ready(){
       const className = '.i-rate';
        var query = wx.createSelectorQuery().in(this)
        query.select( className ).boundingClientRect((res)=>{
            this.data.touchesStart.pageX = res.left || 0;
        }).exec()
    }
});
