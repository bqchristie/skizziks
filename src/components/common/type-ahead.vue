<template>
   <div class="type-ahead">
     <i @click="searchText = ''">X</i>
     <input type="text"
            v-model="searchText"
            :class="{'hasResults':filteredData.length > 0}"
            @keyup="filterData()"
            @keyup.down="setResultsFocusNext()"
            @keyup.up="setResultsFocusPrev()"
            @keyup.enter="setItem()"
            placeholder="Enter text..">
     <div class="type-ahead-results" v-if="!this.selectedItem && filteredData.length > 0">
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
          return item.name.toLowerCase().includes(this.searchText.toLowerCase())
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
      this.filteredData = []
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

  @import "../../css/common";
  @import "../../css/type-ahead";

</style>
