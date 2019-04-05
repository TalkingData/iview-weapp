<template>
  <div class="i-class i-grid-item" v-bind:class="iClass" @click.stop="bindTap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    iClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    bindTap(evt) {
      this.$emit('click', evt)
    }
  },
}
</script>
