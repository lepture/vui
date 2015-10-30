<template>
<div class="v-side-menus v-side-menus--left">
  <slot name="left-menu"></slot>
  <div class="v-side-menus__content">
    <slot></slot>
  </div>
  <slot name="right-menu"></slot>
</div>
</template>

<script>
</script>

<style>
.v-side-menus {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.v-side-menus [slot=left-menu],
.v-side-menus [slot=right-menu] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow-y: auto;
}
.v-side-menus .v-side-menus__content {
  position: relative;
  left: 0;
  height: 100%;
  z-index: 99;
  box-sizing: border-box;
  padding: 10px;
  transition: transform 0.3s;
  background: white;
}
.v-side-menus--left .v-side-menus__content {
  perspective: 1000px;
}
.v-side-menus--left .v-side-menus__content {
  transform: translate3d(10%, 0, 0);
  box-shadow: -3px 0 6px rgba(0, 0, 0, 0.1), -6px -6px 8px rgba(0, 0, 0, 0.05);
}
</style>
