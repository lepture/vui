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
  border: none;
}
button.v-menu:before,
button.v-menu:after {
}
button.v-menu > span {
  overflow: hidden;
}
</style>
