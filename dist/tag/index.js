Component({
    externalClasses: ['i-class'],
    properties : {
        //slot name
        name : {
            type : String,
            value : ''
        },
        //can click or not click
        checkable : {
            type : Boolean,
            value : false
        },
        //is current choose
        checked : {
            type : Boolean,
            value : true
        },
        //background and color setting
        color : {
            type : String,
            value : 'default'
        },
        //control fill or not
        type : {
            type : String,
            value : 'dot'
        } 
    },
    methods : {
        tapTag(){
            const data = this.data;
            if( data.checkable ){
                const checked = data.checked ? false : true;
                this.triggerEvent('change',{
                    name : data.name || '',
                    checked : checked
                });
            }
        }
    }
})