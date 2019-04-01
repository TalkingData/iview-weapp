<template>
  <div>
    <div class="i-class i-panel">
      <div v-if="title" class="i-panel-title" v-bind:class="{'i-panel-title-hide-top': hideTop}">{{ title }}</div>
      <div class="i-panel-content" v-bind:class="{'i-panel-without-border': hideBorder}">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      value: ''
    },
    // 标题顶部距离
    hideTop: {
      type: Boolean,
      value: false
    },
    hideBorder: {
      type: Boolean,
      value: false
    }
  }
}
</script>

