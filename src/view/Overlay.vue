<template>
  <div class="overlay">
    <div class="overlay__mask" @click="show=false"></div>
    <button class="overlay__close" aria-label="关闭" @click="show=false">
      <svg viewBox="0 0 40 40" tabindex="-1">
        <circle cx="20" cy="20" r="18"  stroke="#ccc" stroke-width="1" fill-opacity="0"/>
        <line x1="15" y1="15" x2="25" y2="25" stroke="#dadada" stroke-width="2"/>
        <line x1="15" y1="25" x2="25" y2="15" stroke="#dadada" stroke-width="2"/>
      </svg>
    </button>
    <div class="overlay__content">
      <slot name="overlay-hide"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  show: {
      twoWay: true
    }
  },
  methods: {
    open() {
      var el = document.querySelector('html')
      el.classList.add('overlay--open')
    },
    close() {
      var el = document.querySelector('html')
      el.classList.remove('overlay--open')
    },
  },
  ready() {
    if (this.show) {
      this.open()
    }
  },
  detached() {
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
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 9999;
}
.overlay--open,
.overlay--open body {
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
  height: 100%;
  z-index: 22;
  flex: 1;
}
button.overlay__close {
  position: absolute;
  display: block;
  border: none;
  background: none;
  top: 20px;
  right: 30px;
  width: 60px;
  height: 60px;
  z-index: 99;
  cursor: pointer;
  outline: none;
  animation: fade-in 1s cubic-bezier(1, 0.06, 0.74, 1);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
button.overlay__close svg {
  width: 40px;
  height: 40px;
  outline: none;
}
@media (max-width: 680px) {
  .overlay button.overlay__close {
    right: 20px;
  }
}
</style>
