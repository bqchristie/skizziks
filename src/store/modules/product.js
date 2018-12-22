import _ from 'lodash'
import axios from 'axios'
import Vue from 'vue'

const state = {
  products: [],
  productMap: [],
  masterList: [],
  lists: []
}

const mutations = {

  INIT_DATA (state, payload) {
    state.products = payload[0]
    state.productMap = _.keyBy(payload[0], 'id')
    state.masterList = payload[1]
  },
  ADD_PRODUCT (state, payload) {
    state.products.push(payload)
    state.productMap[payload.id] = payload
  },
  REMOVE_PRODUCT (state, payload) {
    axios.delete(process.env.API_PATH + '/listitem', payload).then(response => {
      state.masterList.listItems = _.filter(state.masterList, function (product) {
        return product.id !== payload.id
      })
    })
  },
  ADD_TO_MASTER_LIST (state, payload) {
    let obj = {}
    if (_.isObject(payload)) {
      state.products.push(payload)
      state.productMap[payload.id] = payload
      obj.product_id = payload.id
    } else {
      obj.product_id = payload
    }
    state.masterList.listItems.push(obj)
  },
  REMOVE_FROM_MASTER_LIST (state, listItemId) {
    console.log('deleting list item ' + listItemId)
    state.masterList.listItems = _.remove(state.masterList.listItems, function (item) {
      return item.id !== listItemId
    })
  }
}

const actions = {
  initData ({commit, dispatch}) {
    dispatch('startSpinner')
    let userId = Vue.ls.get('user')
    let data = []

    // get user then
    // get master list
    axios.get(process.env.API_PATH + '/product')
      .then(response => {
        data.push(response.data);
        axios.get(process.env.API_PATH + '/user/' + userId)
          .then(response => {
            let masterListId = response.data.lists[0].id
            return axios.get(process.env.API_PATH + '/list/' + masterListId)
          })
          .then(response => {
            data.push(response.data)
            commit('INIT_DATA', data)
          })
      })
  },
  // addProduct ({commit}, product) {
  //   axios.post(process.env.API_PATH + '/product', product).then((response) => {
  //     commit('ADD_PRODUCT', product)
  //   })
  // },
  // removeProduct ({commit}, product) {
  //   commit('REMOVE_PRODUCT', product)
  // },
  addToMasterList ({commit, dispatch}, id) {
    dispatch('startSpinner')
    let listItem = {list: state.masterList}

    if (_.isInteger(id)) {
      listItem.product = {id: id};
      axios.post(process.env.API_PATH + '/list-item', listItem).then((response) => {
        listItem.id = response.data[0].insertId
        commit('ADD_TO_MASTER_LIST', id)
      })
    } else {
      let newProduct = {name: id}
      axios.post(process.env.API_PATH + '/product', newProduct).then((response) => {
        newProduct.id = response.data[0].insertId
        listItem.product = newProduct
        axios.post(process.env.API_PATH + '/list-item', listItem).then((response) => {
          commit('ADD_TO_MASTER_LIST', newProduct)
        })
      })
    }
  },
  removeFromMasterList ({commit}, id) {
    axios.delete(process.env.API_PATH + '/list-item/' + id).then((response) => {
      commit('REMOVE_FROM_MASTER_LIST', id)
    })
  }
}

const getters = {
  products: state => state.products,
  productMap: state => state.productMap,
  masterList: state => state.masterList
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule
