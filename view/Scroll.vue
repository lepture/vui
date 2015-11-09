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
  attached() {
    this._iscroll = new IScroll(this.$el, {
      scrollbars: true,
      scrollY: true,
      mouseWheel: true,
      fadeScrollbars: true,
    })
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
