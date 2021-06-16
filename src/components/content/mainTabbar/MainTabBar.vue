<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" />
      <img slot="item-icon-activate" src="~assets/img/tabbar/home-a.png" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/sort" activeColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/sort.png" />
      <img slot="item-icon-activate" src="~assets/img/tabbar/sort-a.png" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/shop.png" />
      <img slot="item-icon-activate" src="~assets/img/tabbar/shop-a.png" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/my.png" />
      <img slot="item-icon-activate" src="~assets/img/tabbar/my-a.png" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>


<script>
  import TabBar from "components/common/tabbar/TabBar.vue"
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
