// eslint-disable-next-line import/no-unresolved
import { createApp } from 'vue';

createApp({
  data() {
    return {
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: true }
      ],
      newTodo: null
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = { title: this.newTodo, done: false };
      this.todos.push(newTodo);
      this.newTodo = "";
    },
    deleteTodo() {
    }
  }
}).mount('#todosContainer');
