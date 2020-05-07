<template>
  <div id="app">
    <Page/>
  </div>
</template>

<script>

  import Page from "./Page";

  export default {
  name: 'App',
  components: {
    Page
  }
}
</script>

<style lang="scss">
  body {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    margin: 0;
    font-family: 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 18px;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 100vh;
  }

</style>
