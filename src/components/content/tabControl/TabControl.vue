<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,index) in titles"
         :key="index"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex: 0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabclick',index)
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
}
  .active span{
    padding: 5px;
    color: var(--color-tint);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
