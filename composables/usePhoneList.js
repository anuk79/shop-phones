import { reactive } from 'vue';
import useFilterOptions from './useFilterOptions';

export default function usePhoneList() {
  const phoneList = reactive([]);
  const { createFilters } = useFilterOptions();

  async function fetchPhones() {
    try {
      const response = await $fetch('/api/phones');
      phoneList.splice(0, phoneList.length, ...response.products);
      createFilters(phoneList);
    } catch (error) {
      console.error(error);
    }
  }

  return { phoneList, fetchPhones };
}