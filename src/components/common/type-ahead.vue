<template>
   <div class="type-ahead">
     <i @click="searchText = ''">X</i>
     <input type="text" v-model="searchText"
            @keyup="filterData()"
            @keyup.down="setResultsFocusNext()"
            @keyup.up="setResultsFocusPrev()"
            @keyup.enter="setItem()"
            placeholder="Enter text..">
     <div class="type-ahead-results" v-if="!this.selectedItem">
       <ul>
         <li v-for="(item, index) in filteredData"
             :class="{'isSelected': index === resultsIdx}"
             :key="item.id"
             @click="setItem(index)">{{item.name}}</li>
       </ul>
     </div>
   </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'type-ahead',
  props: {
    title: String,
    listData: Array,
    selectItem: Function
  },
  data: function () {
    return {
      searchText: '',
      filteredData: [],
      selectedItem: null,
      resultsIdx: -1
    }
  },
  computed: {
  },
  methods: {
    filterData: function () {
      if (this.selectedItem && (this.searchText !== this.selectedItem.name)) {
        this.selectedItem = null
        this.resultsIdx = -1
      }

      if (!this.searchText) {
        this.filteredData = []
      } else {
        this.filteredData = this.listData.filter(item => {
          return item.name.includes(this.searchText)
        })
      }
    },
    setItem: function (idx) {
      if (!_.isUndefined(idx)) {
        this.resultsIdx = idx
      }
      if (this.resultsIdx > -1) {
        this.selectedItem = this.filteredData[this.resultsIdx]
        this.searchText = this.selectedItem.name
        this.selectItem(this.selectedItem.id)
      } else {
        this.selectItem(this.searchText)
      }
      this.searchText = ''
    },
    setResultsFocusNext () {
      if ((this.resultsIdx + 1) < this.filteredData.length) {
        this.resultsIdx++
      }
    },

    setResultsFocusPrev () {
      if (this.resultsIdx >= 0) {
        this.resultsIdx--
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.type-ahead {

  position: relative;

  i {
    color: #ccc;
    position: absolute;
    top: 10px;
    right:10px;
    height:100%;
    font-size: 20px;
    &:hover {
      color: darken(#ccc, 20%);
    }
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    border-radius: 4px 4px 4px 4px;
    border: 1px solid #ccc;
    text-indent: 5px;
    outline:none;
  }
  .type-ahead-results {
    position: fixed;
    width: 100%;
    z-index: 999;
    ul {
      top: 24px;
      background-color: #eeeeee;
      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 5px 5px 5px;
        &.isSelected {
          background-color: aqua;
        }
      }
    }
  }
}
</style>
