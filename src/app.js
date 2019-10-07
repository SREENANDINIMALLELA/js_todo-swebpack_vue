import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      test: "test",
      todos: [
        {name: "buy Groceries", priority: "low"},
        {
          name: "clean the house ", priority: "high"
        }
      ],
      newList: {name: "", priority: ""}
    },
    methods: {
      saveNewTodoList: function() {
        this.todos.push({
          name: this.newList.name,
          priority: this.newList.priority
        });
        this.newList = {name: "", priority: ""};
      }
    }
  });
});
