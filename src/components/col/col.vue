<template>
  <div>
    <div class="i-class i-col" v-bind:class="classObject" @click.capture="handleTap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    span:{
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObject() {
      const spanClass = this.span ? 'i-col-span-' + this.span : ''
      const offsetClass = this.offset ? 'i-col-offset-' + this.offset : ''
      return this.iClass + ' ' + spanClass + ' ' + offsetClass
    }
  },
  methods: {
    handleTap(evt) {
      this.$emit('click', evt)
    }
  },
}
</script>

