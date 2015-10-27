<template>
<button class="v-menu" :class="{'v-menu--open':open}" v-on:click.prevent="open=!open">
  <span><slot>Menu</slot></span>
</button>
</template>

<script>
export default {
  data () {
    return {open: false}
  }
}
</script>

<style>
button.v-menu {
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  width: 2.5em;
  height: 2em;
  line-height: 1;
}
button.v-menu:before,
button.v-menu:after,
button.v-menu > span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  padding: 0;
  margin: 0;
  background: #666;
}
button.v-menu:before,
button.v-menu:after {
  top: 50%;
  content: '';
  pointer-events: none;
  transition: transform 0.25s;
  transform-origin: 50% 50%;
}
button.v-menu:before {
  transform: translate3d(0, -10px, 0);
}
button.v-menu:after {
  transform: translate3d(0, 10px, 0);
}
button.v-menu > span {
  overflow: hidden;
  text-indent: 200%;
  transition: opacity 0.25s;
}
button.v-menu--open:before {
  transform: rotate3d(0, 0, 1, 45deg);
}
button.v-menu--open:after {
  transform: rotate3d(0, 0, 1, -45deg);
}
button.v-menu--open > span {
  opacity: 0;
}
</style>
