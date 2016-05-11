<template>
  <button class="v-progress-button v-button" :disabled="disabled">
    <span class="v-progress-button_progress" :style="{width: width}"></span>
    <span class="v-progress-button_text"><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: {
    progress: {
      type: String,
    }
  },
  computed: {
    disabled() {
      if (this.width) {
        return true
      }
      return false
    },
    width() {
      var s = this.progress
      if (!s || s === '0%' || s === '0') {
        return
      }
      if (s[s.length - 1] === '%') {
        return s
      }
      return parseInt(s, 10) + '%'
    }
  }
}
</script>

<style>
.v-progress-button {
  position: relative;
  text-align: center;
}
.v-progress-button_progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  transition: width 0.2s;
}
</style>
