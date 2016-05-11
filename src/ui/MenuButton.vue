<template>
<button class="v-menu-button" :class="{'v-menu-button--checked':checked}" v-on:click.prevent="checked=!checked">
  <span><slot>Menu</slot></span>
</button>
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
@import "_variables.css";
button.v-menu-button {
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  width: 2.5em;
  height: 2em;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;
}
button.v-menu-button:before,
button.v-menu-button:after,
button.v-menu-button > span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  padding: 0;
  margin: 0;
  background: var(--menu-button-color);
}
button.v-menu-button:before,
button.v-menu-button:after {
  top: 50%;
  content: '';
  pointer-events: none;
  transition: transform 0.25s;
  transform-origin: 50% 50%;
}
button.v-menu-button:before {
  transform: translate3d(0, -10px, 0);
}
button.v-menu-button:after {
  transform: translate3d(0, 10px, 0);
}
button.v-menu-button > span {
  overflow: hidden;
  text-indent: 200%;
  color: rgba(0, 0, 0, 0);
  transition: opacity 0.25s;
}
button.v-menu-button--checked:before {
  transform: rotate3d(0, 0, 1, 45deg);
}
button.v-menu-button--checked:after {
  transform: rotate3d(0, 0, 1, -45deg);
}
button.v-menu-button--checked > span {
  opacity: 0;
}
</style>
