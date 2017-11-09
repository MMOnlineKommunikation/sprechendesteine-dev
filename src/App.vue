<template>
  <div id="app">
    <app-toolbar/>
    <router-view/>
  </div>
</template>

<script>
import AppToolbar from '@/components/Toolbar';

export default {
  name: 'app',
  components: {
    'app-toolbar': AppToolbar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
