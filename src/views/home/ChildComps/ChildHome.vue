<template>
  <div>
    <swiper>
      <swiper-item v-for="(item ,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgload"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
  export default {
    name: "ChildHome",
    props:{
      banners:{
        type: Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return {
        isLoad: false
      }
    },
    methods:{
      imgload(){
        // console.log('轮播图加载');
        if(!this.isLoad){
          this.$emit('swiperLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
