import treeSelection from './tree-selection.vue'

const SimpleTreeSelect={
  install:function (Vue) {
    Vue.component('vTreeSelect',treeSelection)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SimpleTreeSelect)
}
export default SimpleTreeSelect