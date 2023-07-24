<template>
  <header>
    <h1>PhoneMart: Shop Phones</h1>
    <nav>
      <ul>
        <li><nuxt-link to="/">Mobile</nuxt-link></li>
        <li><nuxt-link to="/about">Tablets</nuxt-link></li>
        <li><nuxt-link to="/about">Entertainment</nuxt-link></li>
      </ul>
    </nav>
    <hr />
  </header>
</template>

<style scoped>
ul {
  display: flex;
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
