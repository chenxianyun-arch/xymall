<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :goodsitem="item" :key="index"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    name: "GoodsList",
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
  z-index: -1;
}
</style>
