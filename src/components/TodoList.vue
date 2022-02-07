<template>
  <div id="todo-list">
   <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
#todo-list {
    display: grid;
    grid-template-rows: 120px;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 40px;
}
</style>
