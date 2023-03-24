<template>
  <footer>
    <hr />
    <nav>
      <ul>
        <li><nuxt-link to="/">About</nuxt-link></li>
        <li><nuxt-link to="/"> News</nuxt-link></li>
        <li><nuxt-link to="/">Forum</nuxt-link></li>
        <li><nuxt-link to="/">Press</nuxt-link></li>
        <li><nuxt-link to="/">Jobs</nuxt-link></li>
      </ul>
    </nav>
  </footer>
</template>
<style scoped>
ul {
  display: flex;
  padding: 16px 0;
}

li {
  margin: 0;
  padding: 0 8px;
}
a {
  text-decoration: none;
  font-size: 16px;
}
a:hover {
  text-decoration: underline;
  text-underline-offset: 12px;
  color: #090;
}
a:focus {
  color: #090;
}
</style>