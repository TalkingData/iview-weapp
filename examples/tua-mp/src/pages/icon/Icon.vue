<config>
{
    "navigationBarTitleText": "Icon 图标",
    "usingComponents": {
        "i-icon": "/iview/icon/index",
        "i-grid": "/iview/grid/index",
        "i-grid-item": "/iview/grid-item/index"
    }
}
</config>

<template lang="wxml">
    <i-grid>
        <view
            class="icon-item"
            wx:for="{{ list }}"
            wx:key="*this"
        >
            <i-icon type="{{ item }}" size="28" color="#80848f"></i-icon>
            <view class="icon-item-name">{{ item }}</view>
        </view>
    </i-grid>
</template>

<script>
export default {
    data () {
        return {
            list: [
                'accessory',
                'activity',
                'activity_fill',
                'add',
                'addressbook_fill',
                'addressbook',
                'barrage_fill',
                'barrage',
                'browse_fill',
                'browse',
                'brush',
                'brush_fill',
                'businesscard_fill',
                'businesscard',
                'camera_fill',
                'camera',
                'clock_fill',
                'clock',
                'close',
                'collection_fill',
                'collection',
                'computer_fill',
                'computer',
                'coordinates_fill',
                'coordinates',
                'coupons_fill',
                'coupons',
                'createtask_fill',
                'createtask',
                'customerservice_fill',
                'customerservice',
                'delete_fill',
                'delete',
                'document',
                'document_fill',
                'dynamic_fill',
                'dynamic',
                'editor',
                'eit',
                'emoji_fill',
                'emoji',
                'enter',
                'enterinto',
                'enterinto_fill',
                'feedback_fill',
                'feedback',
                'flag_fill',
                'flag',
                'flashlight',
                'flashlight_fill',
                'fullscreen',
                'group',
                'group_fill',
                'homepage_fill',
                'homepage',
                'integral_fill',
                'integral',
                'interactive_fill',
                'interactive',
                'keyboard',
                'label',
                'label_fill',
                'like_fill',
                'like',
                'live_fill',
                'live',
                'lock_fill',
                'lock',
                'mail',
                'mail_fill',
                'message',
                'message_fill',
                'mine',
                'mine_fill',
                'mobilephone_fill',
                'mobilephone',
                'more',
                'narrow',
                'offline_fill',
                'offline',
                'other',
                'picture_fill',
                'picture',
                'play',
                'play_fill',
                'playon_fill',
                'playon',
                'praise_fill',
                'praise',
                'prompt_fill',
                'prompt',
                'redpacket_fill',
                'redpacket',
                'refresh',
                'remind_fill',
                'remind',
                'return',
                'right',
                'scan',
                'send',
                'service_fill',
                'service',
                'setup_fill',
                'setup',
                'share_fill',
                'share',
                'success_fill',
                'success',
                'suspend',
                'switch',
                'systemprompt_fill',
                'systemprompt',
                'tailor',
                'task',
                'task_fill',
                'tasklist_fill',
                'tasklist',
                'time_fill',
                'time',
                'translation_fill',
                'translation',
                'trash',
                'trash_fill',
                'undo',
                'video',
                'video_fill',
                'warning_fill',
                'warning',
                'search',
                'searchfill',
                'publishgoods_fill',
                'shop_fill',
                'transaction_fill',
                'packup',
                'unfold',
                'financial_fill',
                'commodity',
            ],
        }
    },
}
</script>

<style lang="css">

.icon-item{
    display: block;
    padding: 16px 0;
    width: 33.33%;
    float: left;
    text-align: center;
}
.icon-item-name{
    font-size: 10px;
}

</style>
