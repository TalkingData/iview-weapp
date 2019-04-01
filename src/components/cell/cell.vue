<template>
  <div>
    <div @click="handleTap" class="i-class i-cell">
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
        <div v-else="">
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
      type: null,
      value: ''
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: {
      type: String,
      value: ''
    }
  }
}
</script>
