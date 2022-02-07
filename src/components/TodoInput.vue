<template>
  <div id="todo-input">
      <input v-model="todo"> <button class="btn" @click="addTodo"> + Add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        todo: ''
    }
  },
  methods: {
      addTodo() {
        this.$emit('todoAdded', this.todo);
        this.todo = ''
      }
  },
}
</script>

<style>
#todo-input {
    padding: 0 10px;
    display: grid;
    grid-template-columns: 1fr 100px;
}
#todo-input input {
    padding: 10px 5px;
    border-style: none;
}
.btn {
    padding: 10px 5px;
    border-style: none;
    background-color: rgb(3, 201, 102);
    color: #fff;
    cursor: pointer;
}
.btn:hover {
    background-color: rgb(1, 167, 84);
}

</style>
