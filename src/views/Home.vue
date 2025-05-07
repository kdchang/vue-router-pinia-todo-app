<!-- src/views/Home.vue -->
<template>
  <div class="container">
    <h1>To-Do List App</h1>
    <input
      v-model="newTodo"
      class="input"
      @keyup.enter="addTodo"
      placeholder="Add new todo"
    />
    <div class="divider"></div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span
          :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }"
        >
          {{ todo.text }}
        </span>
        <button class="btn btn-primary" @click="toggleComplete(todo.id)">
          {{ todo.completed ? "Undo" : "Done" }}
        </button>
        <router-link class="btn" :to="`/edit/${todo.id}`">Edit</router-link>
        <button class="btn btn-secondary" @click="removeTodo(todo.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/todoStore";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
const newTodo = ref("");

function addTodo() {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value.trim());
    newTodo.value = "";
  }
}

function removeTodo(id) {
  const isDelete = confirm("Confirm Delete？");
  if (isDelete) {
    todoStore.removeTodo(id);
  }
}

function toggleComplete(id) {
  todoStore.toggleComplete(id);
}
</script>
