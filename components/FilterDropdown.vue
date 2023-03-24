<script setup>
import { ref } from 'vue';
import { getDropdownLabel } from '../utils/filter';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  filterName: {
    type: String,
    required: true
  },
  selected: {
    type: Array,
    required: false,
  }
});

const show = ref(false);

const showDropdown = () => {
  show.value = !show.value;
};

const closeOnClickOutside = (e) => {
  e.stopPropagation();
  if (e.target.id !== 'toggle-button-'+ props.filterName && !['option-text', 'option-checkbox',].includes(e.target.className)) {
    show.value = false;
  }
};

const closeOnEscape = (e) => {
  if (e.key === 'Escape') {
    show.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', closeOnClickOutside);
  window.addEventListener('keydown', closeOnEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', closeOnClickOutside);
  window.removeEventListener('keydown', closeOnEscape);
});

</script>
<template>
  <div class="filter-multiselect-container">
    <button :id="'toggle-button-'+filterName" @click="showDropdown" :class="{ 'open': show }">
      {{ getDropdownLabel(filterName) }}
      <CaretUp v-if="show" />
      <CaretDown v-if="!show" />
    </button>

    <div class="multiselect" v-if="show">
      <ul>
        <li v-for="(option, index) in options" :key="index">
          <label class="option-label">
            <input class="option-checkbox" type="checkbox" :value="option" :checked="!!selected && selected.includes(option.toString())"
              @change="$emit('updateFilter', $event.target.value, filterName)" />

            <span class="option-text">{{ option === true ? 'Yes' : option === false ? 'No' : option }}</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
button {
  background-color: white;
  border: none;
  padding: 8px 4px;
  font-size: 16px;
}

button:hover {
  cursor: pointer;
}

.open {
  color: #090;
}

.multiselect {
  white-space: nowrap;
  background: none;
  z-index: 10;
  transition: max-height .2s ease-in-out, opacity .1s ease-in-out;
  padding: 8px 0;
}

.multiselect label {
  padding: 2px 0;
  display: inline-block;
}

.multiselect label span {
  text-transform: capitalize;
  display: inline-block;
  margin: 0 8px;
}

.drawer-options button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}

@media screen and (min-width: 768px) {
  .multiselect {
    position: absolute;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
    background: #fff;
    z-index: 10;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .32);
    border-radius: 6px;
    border-color: #fff;
  }
}
</style>