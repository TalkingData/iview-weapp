Component({
    externalClasses: ['i-class'],

    relations: {
        '../grid/index': {
            type: 'parent'
        },
        '../grid-icon/index': {
            type: 'child'
        }
    },

    data: {
        width: '33.33%'
    }
});
