<script setup>
import useDrawer from '../composables/useDrawer';
import { getFilterKeyList } from '../utils/filter';

defineProps({
  allFilters: {
    type: Object,
    required: true
  },
  appliedFilters: {
    type: Object,
    required: true
  },
  updateFilter: {
    type: Function,
    required: true
  },
  filteredListCount: {
    type: Number,
    required: false,
    default: 0
  },
  opensInDrawer: {
    type: Boolean,
    required: false,
    default: false
  }
});

const { closeDrawer } = useDrawer();
</script>
<template>
  <div>
    <div class="heading-container">
      <div class="heading">
        <h3>Filter</h3>
        <button aria-label="Close" @click="closeDrawer">
          <CloseIcon height="24" width="24" />
        </button>
      </div>
      <button class="button-as-link" @click="$emit('resetFilters')">Remove all filters</button>
    </div>
    <div class="filter-options" :class="{ 'drawer-options': opensInDrawer }">
      <div v-for="key in getFilterKeyList()" :key="key">
        <FilterDropdown :opensInDrawer="opensInDrawer" :options="allFilters[key]" :filterName="key"
          @update-filter="updateFilter" :selected="appliedFilters[key]" />
      </div>
    </div>
    <div class="drawer-footer-container">
      <button @click="closeDrawer">Show {{ filteredListCount }} phones</button>
    </div>
  </div>
</template>
<style scoped>
.heading-container {
  padding: 16px;
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
}

h3 {
  margin: 8px 0 20px;
}

.heading button {
  background: none;
  border: none;
  cursor: pointer;
}

.button-as-link {
  background: none;
}

svg {
  display: inline-block;
}

.filter-options {
  padding: 8px 16px;
}

.drawer-footer-container {
  display: flex;
  justify-content: center;
}

.drawer-footer-container button {
  background-color: #07c;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 12px;
  margin: 16px;
  width: 100%;
  font-size: 18px;
}

@media screen and (min-width: 768px) {
  .heading-container,
  .drawer-footer-container {
    display: none;
  }

  .filter-options {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
  }
}
</style>