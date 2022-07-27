<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="">Settings</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/mixins/breakpoints.scss";
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap');
html {
  background-color: white;
  font-family: "Jost";
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: gray;
  border-radius: 5px 0 0 15px;

  a {
    font-weight: bold;
    padding: 0.25rem;
    text-decoration: none;
  }
}
</style>
