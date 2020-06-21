<template>
<!--  <div>分类</div>-->
  <div class="wrapper">
    <div class="content">
      <button @click="btnClick">anniu</button>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Catagroy",
    data(){
      return {
        scroll: null
      }
    },
    created() {
    },
    mounted() {
     this.scroll = new BScroll('.wrapper',{
        probeType: 3,
        pullUpLoad: true
      })
      //监听滚动的具体距离
      this.scroll.on('scroll',(option)=>{
        // console.log(option);
      })
      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多');
      })
    },
    methods:{
      btnClick(){
        console.log('将领');
      }
    }
  }
</script>

<style scoped>
.wrapper{
  height: 100px;
  background-color: red;
  overflow: hidden;
}
</style>
