 /*
* touch事件判断方式
* https://github.com/madrobby/zepto/blob/master/src/touch.js#files
*/
function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
    Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
}

Component({
    externalClasses: ['i-class'],
    properties: {
        actions: {
            value: [],
            type: Array,
            observer : '_updateButtonSize'
        },
        unclosable : {
            value : false,
            type : Boolean
        },
        toggle : {
            value : false,
            type : Boolean,
            observer : 'closeButtonGroup'
        },
        operateWidth : {
            type : Number,
            value : 160
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    data : {
        //touch start position
        tStart : {
            pageX : 0,
            pageY : 0
        },
        //限制滑动距离
        limitMove : 0,
        //element move position
        position : {
            pageX : 0,
            pageY : 0
        }
    },
    methods : {
        //阻止事件冒泡
        loop(){},
        _updateButtonSize(){
            const actions = this.data.actions;
            if( actions.length > 0 ){
                const query = wx.createSelectorQuery().in(this);
                let limitMovePosition = 0;
                actions.forEach(item => {
                    limitMovePosition += item.width || 0;
                });
                this.data.limitMove = limitMovePosition;
                /*
                    * 动态获取每个传进值的按钮尺寸不能正确获取，在安卓上少了6px
                    * 暂时实现需要在actions里面传递宽度
                    * 需要后期调研
                */
                //query.selectAll('.i-swipeout-button-right-item').boundingClientRect((rects)=>{
                //     if( rects ){
                //         console.log(rects,1111111)
                //         rects.forEach(item => {
                //             limitMovePosition += item.width;
                //         });
                //         this.data.limitMove = limitMovePosition;
                //         console.log(limitMovePosition,111111111)
                //     }
                // }).exec()
            }else{
                this.data.limitMove = this.data.operateWidth;
                
            }
        },
        handlerTouchstart(event){
            const touches = event.touches ? event.touches[0] : {};
            const tStart = this.data.tStart;
            if( touches ){
                for( let i in tStart ){
                    if( touches[i] ){
                        tStart[i] = touches[i];
                    }
                }
            }
        },
        swipper(touches){
            const data = this.data;
            const start = data.tStart;
            const spacing = {
                pageX : touches.pageX - start.pageX,
                pageY : touches.pageY - start.pageY
            }
            if( data.limitMove <  Math.abs( spacing.pageX ) ){
                spacing.pageX = -data.limitMove;
                
            }
            this.setData({
                'position' : spacing
            })
        },
        handlerTouchmove(event){
            const start = this.data.tStart;
            const touches = event.touches ? event.touches[0] : {};
            if( touches ){
                const direction = swipeDirection( start.pageX,touches.pageX,start.pageY,touches.pageY );
                if( direction === 'Left' ){
                    this.swipper( touches );
                }
            }
        },
        handlerTouchend(event){
            const start = this.data.tStart;
            const touches = event.changedTouches ? event.changedTouches[0] : {};
            if( touches ){
                const direction = swipeDirection( start.pageX,touches.pageX,start.pageY,touches.pageY );
                const spacing = {
                    pageX : touches.pageX - start.pageX,
                    pageY : touches.pageY - start.pageY
                }
                if( Math.abs( spacing.pageX ) >= 40 && direction === "Left" ){
                    spacing.pageX = spacing.pageX  < 0 ? - this.data.limitMove : this.data.limitMove;
                }else{
                    spacing.pageX = 0;
                }
                this.setData({
                    'position' : spacing
                })
            }
        },
        handlerButton(event){
            if( !this.data.unclosable ){
                this.closeButtonGroup();
            }
            const dataset = event.currentTarget.dataset;
            this.triggerEvent('change',{
                index : dataset.index
            })
        },
        closeButtonGroup(){
            this.setData({
                'position' : {pageX : 0,pageY : 0}
            })
        },
        //控制自定义组件
        handlerParentButton(event){
            if( !this.data.unclosable ){
                this.closeButtonGroup();
            }
        }
    },
    ready(){
        this._updateButtonSize();
    }
});
