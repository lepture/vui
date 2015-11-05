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
    menuClass: function() {
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
  height: 100%;
}
.v-side-menus [slot=left-menu],
.v-side-menus [slot=right-menu] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow-y: scroll;
}
.v-side-menus .v-side-menus__content {
  position: relative;
  left: 0;
  height: 100%;
  z-index: 99;
  box-sizing: border-box;
  transition: transform 0.15s;
  background: white;
}
.v-side-menus--left [slot=left-menu],
.v-side-menus--right [slot=right-menu] {
  -webkit-overflow-scrolling: touch;
}
.v-side-menus--left .v-side-menus__content,
.v-side-menus--right .v-side-menus__content {
  position: fixed;
  width: 100%;
  perspective: 1000px;
}
.v-side-menus--left .v-side-menus__content {
  transform: translate3d(260px, 0, 0);
  box-shadow: -3px 0 6px rgba(0, 0, 0, 0.1), -6px -6px 8px rgba(0, 0, 0, 0.05);
}
</style>
