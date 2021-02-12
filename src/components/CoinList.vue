<template>
  <div class="root">
    <div class="row control">
      <div class="col-12 col-sm-6">
        <input
          class="control-item control-search"
          placeholder="Search..."
          :value="search"
          type="text"
          @input="filterItems"
        >
      </div>
      <div class="col-12 col-sm-3 col-md-1">
        <button
          class="control-item control-btn"
          @click="sortItems('AZ')"
        >
          A-Z
        </button>
      </div>
      <div class="col-12 col-sm-3 col-md-1">
        <button
          class="control-item control-btn "
          @click="sortItems('ZA')"
        >
          Z-A
        </button>
      </div>
      <div class="col-12 col-sm-6 col-md-1">
        <button
          class="control-item control-btn"
          @click="sortItems()"
        >
          Reset
        </button>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <select
          v-model="predefinedCurrency"
          class="control-item control-select"
        >
          <option
            v-for="symbol in toSymbols"
            :key="symbol"
            :value="symbol"
          >
            {{ symbol }}
          </option>
        </select>
      </div>
    </div>
    <div class="row list">
      <template v-for="coin in displayedItems">
        <div
          :key="coin.name"
          class="col-12 col-sm-6 col-md-4 list-item"
        >
          <CoinCard
            :coin="coin.name"
            :prices="coin.prices"
            :currency="predefinedCurrency"
          >
            {{ coin }}
          </CoinCard>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import CoinCard from './CoinCard'

export default {
  name: 'CoinList',
  components: {
    CoinCard
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    toSymbols: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      displayedItems: [...this.items],
      predefinedCurrency: 'RUB',
      search: ''
    }
  },
  watch: {
    items (val) {
      this.displayedItems = [...val]
    }
  },
  methods: {
    filterItems (e) {
      this.search = e.target.value

      this.displayedItems = this.items
        .filter(({ name }) => name.toLowerCase().includes(this.search.toLowerCase()))
    },
    sortItems (mode) {
      switch (mode) {
        case 'AZ':
          this.displayedItems = this.displayedItems.sort((a, b) => {
            if (a.name > b.name) {
              return 1
            }

            if (a.name < b.name) {
              return -1
            }

            return 0
          })
          break
        case 'ZA':
          this.displayedItems = this.displayedItems.sort((a, b) => {
            if (a.name < b.name) {
              return 1
            }

            if (a.name > b.name) {
              return -1
            }

            return 0
          })
          break
        default:
          this.displayedItems = [...this.items]
          this.search = ''
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  margin-bottom: 16px;
}

.control {

  &-item {
    width: 100%;
    margin-right: 5px;
    margin-bottom: 15px;
    padding: 5px 10px;
    border: 1px solid #ECECEC;
    border-radius: 4px;

    &:last-child {
      margin-right: 0;
    }
  }

  &-btn {
    background-color: #FFF;
  }

  &-search {
    padding: 5px 10px;
  }
}
</style>
