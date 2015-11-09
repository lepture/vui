<template>
<div class="v-scroll-container">
  <div class="v-scroll">
    <slot></slot>
  </div>
</div>
</template>

<script>
import IScroll from 'iscroll'

export default {
  props: {
    scrollbars: Boolean,
    direction: {
      type: String,
      default: 'y'
    }
  },
  attached() {
    var options = {
      mouseWheel: true,
    }
    if (this.direction === 'x') {
      options.scrollX = true
    } else {
      options.scrollY = true
    }
    if (this.scrollbars) {
      options.scrollbars = true
      options.fadeScrollbars = true
    }
    this._iscroll = new IScroll(this.$el, options)
  },
  detached() {
    if (this._iscroll) {
      this._iscroll.destroy()
      this._iscroll = null
    }
  },
}
</script>

<style>
.v-scroll-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.v-scroll {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
</style>
