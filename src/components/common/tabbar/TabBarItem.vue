<template>
  <div class="tab-bar-item" @click="ItemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    data(){
      return {
        // isActive: isActive,
      }
    },
    methods: {
      ItemClick(){
        console.log(this.path)
        // console.log();
        this.$router.push(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
   .tab-bar-item img{
     vertical-align: middle;
     width: 24px;
     height: 24px;
     margin-top: 2px;
     margin-bottom: 2px;
  }
</style>
