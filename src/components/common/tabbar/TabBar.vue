<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
</script>

<style>
  #tab_bar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    box-shadow: 0 -1px 3px rgba(100,100,100,0.2);
  }

</style>
