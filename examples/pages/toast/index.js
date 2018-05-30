const { $Toast } = require('../../dist/base/index');

Page({
    handleText () {
        $Toast({
            content: '这是文本提示'
        });
    },
    handleSuccess () {
        $Toast({
            content: '成功的提示',
            type: 'success'
        });
    },
    handleWarning () {
        $Toast({
            content: '警告的提示',
            type: 'warning'
        });
    },
    handleError () {
        $Toast({
            content: '错误的提示',
            type: 'error'
        });
    },
    handleLoading () {
        $Toast({
            content: '加载中',
            type: 'loading'
        });
    },
    handleIcon () {
        $Toast({
            content: '使用内置的图标',
            icon: 'praise'
        });
    },
    handleImage () {
        $Toast({
            content: '使用自定义图片',
            image: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
        });
    },
    handleMask () {
        $Toast({
            content: '5秒后自动关闭',
            icon: 'prompt',
            duration: 0,
            mask: false
        });
        setTimeout(() => {
            $Toast.hide();
        }, 5000);
    },
});