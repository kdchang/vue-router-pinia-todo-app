// src/stores/todoStore.js
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(text) {
      this.todos.push({ id: uuidv4(), text, completed: false })
    },
    removeTodo(id) {
      console.log(this.todos);
    	this.todos = this.todos.filter(todo => todo.id !== id)
      console.log(this.todos);
    },
    toggleComplete(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.completed = !todo.completed
    },
    updateTodo(id, newText) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.text = newText
    }
  }
})
