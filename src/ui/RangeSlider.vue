<template>
<div class="v-range-slider">
  <slot name="left"></slot>
  <input type="range" v-model="value" :min="min" :max="max" :step="step" :name="name">
  <slot name="right"></slot>
</div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    step: {
      type: Number,
    },
    name: {
      type: String,
    },
    value: {
      type: Number,
    }
  }
}
</script>

<style>
.v-range-slider {
  display: flex;
  align-items: center;
  padding: 2px 11px;
}
.v-range-slider input[type=range] {
  -webkit-appearance: none;
  flex: 1;
  display: block;
  overflow: hidden;
  margin: 5px 10px;
  padding: 16px 1px 20px;
  box-sizing: border-box;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
.v-range-slider input::-webkit-slider-runnable-track {
  position: relative;
  height: 2px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}
.v-range-slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  position: relative;
  margin-top: -12px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}
.v-range-slider input::-webkit-slider-thumb:before {
  position: absolute;
  display: inline-block;
  content: '';
  top: 12px;
  left: -2001px;
  width: 2000px;
  height: 2px;
  background: var(--vui-green);
}
</style>
