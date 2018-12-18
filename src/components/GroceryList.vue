<template>
  <div class="grocery-list">
    <type-ahead :list-data="products" :select-item="addItem"></type-ahead>
    <div class="empty-message" v-if="includedProducts.length === 0">
      <img src="../assets/logo_white.png"/>
      <h3>Add some products to the list!</h3>
    </div>
    <ul>
        <li v-for="product in includedProducts" :key="product.id">{{product.name}}<check-box :id="product.id" :on-check="removeItem"></check-box></li>
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
    this.$store.dispatch('initData').then(() => {
      console.log('done loading data')
      this.$store.dispatch('stopSpinner')
    })
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
  },
  updated: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      this.$store.dispatch('stopSpinner');
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../css/common";
    .grocery-list {
      .empty-message {
        margin-top: 60px;
        text-align: center;
        padding-top: 40px;
        img {
          width:50%;
        }
        h3 {
          color: lighten(#6481b8, 10%);
          font-weight: bolder;
        }
      }
      ul {
        margin-top: 60px;
        width:100%;
        li {
          height:35px;
          padding: 2px 5px 2px 5px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background-color: white;
          border: 1px solid #e2e2e2;
          text-transform: capitalize;
          border-radius: 4px 4px 4px 4px;
          margin-bottom: 3px;
        }
      }
    }
</style>
