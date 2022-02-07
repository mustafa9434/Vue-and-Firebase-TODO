<template>
  <div id="todo-item">
      <input v-if="editMode" v-model="todo.todo" @keyup.enter="updateTodo">
      <span v-else :class="{grey:item.completed}">{{ item.todo }}</span> 
      <span class="options"><i class="fa fa-pencil" @click="editTodo"></i> <i class="fa fa-trash" @click="deleteTodo"></i></span> <br>
      <input type="checkbox" :checked="item.completed" @click="check">
  </div>
</template>

<script>
export default {
    props: ['item'],
  data () {
    return {
        todo: this.item,
        editMode: false
     
    }
  },
  methods: {
      check(){
          this.$emit('itemCheck', this.item.id);
      },
      deleteTodo() {
          this.$emit('deleteTodo', this.item.id);
      },
      editTodo() {
          this.editMode = !this.editMode;
      },
      updateTodo() {
        this.$emit('updateTodo', this.todo)
        this.editMode = false
      }
  },
}
</script>

<style>
#todo-item{
    margin: 10px 0px 0px 10px;
    background-color: rgb(124, 173, 25);
    font-family: 'Roboto', sans-serif;
    color: #fff;
    padding: 20px 15px;
    position: relative;
}

#todo-item .options {
    position: absolute;
    top: 1px;
    right: 1px;
    color: white;
    text-decoration: none;
    padding: 3px 7px;
    font-size: 13px;
}
.fa{
    margin: 0px 3px;
}
.fa-trash:hover{
    cursor: pointer;
    color: rgb(236, 54, 54);
}
.fa-pencil:hover{
    cursor: pointer;
    color: teal;
}
#todo-item input {
    margin-top: 15px;
}


.grey {
    color: rgb(248, 141, 141);
}

</style>
