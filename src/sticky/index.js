Component({
    externalClasses: ['i-class'],
    properties : {
        scrollTop : {
            type : Number,
            observer(val){
                this._updateScrollTopChange();
            }
        }
    },
    relations : {
        '../sticky-item/index' : {
            type : 'child',
            linked(){
                this._updateDataChange();
            },
            linkChanged () {
                this._updateDataChange();
            },
            unlinked () {
                this._updateDataChange();
            }
        }
    },
    data : {
        timer : null,
        itemLength : 0,
    },
    methods : {
        _updateScrollTopChange(){
            const stickies = this.getRelationNodes('../sticky-item/index');
            if( stickies.length > 0 ){
                stickies.forEach((item) => {
                    if( item ){
                        item.updateScrollTopChange( this.data.scrollTop );
                    }
                })
            }
        },
        _updateDataChange( ){
            const stickies = this.getRelationNodes('../sticky-item/index');
            if( stickies.length > 0 ){
                if( this.data.timer ){
                    clearTimeout( this.data.timer )
                    this.setData({
                        timer : null
                    })
                }
                this.data.timer = setTimeout(()=>{
                    stickies.forEach((item,index) => {
                        if( item ){
                            item.updateDataChange(index);
                        }
                    })
                },0)
                this.setData({
                    timer : this.data.timer
                })
            }
        }
    }
        
})