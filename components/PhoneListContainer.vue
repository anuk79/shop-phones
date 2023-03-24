<script setup>
import { getImageSrc, getPhoneLabel, isNewRelease, getPhoneUrl } from '../utils/phone';

defineProps({
  phoneList: {
    type: Array,
    required: true
  },
});
</script>

<template>
  <div v-if="phoneList.length <= 0" class="no-results-message">
    No phones available for selected filters. Please update your filters to proceed.
  </div>
  <ul>
    <li v-for="phone in phoneList" :key="phone.id">
      <span v-if="isNewRelease(phone.release_date)" class="is-new-label">
        New
      </span>
      <div class="img-container">
          <NuxtLink :href="getPhoneUrl(phone)" tabindex="-1">
            <img loading="lazy" alt="" :src="getImageSrc(phone.operating_system)" />
          </NuxtLink>
        </div>
        <div class="details-container">
          <div>{{ phone.manufacturer }}</div>
          <NuxtLink :href="getPhoneUrl(phone)">
            <span>
              {{ getPhoneLabel(phone) }}
            </span>
            <span>
              Check
              <RightArrow />
            </span>
          </NuxtLink>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.no-results-message {
  padding: 32px 16px;
  font-size: 18px;
}

ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 16px 0;
  ;
}

li {
  list-style: none;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  align-items: end;
  position: relative;
  display: grid;
}

.is-new-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px 16px;
  background-color: #232323;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
}

.img-container {
  text-align: center;
}

.img-container img {
  margin: 0;
  height: 200px;
}

.details-container a {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
}

.details-container a:hover {
  color: #090;
}

.details-container a span {
  display: inline-block;
  margin: 8px 0;
  max-width: 75%;
}

.details-container a span:first-child {
  font-weight: 600;
  font-size: 20px;
  color: black;
}

.details-container a:hover span:last-child {
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media screen and (min-width: 768px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }

  .img-container img {
    height: 200px;
  }
}

@media screen and (min-width: 992px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}</style>