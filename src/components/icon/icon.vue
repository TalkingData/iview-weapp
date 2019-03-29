<template>
  <div>
    <div class="i-class i-icon" v-bind:class="classObj" v-bind:style="{color: color, fontSize: size + 'px'}"></div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      value: ''
    },
    custom: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      value: 14
    },
    color: {
      type: String,
      value: ''
    }
  },
  computed: {
    classObj() {
      const iconType = this.type ? 'i-icon-' + this.type : ''
      const custom = this.custom ? this.custom : ''
      return iconType + ' ' + custom
    }
  },
}
</script>

