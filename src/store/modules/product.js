import _ from 'lodash'
import axios from 'axios'

const state = {
  products: [],
  masterList: [],
  lists: []
}

const mutations = {

  INIT_DATA (state, payload) {
    state.products = payload[0]
    state.masterList = payload[1]
  },
  ADD_PRODUCT (state, payload) {
    state.products.push(payload)
  },
  REMOVE_PRODUCT (state, payload) {
    state.products = _.filter(state.products, function (product) {
      return product.id !== payload.id
    })
  },
  ADD_TO_MASTER_LIST (state, payload) {
    let obj = {}
    if (_.isObject(payload)) {
      state.products.push(payload)
      obj.id = payload.id
    }
    else {
      obj.id = payload
    }
    state.masterList.push(obj)
  },
  REMOVE_FROM_MASTER_LIST (state, payload) {
    state.masterList = _.remove(state.masterList, function (product) {
      return product.id !== payload
    })
  }
}

const actions = {
  initData ({commit}) {
    axios.get('http://localhost:3030/api/product').then((response) => {
      let data = [
        response.data,
        [{id: 1}, {id: 2}]
      ]
      commit('INIT_DATA', data)
    })
  },
  addProduct ({commit}, product) {
    axios.post('http://localhost:3030/api/product', product).then((response) => {
      commit('ADD_PRODUCT', product)
    })
  },
  removeProduct ({commit}, product) {
    commit('REMOVE_PRODUCT', product)
  },
  addToMasterList ({commit}, id) {
    if (_.isInteger(id)) {
      commit('ADD_TO_MASTER_LIST', id)
    } else {
      let newProduct = {name: id}
      axios.post('http://localhost:3030/api/product', newProduct).then((response) => {
        newProduct.id = response.data[0].insertId
        commit('ADD_TO_MASTER_LIST', newProduct)
      })
    }
  },
  removeFromMasterList({commit}, id) {
    commit('REMOVE_FROM_MASTER_LIST', id)
  }
}

const getters = {
  products: state => state.products,
  masterList: state => state.masterList
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule
