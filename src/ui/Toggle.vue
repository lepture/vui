<template>
<label class="v-toggle" :class="{'v-toggle--checked': checked}">
  <input type="checkbox" v-model="checked" :name="name">
  <span class="v-toggle_handle"></span>
</label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  }
}
</script>

<style>
@import "_variables.css";
label.v-toggle {
  position: relative;
  display: inline-block;
  height: 31px;
  width: 68px;
  border-radius: 20px;
  box-sizing: border-box;
  background: #e6e6e6;
  border: solid 2px #e6e6e6;
  cursor: pointer;
  vertical-align: middle;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
}
label.v-toggle input {
  display: none;
}
label.v-toggle--checked.v-toggle {
  background: var(--vui-green);
  border-color: var(--vui-green);
}
.v-toggle .v-toggle_handle {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  background: white;
  border-radius: 100%;
  width: 27px;
  height: 27px;
  z-index: 99;
  transition: transform 0.3s;
}
.v-toggle--checked .v-toggle_handle {
  transform: translate3d(37px, 0, 0);
}
.v-toggle::before,
.v-toggle::after {
  position: absolute;
  top: 0;
  font-size: 12px;
  line-height: 28px;
}
.v-toggle::before {
  left: 5px;
  content: 'ON';
  color: white;
  opacity: 0;
}
.v-toggle::after {
  right: 5px;
  content: 'OFF';
  color: #666;
}
.v-toggle--checked.v-toggle::before {
  opacity: 1;
}
.v-toggle--checked.v-toggle::after {
  opacity: 0;
}
</style>
