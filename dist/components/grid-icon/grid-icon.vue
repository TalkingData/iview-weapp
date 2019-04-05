<template>
  <div class="i-class i-grid-icon" v-bind:class="iClass">
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
  }
}
</script>
