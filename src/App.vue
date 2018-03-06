<template>
  <div id="app">
      <p>选中的数据：{{modelData}} </p>
      <v-tree-select :treeData="testData" v-model="modelData" :defaultChosen="1111"></v-tree-select>
  </div>
</template>

<script>
import {testData} from './testData'
export default {
  name: 'app',
  data () {
    return {
      testData:testData,
      modelData:""
    }
  }
}
</script>

<style>

</style>
