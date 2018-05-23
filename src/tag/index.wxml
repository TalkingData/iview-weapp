<view 
    class="i-class i-tag {{ parse.getClass(color,type,checked,checkable) }} {{checkable ? '' : 'i-tag-disable'}}" 
    bindtap="tapTag">
    <slot></slot>
</view>
<wxs module="parse"> 
module.exports = {
    getClass : function(color,type,checked,checkable) {
        var initColorList = ['blue', 'green', 'red', 'yellow', 'default'];
        var theme = '';
        var className = 'i-tag-';
        if( initColorList.indexOf( color ) > -1 ){
            theme = className + color;
        }
        if( type === 'border' ){
            theme = className+color+'-border';
        }
        if( checkable && checked ){
            theme = className+color+'-checked';
        }else if( checkable && !checked ){
            theme =  ( type === 'border' ? className + color +'-border' : className+'none' );
        }

        return theme;
    }
}
</wxs>