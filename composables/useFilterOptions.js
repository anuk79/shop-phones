import { reactive } from 'vue';

const allFilters = reactive({
  manufacturer: [],
  color: [],
  has_5g: [true, false],
  operating_system: ['ios', 'android'],
  has_esim: [true, false],
  refurbished: [true, false],
});

export default function useFilterOptions() {
  function createFilters(phoneList) {
    phoneList.forEach(({ manufacturer, colors }) => {
      allFilters.manufacturer.push(manufacturer.toLowerCase());
      colors.forEach(color => {
        allFilters.color.push(color.toLowerCase());
      });
    });
    allFilters.manufacturer = [...new Set(allFilters.manufacturer)];
    allFilters.color = [...new Set(allFilters.color)];
  }

  return {
    allFilters,
    createFilters
  };
}