<template>
<div id="home">

  <navbar class="home-nav"><div slot="center">购物街</div></navbar>
  <scroll class="content"
          :probe-type="3"
          :pull-up-load="true"
          @scroll="scrollPsn"
          @pullingUp="loadingmore"
          ref="scroll">
    <child-home :banners="banners"/>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="home-tab-control"
                 :titles="['流行','新款','精选']"
                 @tabclick="switchTab"></tab-control>
    <goods-list :goods="showGoods"/>
  </scroll>
  <back-top @click.native="backTop" v-show="isShow"></back-top>
</div>
</template>

<script>
  import ChildHome from "./ChildComps/ChildHome";
  import RecommendView from "./ChildComps/RecommendView";
  import FeatureView from "./ChildComps/FeatureView";

  import Navbar from "../../components/common/navbar/Navbar";
  import TabControl from "../../components/content/tabControl/TabControl";
  //商品列表组件
  import GoodsList from "../../components/content/goods/GoodsList";
  //滚动插件
  import Scroll from "../../components/common/scroll/Scroll";

  import {getHomeMulData,getHomeGoods} from "../../network/home";
  //返回顶部组件
  import BackTop from "../../components/content/backTop/BackTop";
  //better-scroll自己封装的插件
  export default {
    name: "Home",
    components: {
      Navbar,
      ChildHome,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners:[],
        recommend:[],
        goods:{
          'pop': {page: 0,list:[]},
          'new': {page: 0,list:[]},
          'sell': {page: 0,list:[]}
        },
        currentType: 'pop',
        isShow: false
      }
    },
    created() {
      //请求多个数据
      this.getHomeMulData()
      //请求商品数据
      this.getHomeGood('pop')
      this.getHomeGood('new')
      this.getHomeGood('sell')
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      /**
       * 网络请求相关
       */
      getHomeMulData(){
        getHomeMulData().then(res => {
          // console.log(res)
          this.banners = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        })
      },
      getHomeGood(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page++
          this.$refs.scroll.finishPullUp()
        })
      },
      /**
       * 事件监听
       * @param option
       */
      switchTab(option){
        console.log(option);
        switch (option) {
          case 0: this.currentType = 'pop'
            break
          case 1: this.currentType = 'new'
            break
          case 2: this.currentType = 'sell'
            break
        }
      },
      /**
       * 返回到顶部
       * @param position
       */
      scrollPsn(position){
        this.isShow = -position.y > 1000
      },
      backTop(){
       this.$refs.scroll.scrollTo(0,0)
      },
      loadingmore(){
        this.getHomeGood(this.currentType)
      }
    }
  }
</script>

<style scoped>
#home{
  position: relative;
  height: 100vh;
}
.home-nav{
  position: sticky;
  top: 0;
  background-color: var(--color-tint);
  color: #f6f6f6;
  z-index: 9;
}
.home-tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
