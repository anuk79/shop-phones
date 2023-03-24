<script setup>
import { getActiveFilterTagLabel } from '../utils/filter';

defineProps({
  activeFilters: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="active-filter-container" v-if="Object.keys(activeFilters).length > 0">
    <ul>
      <li v-for="(filterKey, index) in Object.keys(activeFilters)" :key="filterKey + index">
        <div v-for="(val, index) in activeFilters[filterKey]" :key="val + index">
          <button @click="$emit('removeFilter', val, filterKey)">
            {{ getActiveFilterTagLabel(val, filterKey) }}
            <span aria-hidden="true">
              <CloseIcon />
            </span>
          </button>
        </div>
      </li>
    </ul>
    <button class="button-as-link" @click="$emit('resetFilters')">Remove all filters</button>
  </div>
</template>
<style scoped>
.active-filter-container {
  display: block;
  align-items: center;
  padding: 16px;
}

li {
  display: inline-block;
}

li div {
  display: inline-block;
  margin-right: 8px;
}

li button {
  background-color: white;
  border: 1px solid black;
  padding: 5px;
  font-size: 16px;
  margin: 4px 5px 4px 0;
}

.button-as-link {
  margin-top: 8px
}

@media screen and (min-width: 768px) {
  .active-filter-container {
    display: flex;
  }
}
</style>