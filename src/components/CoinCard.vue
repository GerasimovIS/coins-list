<template>
  <Card>
    <div class="header">
      <div class="coin-name">
        {{ coin }}
      </div>
    </div>
    <div class="body">
      <select
        v-model="selectedCurrency"
        class="currency-select"
      >
        <option
          v-for="(info, currencyName) in prices"
          :key="currencyName"
          :value="currencyName"
        >
          {{ currencyName }}
        </option>
      </select>
      <div class="current-price">
        {{ selectedCurrencyPrice }}
      </div>
    </div>
  </Card>
</template>

<script>
import Card from './Card'

export default {
  name: 'CoinCard',
  components: {
    Card
  },
  props: {
    coin: {
      type: String,
      required: true
    },
    prices: {
      type: Object,
      required: true
    },
    currency: {
      type: String,
      default: 'RUB'
    }
  },
  data () {
    return {
      selectedCurrency: this.currency
    }
  },
  computed: {
    selectedCurrencyPrice () {
      return this.prices[this.selectedCurrency].PRICE
    }
  },
  watch: {
    currency (val) {
      this.selectedCurrency = val
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-weight: bold;
  margin-bottom: 15px;
}

.body {
  display: flex;
}

.currency-select {
  display: flex;
  align-items: center;
  border: 1px solid #ECECEC;
  border-radius: 4px;
  padding: 3px 5px;
  margin-right: 10px;
  font-size: 12px;
}

.coin-name {
  font-size: 18px;
  color: #393939;
}

.current-price {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
  text-align: right;
  color: #393939;
  font-size: 14px;
  font-family: sans-serif;
}
</style>
