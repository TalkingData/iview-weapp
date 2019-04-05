<template>
  <div
    class="i-class i-switch"
    v-bind:class="classObject"
    @click.stop="toggle"
  >
    <input type="text" :name="name" v-model="value" class="i-switch-hide-input">
    <div class="i-switch-inner" v-if="value">
      <slot name="open"></slot>
    </div>
    <div class="i-switch-inner" v-else>
      <slot name="close"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    //large small default
    size: {
      type: String,
      default: "default"
    },
    // is or not disable
    disabled: {
      type: Boolean,
      default: false
    },
    // hidden inut name
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    classObject() {
      const sizeClass = 'i-switch-' + this.size
      let disabledClass = this.value && !this.disabled ? 'i-switch-checked' : ''
      if (this.disabled) {
        disabledClass += ' ' + 'i-switch-disabled'
      }
      return sizeClass + ' ' + disabledClass
    }
  },
  methods: {
    toggle() {
      if (this.disabled) return
      const value = this.value ? false : true
      this.$emit('change', {
        value: value
      })
    }
  },
};
</script>

