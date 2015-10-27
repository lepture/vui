<template>
<label class="v-toggle" :class="{'v-toggle--checked': checked}">
<input type="checkbox" v-model="checked">
<div class="v-toggle__wrap">
  <span class="v-toggle__handle"></span>
  <div class="v-toggle__mask"></div>
</div>
</label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style>
label.v-toggle {
  position: relative;
  display: inline-block;
  pointer-events: auto;
  padding: 5px;
  margin: -5px;
}
label.v-toggle input {
  display: none;
}
label.v-toggle .v-toggle__wrap {
  position: relative;
  display: inline-block;
  height: 31px;
  width: 51px;
  border-radius: 20px;
  box-sizing: border-box;
  background: #e6e6e6;
  border: solid 2px #e6e6e6;
  cursor: pointer;
}
label.v-toggle .v-toggle__mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: white;
  transition: transform 0.3s;
  transform: scale3d(1, 1, 1);
}
label.v-toggle .v-toggle__handle {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  background: white;
  border-radius: 100%;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.15);
  width: 27px;
  height: 27px;
  z-index: 99;
  transition: transform 0.3s;
}
label.v-toggle--checked .v-toggle__mask {
  transform: scale3d(0, 0, 0);
}
label.v-toggle--checked .v-toggle__handle {
  transform: translate3d(20px, 0, 0);
}
label.v-toggle--checked .v-toggle__wrap {
  background: var(--toggle-color);
  border-color: var(--toggle-color);
}
</style>
