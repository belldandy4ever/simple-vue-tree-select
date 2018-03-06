<template>
  <div class="tree-sel-container" :style="{'min-width':`${minWidth}px`}" v-clickoutside="handleClickOutSide">
    <span class="arrow-icon" @click.stop="showOptions=!showOptions"></span>
    <span class="text"  @click.stop="showOptions=!showOptions" :class="{'grey':!chosedData.id}">{{chosedData.name}}</span>
    <div class="option-container" v-show="showOptions">
      <div class="node" @click="cancelSelect">取消选择</div>
      <node :treeData="treeData" :isOpen="true" @chosed="chosed" :minWidth="minWidth" :defaultChosen="defaultChosen"></node>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Node from './tree-node.vue'
  import clickoutside from './common/clickoutside.js'
  export default {
    components: {
      Node
    },
    props: {
      treeData:{
        type:Array,
        default(){
          return []
        }
      },
      minWidth:{
        type:Number,
        default:180
      },
      defaultChosen:{
        type:[Number,String],
        default:''
      }
    },
    data() {
      return {
        chosedData:{
          name:"点击选择",
          id:0
        },
        showOptions:false
      }
    },
    methods:{
      chosed(item){
        Object.assign(this.chosedData,item)
        this.showOptions = false
        this.$emit('input',item.id)
      },
      cancelSelect(){
        Object.assign(this.chosedData,{name:"点击选择",id:0})
        this.showOptions = false
        this.$emit('input',0)
      },
      handleClickOutSide(){
        this.showOptions = false
      }
    },
    directives: {
      clickoutside
    }
  }
</script>

<style scoped lang="less">
  .tree-sel-container {
    display: inline-block;
    vertical-align: middle;
    height: 40px;
    line-height: 40px;
    border: 1px solid #d2d2d2;
    position: relative;
    cursor: pointer;
    padding-left: 21px;
    .text{
      display: inline-block;
      height:100%;
      width:100%;
      &.grey{
        color:#b6b4b4;
      }
    }
    .arrow-icon {
      position: absolute;
      width: 14px;
      height: 10px;
      right: 10px;
      top: 50%;
      margin-top: -5px;
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAMAAAA1k+1bAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAY1BMVEUAAAAeISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceISceIScAAABEWkQ6AAAAIHRSTlMAFBDUen/TN/VpRvZQVUJb+G3wLzWH6iQBmdvclgOqplzILW4AAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAT0lEQVQI12NgZEACTAzMLAgeKxsDOwcnjMfJwc7AwMXNA+HxcvOBKH4BMMUnwA8RFhQSZmAQEYJrEhUTFxcThZsoISklLYNkn6ycvCyYAQCB4QLJU/WAQgAAAABJRU5ErkJggg==") no-repeat center;
    }
    .option-container {
      z-index: 200;
      background-color: #fff;
      box-sizing: border-box;
      width: auto;
      position: absolute;
      left: -1px;
      top: 100%;
      border: 1px solid #d2d2d2;
      max-height:300px;
      overflow-y: auto;
      .node {
        height: 40px;
        padding-left: 20px;
        min-width: 160px;
        &:hover{
          background-color: #f1f7fd;
        }
      }
    }
  }
</style>
