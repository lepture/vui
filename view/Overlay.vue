<template>
  <div class="overlay">
    <div class="overlay__mask" @click="show=false"></div>
    <div class="overlay__content">
      <slot name="overlay-hide"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    open() {
      document.body.classList.add('overlay--open')
    },
    close() {
      document.body.classList.remove('overlay--open')
    },
  },
  ready() {
    if (this.show) {
      this.open()
    }
  },
  dettached() {
    this.close()
  },
  watch: {
    'show': function(val) {
      if (val) {
        this.open()
      } else {
        this.close()
      }
    }
  }
}
</script>

<style>
.overlay {
  position: fixed;
  display: none;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 9999;
}
.overlay--open {
  overflow: hidden;
}
.overlay--open .overlay {
  display: flex;
}
.overlay__mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  cursor: pointer;
}
.overlay__content {
  position: relative;
  max-width: 860px;
  z-index: 22;
  flex: 1;
}
/* slot=overlay-hide is an extra part to hide overlay */
.overlay [slot="overlay-hide"] {
  position: absolute;
}
</style>
