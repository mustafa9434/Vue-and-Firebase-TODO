<template>
  <div id="app">
    <div class="space"></div>
    <div class="content">
      <todo-input @todoAdded="addNew"></todo-input>
      <todo-list>
        <todo-item 
          v-for="item in items" :key="item.id" 
          :item="item" 
          @updateTodo="updateTodo"
          @deleteTodo="deleteTodo"
          @itemCheck="itemCheck" 
          />
      </todo-list>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';
import firebase from 'firebase';
export default {
  components: {
    TodoInput,
    TodoList,
    TodoItem
  },
  data () {
    return {
      items: []
     
    }
  },
  mounted() {
    this.db.collection('todos').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type == 'added'){
          this.items.push({
            id: change.doc.id,
            ...change.doc.data(),
          })
        }else if(change.type == 'removed') {
          this.items = this.items.filter(item => item.id !== change.doc.id)
        }else if(change.type == 'modified') {
          this.items = this.items.map(item => {
            if(item.id == change.doc.id){
              return {...change.doc.data(), id: item.id}
            }
            return item;
          })
        }
      })
    })
  },
  computed: {
    itemLength(){
      return this.items.length;
    },
    getId(){
      if(this.items.length) {
        return this.items[this.itemLength - 1].id + 1;
      }
      return 1; 
    },
    db() {
      return firebase.firestore();
    }
  },
  methods: {
      addNew(todo) {
        let todoItem = {
          todo,
          completed: false,
        }
        this.db.collection('todos').add(todoItem);
        
      },
      itemCheck(Id) {
        this.items = this.items.map( item => {
          if(item.id === Id) {
            return {...item,completed : !item.completed};
          }
          return item;
        })
      },
      deleteTodo(Id) {
       this.db.collection('todos').doc(Id).delete();
      },
      updateTodo(todo) {
        this.db.collection('todos').doc(todo.id).update(todo)
      }
    },
}
</script>

<style scoped>
  #app {
    margin: 50px auto;
    width: 800px;
    padding: 50px 40px;
    background-color: rgb(230, 230, 230);
  }
</style>


