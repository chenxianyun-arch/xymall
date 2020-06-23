<template>
<div class="goodsitem">
  <img :src="goodsitem.show.img" alt="" @load="imgload">
  <div class="goodsinfo">
    <p>{{goodsitem.title}}</p>
    <span class="price">{{goodsitem.price}}</span>
    <span class="collect">{{goodsitem.cfav}}</span>
  </div>
</div>
</template>

<script>

  export default {
    name: "GoodsListItem",
    props:{
      goodsitem:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgload(){
        //发射一个bus事件，然后供home里面进行监听
        this.$bus.$emit('itemImgLoad')
        // console.log(this.$bus);
      }
    }
  }
</script>

<style scoped>
  .goodsitem{
    width: 48%;
    padding-bottom: 44px;
    position: relative;

  }
  .goodsitem img{
    width: 100%;
    border-radius: 5px;
  }
  .goodsinfo{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goodsinfo p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goodsinfo .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goodsinfo .collect{
    position: relative;
  }
  .goodsinfo .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg");
  }

</style>
