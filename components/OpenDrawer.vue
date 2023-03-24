<script setup>
import useDrawer from '../composables/useDrawer';

defineProps({
  buttonLabel: {
    type: String,
    required: false,
    default: 'Filter'
  }
});
const { isOpen, openDrawer, closeDrawer } = useDrawer();
</script>

<template>
  <div>
    <button class="toggle-drawer" @click="openDrawer">{{ buttonLabel }}</button>
    <div class="drawer" :class="{ 'show': isOpen }">
      <slot></slot>
    </div>
    <div class="overlay" v-if="isOpen" @click="closeDrawer"></div>
  </div>
</template>

<style>
.toggle-drawer {
  color: #fff;
  background-color: #07c;
  width: 100%;
  line-height: 34px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
}

.toggle-drawer:hover,
.toggle-drawer:focus {
  background-color: #0af;
}

.drawer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 280px;
  background-color: #fff;
  z-index: 999;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
}

.show {
  transform: translateX(0);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
</style>
