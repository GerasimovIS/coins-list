<template>
  <div class="container">
    <CoinList
      :items="symbolsPrice"
      :to-symbols="toSymbols"
    />
  </div>
</template>

<script>
import CoinList from './components/CoinList'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    CoinList
  },
  computed: {
    ...mapState({
      symbolsPrice: state => state.multipleSymbolsData,
      toSymbols: state => state.toSymbols
    })
  },
  created () {
    this.$store.dispatch('fetchSymbolsData')
  }
}
</script>

<style lang="scss">
body {
  background-color: ghostwhite;
}

.container {
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  padding: 0 15px;
  padding-top: 15px;
}
</style>
