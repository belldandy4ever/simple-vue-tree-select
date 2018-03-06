<template>
  <div class="node-container" :class="{'close':!isOpen}" :style="{'min-width':`${minWidth-2}px`}">
    <div v-for="(item,index) in treeData" :key="index">
      <div  :style="{'padding-left':`${level*20+40}px`}" class="node" :class="{'can-not-click':item.canNotClick}" @click.stop="nodeClick(item,index)">
        <span v-if="item.child" class="icon" :style="{'left':`${level*20+15}px`,'background-image':`url('${needExpend[index]?unExpendIcon:expendIcon}')`}" @click.stop="expendClicked(item,index)"></span>
        {{item.name}}
      </div>
      <tree-node @defaultChosed="defaultChosed" @chosed="nodeClick" v-if="item.child" :treeData="item.child" :level="level+1" :isOpen="needExpend[index]" :defaultChosen="defaultChosen"></tree-node>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      treeData: {
        type: Array,
        default() {
          return []
        }
      },
      minWidth:{
        type:Number,
        default:180
      },
      level:{
        type:Number,
        default:0
      },
      isOpen:{
        type:Boolean,
        default:false
      },
      defaultChosen:{
        type:[Number,String],
        default:''
      }
    },

    name: 'tree-node',

    data() {
      return {
        needExpend:[],
        expendIcon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RjM2NUM4QUFBN0MxMUU3OTJGNEU2OEJCNDU4RkQ4NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RjM2NUM4QkFBN0MxMUU3OTJGNEU2OEJCNDU4RkQ4NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdGMzY1Qzg4QUE3QzExRTc5MkY0RTY4QkI0NThGRDg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdGMzY1Qzg5QUE3QzExRTc5MkY0RTY4QkI0NThGRDg0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+K/7qfgAAACFQTFRFmZmZm5ubmpqay8vL09PT0dHR2dnZx8fH1dXVxsbG////fJlJ9wAAAAt0Uk5T/////////////wBKTwHyAAAAM0lEQVR42mLgAgE2ZjDFACEZkDhMyBxGbBwOJgYoYGRlYGaAA048ejCNRrGUhR1MAQQYAEHuBCHty95aAAAAAElFTkSuQmCC',
        unExpendIcon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAACCAMAAABboc2lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RjM2NUM4RUFBN0MxMUU3OTJGNEU2OEJCNDU4RkQ4NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RjM2NUM4RkFBN0MxMUU3OTJGNEU2OEJCNDU4RkQ4NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdGMzY1QzhDQUE3QzExRTc5MkY0RTY4QkI0NThGRDg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdGMzY1QzhEQUE3QzExRTc5MkY0RTY4QkI0NThGRDg0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pfAFnwAAABVQTFRFmZmZm5ub1dXVy8vL0dHRmpqaxsbGf4y0LQAAABdJREFUeNpiYGJlgAJGFgZmBjhgAwgwAAE1ABbpOnwuAAAAAElFTkSuQmCC'
      }
    },
    watch:{
      isOpen(cur){
        if(!cur){
          this.needExpend = this.needExpend.map((v)=>{
            v = false
            return v
          })
        }
      },
      defaultChosen(cur){
        this._returnDefault()
      }
    },

    methods:{
      expendClicked(item,index){
        this.needExpend.splice(index,1,!this.needExpend[index])
      },
      nodeClick(item,index){
        if(item.canNotClick){
          return
        }
        this.$emit('chosed',item)
      },
      defaultChosed(data){
        this.$emit('chosed',data.item)
      },
      _returnDefault(){
        let tmpArr = []
        for(let i = 0;i<this.treeData.length;i++){
          if(this.defaultChosen){
            if(this.defaultChosen == this.treeData[i].id){
              this.$emit('chosed',this.treeData[i])
            }
          }
          tmpArr.push(false)
        }
        this.needExpend=tmpArr
      }
    },
    created(){
      this._returnDefault()
    }
  }
</script>

<style scoped lang="less">
  .node-container {
    overflow: hidden;
    .node{
      background-color: #fff;
      white-space: nowrap;
      padding-right: 10px;
      position: relative;
      .icon{
        position: absolute;
        top:0;
        left: 10px;
        width:20px;
        height:40px;
        background-repeat: no-repeat;
        background-position: center;
        background-cover:contain;
      }
      &:hover {
        background-color: #f1f7fd;
      }
      &.can-not-click {
        background-color: #eee;
        color:#888;
      }
    }
    &.close{
      height:0;
    }
  }
</style>
