<script setup>
import { reactive } from 'vue';
import usePhoneList from './composables/usePhoneList';
import useFilterOptions from './composables/useFilterOptions';

const { phoneList, fetchPhones } = usePhoneList();
const { allFilters } = useFilterOptions();

onMounted(() => {
  fetchPhones();
});

let appliedFilters = reactive({});

const filteredOptions = computed(() => {
  const filters = Object.keys(appliedFilters);
  if (filters.length > 0) {
    const result = phoneList.filter(phone => {
      return filters.every(filter => {
        if (filter === 'color') {
          const variant = phone.variants.filter(p => phone.default === p.slug && appliedFilters[filter].includes(p.attributes.color.toLowerCase()));
          return variant.length > 0;
        } else if (filter === 'has_5g' || filter === 'has_esim' || filter === 'refurbished') {
          return appliedFilters[filter].includes(phone[filter].toString());
        } else {
          return appliedFilters[filter].includes(phone[filter].toLowerCase());
        }
      });
    });
    return result;
  } else {
    return phoneList;
  }
});

const updateFilter = (val, key) => {
  if (appliedFilters[key]) {
    const index = appliedFilters[key].findIndex(option => option === val);
    if (index < 0) {
      appliedFilters[key].push(val);
    } else {
      appliedFilters[key].splice(index, 1);
      if (appliedFilters[key].length === 0) {
        delete appliedFilters[key];
      }
    }
  } else {
    appliedFilters[key] = [val];
  }
};

const removeFilter = (val, key) => {
  const index = appliedFilters[key].findIndex(option => option === val);
  appliedFilters[key].splice(index, 1);
  if (appliedFilters[key].length === 0) {
    delete appliedFilters[key];
  }
};

const resetFilters = () => {
  Object.keys(appliedFilters).forEach(key => {
    delete appliedFilters[key];
  });
};

</script>
<template>
  <Html>

  <Head>
    <title>Shop for phones | PhoneMart</title>
  </Head>

  </Html>
  <NuxtLayout>
    <h2>Choose from <span>{{ filteredOptions.length }} phones</span></h2>
    <div class="filter-container">
      <OpenDrawer class="filter-drawer-container">
        <div class="filter-drawer">
          <FiltersContainer opensInDrawer="true" :allFilters="allFilters" :appliedFilters="appliedFilters"
            :updateFilter="updateFilter" @reset-filters="resetFilters" :filteredListCount="filteredOptions.length" />
        </div>
      </OpenDrawer>
      <FiltersContainer class="desktop-filter-container" :allFilters="allFilters" :appliedFilters="appliedFilters"
        :updateFilter="updateFilter" />
      <ActiveFilters :activeFilters="appliedFilters" @remove-filter="removeFilter" @reset-filters="resetFilters" />
    </div>
    <PhoneListContainer :phoneList="filteredOptions" />
  </NuxtLayout>
</template>
<style>
h2 {
  color: #090;
  font-size: 44px;
  margin: 16px 0;
  font-weight: 400;
}

h2 span {
  font-weight: 600;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

body {
  background-color: #f5f5f5;
  padding: 0 16px;
  font-family: sans-serif;
  max-width: 1200px;
  margin: auto;
}

.button-as-link {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  color: #07c;
  font-size: 16px;
}

.desktop-filter-container {
  display: none;
}

.filter-drawer-container {
  display: block;
}

.filter-drawer {
  height: 100%;
  overflow-y: auto;
}

@media screen and (min-width: 768px) {
  .filter-drawer-container {
    display: none;
  }

  .desktop-filter-container {
    display: flex;
  }
}
</style>
