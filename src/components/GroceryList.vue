<template>
  <div class="grocery-list">
    <type-ahead :list-data="products" :select-item="addItem"></type-ahead>
    <div class="empty-message" v-if="includedProducts.length === 0">
      <h3>Add some products to the list!</h3>
    </div>
    <ul v-for="product in includedProducts" :key="product.id">
        <li>{{product.name}}<check-box :id="product.id" :on-check="removeItem"></check-box></li>
    </ul>
  </div>
</template>

<script>

// import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'
import typeAhead from './common/type-ahead'
import checkBox from './common/check-box'

export default {
  name: 'MyGroceries',
  components: {typeAhead, checkBox},
  data () {
    return {
      msg: 'Welcome to My Groceries',
      selectedIdx: []
    }
  },
  created () {
    console.log('in the created method...')
    this.$store.dispatch('initData')
  },
  methods: {
    ...mapActions(['initData', 'addProduct', 'removeProduct', 'addToMasterList ']),
    addItem: function (productId) {
      this.$store.dispatch('addToMasterList', productId)
    },
    removeItem: function (productId) {
      this.$store.dispatch('removeFromMasterList', productId)
    },
    markDone: function (id) {
      console.log(id)
    }
  },
  computed: {
    ...mapGetters(['products', 'masterList']),

    includedProducts: function () {
      let includedItems = this.masterList.map(product => product.id)
      return this.products.filter(product => includedItems.includes(product.id))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .grocery-list {
      .empty-message {
        text-align: center;
        padding-top: 40px;
        h3 {
          color: lighten(#6481b8, 10%);
          font-weight: bolder;
        }
      }
      ul {
        margin-top: 10px;
        width:100%;
        li {
          height:35px;
          padding: 5px 5px 5px 5px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background-color: white;
          border: 1px solid #e2e2e2;
          -webkit-box-shadow: 5px 5px 8px -1px #B0B0B0;
          box-shadow: 5px 5px 8px -1px #B0B0B0;
        }
      }
    }
</style>
