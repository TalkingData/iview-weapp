<template>
  <div>
    <button
      class="i-class i-btn"
      v-bind:class="classObject"
      @click="handleTap"
      v-bind:open-type="openType"
      v-bind:app-parameter="appParameter"
      v-bind:hover-stop-propagation="hoverStopPropagation"
      v-bind:hover-start-time="hoverStartTime"
      v-bind:hover-stay-time="hoverStayTime"
      v-bind:session-from="sessionFrom"
      v-bind:send-message-title="sendMessageTitle"
      v-bind:send-message-path="sendMessagePath"
      v-bind:send-message-img="sendMessageImg"
      v-bind:show-message-card="showMessageCard"
      @contact="bindcontact"
      @getuserinfo="bindgetuserinfo"
      @getphonenumber="bindgetphonenumber"
      @error="binderror"
      plain="true"
    >
      <div class="i-btn-loading-inner" v-if="loading"></div>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    inline: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
    },
    shape: {
      type: String,
      default: 'square'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    long: {
      type: Boolean,
      default: false
    },
    openType: String,
    appParameter: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      default: 20
    },
    hoverStayTime: {
      type: Number,
      default: 70
    },
    lang: {
      type: String,
      default: 'en'
    },
    sessionFrom: {
      type: String,
      default: ''
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean
  },
  computed: {
    classObject: function () {
      const btnSize = 'i-btn-' + this.size
      const btnType = 'i-btn-' + this.type
      const btnShape = 'i-btn-' + this.shape
      const btnLong = 'i-btn-' + this.long ? 'long' : ''
      const btnLoading = 'i-btn-' + this.loading ? 'loading' : ''
      const className = btnSize + ' ' + btnType + ' ' + btnShape + ' '
        + btnLong + ' ' + btnLoading
      return className
    }
  },
  methods: {
    handleTap () {
      if (this.disabled) return false
      this.triggerEvent('click')
    },
    bindgetuserinfo({ detail = {} } = {}) {
      this.triggerEvent('getuserinfo', detail)
    },
    bindcontact({ detail = {} } = {}) {
      this.triggerEvent('contact', detail)
    },
    bindgetphonenumber({ detail = {} } = {}) {
      this.triggerEvent('getphonenumber', detail)
    },
    binderror({ detail = {} } = {}) {
      this.triggerEvent('error', detail)
    }
  }
}
</script>

