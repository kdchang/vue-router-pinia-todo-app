<!-- src/views/Edit.vue -->
<template>
    <div>
      <h1>Edit To-Do</h1>
      <input class="input" v-model="text" />
      <button class="btn btn-primary" @click="save">Save</button>
      <router-link class="btn btn-secondary" to="/">Back</router-link>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { ref } from 'vue'
  import { useTodoStore } from '../stores/todoStore'
  
  const route = useRoute()
  const router = useRouter()
  const todoStore = useTodoStore()
  
  const id = route.params.id
  const todo = todoStore.todos.find(t => t.id === id)
  
  const text = ref(todo ? todo.text : '')
  
  function save() {
    todoStore.updateTodo(id, text.value)
    router.push('/')
  }
  </script>
  