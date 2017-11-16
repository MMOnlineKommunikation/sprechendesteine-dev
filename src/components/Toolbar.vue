<template>
  <div class="chorin-toolbar">
    <button @click="switchStein(1)" class="float-right">Stein weiter</button>
    <button @click="switchStein(-1)" class="float-right">Stein zurück</button>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {

    };
  },
  methods: {
    switchStein(richtung) {
      this.$store.dispatch('switchStein', richtung);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chorin-toolbar {
    float: left;
    width: 100%;
    background: #444;
    padding: .4rem;
    margin-bottom: .4rem;
  }
</style>
