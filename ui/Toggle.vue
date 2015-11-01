<template>
<label class="v-toggle" :class="{'v-toggle--checked': checked}">
<input type="checkbox" v-model="checked" :name="name">
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
    },
    name: {
      type: String,
    },
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
  -webkit-tap-highlight-color: transparent;
}
label.v-toggle input {
  display: none;
}
.v-toggle .v-toggle__wrap {
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
}
.v-toggle--checked .v-toggle__wrap {
  background: var(--vui-green);
  border-color: var(--vui-green);
}
.v-toggle .v-toggle__mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #e6e6e6;
}
.v-toggle--checked .v-toggle__mask {
  opacity: 0;
}
.v-toggle .v-toggle__handle {
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
.v-toggle--checked .v-toggle__handle {
  transform: translate3d(37px, 0, 0);
}
.v-toggle__wrap::before,
.v-toggle__wrap::after {
  position: absolute;
  top: 0;
  font-size: 12px;
  line-height: 30px;
}
.v-toggle__wrap::before {
  left: 5px;
  content: 'ON';
  color: white;
  opacity: 0;
}
.v-toggle__wrap::after {
  right: 5px;
  content: 'OFF';
  color: #666;
}
.v-toggle--checked .v-toggle__wrap::before {
  opacity: 1;
}
.v-toggle--checked .v-toggle__wrap::after {
  opacity: 0;
}
</style>
