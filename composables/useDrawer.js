import { ref } from 'vue';

const isOpen = ref(false);

export default function useDrawer() {
  function openDrawer() {
    isOpen.value = true;
  }

  function closeDrawer() {
    isOpen.value = false;
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}