<template>
  <div class="tab_bar_item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/home.png" />
    <div>首页</div> -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-activate"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
   </div>
  <!-- <div class="tab_bar_item">
    <img src="../../assets/img/tabbar/sort.png" />
    分类
  </div>
  <div class="tab_bar_item">
    <img src="../../assets/img/tabbar/shop.png" />
    <div>购物车</div>
  </div>
  <div class="tab_bar_item">
    <img src="../../assets/img/tabbar/my.png" />
    我的
  </div> -->
</template>

<script>
  export default {
    name:"TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "#1296db"
      }
    },
    data() {
      return {
        // isActive: true
        // path: "./home"
      }
    },
    computed: {
      isActive() {
        // /home
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        // console.log("itemclick");
        this.$router.push(this.path);
      }
    }

  }
</script>

<style>
  .tab_bar_item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
    /* line-height: 49px; */
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
  /* .tab_bar_item > img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
  } */

</style>
