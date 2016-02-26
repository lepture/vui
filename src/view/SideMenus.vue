<template>
<div class="v-side-menus" :class="menuClass">
  <slot name="left-menu"></slot>
  <div class="v-side-menus__content">
    <slot></slot>
  </div>
  <slot name="right-menu"></slot>
</div>
</template>

<script>
export default {
  props: ['side'],
  computed: {
    menuClass() {
      if (this.side === 'left' || this.side === 'right') {
        return 'v-side-menus--' + this.side
      }
    }
  }
}
</script>

<style>
.v-side-menus {
  position: relative;
  width: 100%;
  height: 100%;
}
.v-side-menus--left, .v-side-menus--right {
  overflow: hidden;
}
.v-side-menus [slot=left-menu],
.v-side-menus [slot=right-menu] {
  position: absolute;
  width: 275px;
  height: 100%;
  top: 0;
  z-index: 1;
}
.v-side-menus [slot=left-menu] {
  left: 0;
}
.v-side-menus [slot=right-menu] {
  right: 0;
}
.v-side-menus .v-side-menus__content {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: transform 0.15s;
  background: white;
  z-index: 99;
}
.v-side-menus--left .v-side-menus__content,
.v-side-menus--right .v-side-menus__content {
  position: fixed;
  width: 100%;
  perspective: 1000px;
}
.v-side-menus--left .v-side-menus__content {
  transform: translate3d(275px, 0, 0);
  box-shadow: -3px 0 6px rgba(0, 0, 0, 0.1), -6px -6px 8px rgba(0, 0, 0, 0.05);
}
.v-side-menus--right .v-side-menus__content {
  transform: translate3d(-275px, 0, 0);
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.1), 6px 6px 8px rgba(0, 0, 0, 0.05);
}
</style>
