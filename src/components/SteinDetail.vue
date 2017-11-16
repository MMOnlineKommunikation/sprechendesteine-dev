<template>
  <div id="seite-stein-detail">
    <div id="stein-illustrationen">
      <img class="stein-detail" :src="getStein.imgSrc" />
    </div>
    <app-toolbar />
    <div id="stein-text">
      <p>{{ getStein.kommentar }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppToolbar from '@/components/Toolbar';

export default {
  name: 'DetailStein',
  components: {
    'app-toolbar': AppToolbar,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'getStein',
    ]),
  },
  created() {
    this.$store.dispatch('setStein', 0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .stein-detail {
    display: block;
    max-height: 400px;
    max-width: 100%;
    margin: 0 auto;
  }
  #stein-text {
    padding: .8rem;
  }
</style>
