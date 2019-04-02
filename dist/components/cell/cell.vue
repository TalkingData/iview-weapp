<template>
  <div>
    <div @click="handleTap" class="i-class i-cell" v-bind:class="{'i-cell-last': isLastCell, 'i-cell-access': isLink}">
      <div class="i-cell-icon">
        <slot name="icon"></slot>
      </div>
      <div class="i-cell-bd">
        <p v-if="title" class="i-cell-text">{{ title }}</p>
        <p v-if="label" class="i-cell-desc">{{ label }}</p>
        <slot></slot>
      </div>
      <div @click.capture="navigateTo" class="i-cell-ft">
        <div v-if="value">{{ value }}</div>
        <div v-else>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 左侧标题
    title: {
      type: String
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    // 只有点击 footer 区域才触发 tab 事件
    onlyTapFooter: {
      type: Boolean
    },
    // 是否展示右侧箭头并开启尝试以 url 跳转
    isLink: {
      type: Boolean,
      default: false
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      default: 'navigateTo'
    },
    url: {
      type: String,
      default: ''
    },
    isLastCell: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    navigateTo(evt) {
      const navigateTypes = ['navigateTo', 'redirectTo', 'switchTab', 'reLaunch']
      const url = this.url
      const type = typeof this.isLink
      this.$emit('click', evt)
      if (type !== 'boolean' && type !== 'string') {
        console.warn('isLink 属性必须是一个字符串或者布尔值', this.isLink)
        return
      }
      if (!navigateTypes.includes(this.linkType)) {
        console.warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.linkType)
        return
      }
      mpvue[this.linkType].call(mpvue, { url })
    },
    handleTap() {
      if (!this.onlyTapFooter) {
        this.navigateTo()
      }
    }
  },
}
</script>
