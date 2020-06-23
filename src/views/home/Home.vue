<template>
<div id="home">

  <navbar class="home-nav"><div slot="center">购物街</div></navbar>
  <tab-control class="home-tab-control tabcontrol"
               :titles="['流行','新款','精选']"
               @tabclick="switchTab" ref="tabControl1" :class="{fixed:isTabFixed}" v-show="isTabFixed"></tab-control>
  <scroll class="content"
          :probe-type="3"
          :pull-up-load="true"
          @scroll="scrollPsn"
          @pullingUp="loadingmore"
          ref="scroll">
    <child-home :banners="banners" @swiperLoad="imgLoad"/>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="home-tab-control"
                 :titles="['流行','新款','精选']"
                 @tabclick="switchTab" ref="tabControl2" :class="{fixed:isTabFixed}"></tab-control>
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
  //引入防抖函数
  import {debance} from "../../common/utils/utils";

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
      BackTop,
      debance
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
        isShow: false,
        tabOffSetTop: 0,
        isTabFixed: false,
        isShowTabbar: false,
        saveY:0
      }
    },
    destroyed() {
      console.log('----');
    },
    activated() {
      console.log('activated');
      this.$refs.scroll.scrollTo(1,this.saveY,0)
      this.$refs.scroll.reflash()
    },
    deactivated() {
      console.log('deactivated');
      this.saveY = this.$refs.scroll.scroll.y
    },
    created() {
      //请求多个数据
      this.getHomeMulData()
      //请求商品数据
      this.getHomeGood('pop')
      this.getHomeGood('new')
      this.getHomeGood('sell')
    },
    mounted() {
      //防抖函数
      const refresh = debance(this.$refs.scroll.reflash,50)
      this.$bus.$on('itemImgLoad',()=>{
        // console.log('图片资源加载完毕')
        // this.$refs.scroll.reflash()
        refresh()
      })
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
        //让两个点击是一致的
        this.$refs.tabControl1.currentIndex = option
        this.$refs.tabControl2.currentIndex = option
      },
      /**
       * 返回到顶部
       * @param position
       */
      scrollPsn(position){
        this.isShow = (-position.y) > 1000
        this.isTabFixed = (-position.y) > this.tabOffSetTop
      },
      backTop(){
       this.$refs.scroll.scrollTo(0,0)
      },
      loadingmore(){
        this.getHomeGood(this.currentType)
      },
      imgLoad(){
        this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop
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
  background-color: var(--color-tint);
}
.home-tab-control{
  background-color: #fff;
  z-index: 9;
}
.content{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabcontrol{
  position: relative;
  z-index: 9;
}
</style>
