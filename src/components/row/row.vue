<template>
  <div>
    <div class="i-class i-row" v-bind:class="iClass" @click="handleTap"><slot></slot></div>
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
    handleTap(evt) {
      this.$emit('click', evt)
    }
  },
}
</script>

