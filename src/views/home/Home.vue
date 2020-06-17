<template>
<div id="home">
  <navbar class="home-nav"><div slot="center">购物街</div></navbar>
  <child-home :banners="banners"/>
  <recommend-view :recommend="recommend"></recommend-view>
  <feature-view></feature-view>

  <tab-control class="home-tab-control" :titles="['流行','新款','精选']"></tab-control>
  <ul>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
    <li>hhahah</li>
  </ul>
</div>
</template>

<script>
  import ChildHome from "./ChildComps/ChildHome";
  import RecommendView from "./ChildComps/RecommendView";
  import FeatureView from "./ChildComps/FeatureView";

  import Navbar from "../../components/common/navbar/Navbar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import {getHomeMulData} from "../../network/home";
  export default {
    name: "Home",
    components: {
      Navbar,
      ChildHome,
      RecommendView,
      FeatureView,
      TabControl
    },
    data(){
      return {
        // result: null
        banners:[],
        recommend:[]
      }
    },
    created() {
      //请求多个数据
      getHomeMulData().then(res => {
        console.log(res);
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    }
  }
</script>

<style scoped>
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
}
</style>
