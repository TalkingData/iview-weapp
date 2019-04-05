<template>
  <div class="i-class i-row" v-bind:class="iClass">
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
    
  },
}
</script>

