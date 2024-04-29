<script setup lang="ts">
import { ref } from "vue";
import { Item } from "../types";
import { persistTodos, todos } from "../store";
import { Icon } from "@iconify/vue";

const { item } = defineProps<{
  item: Item;
}>();

const isChecked = ref(item.isChecked);

function toggleChecked() {
  isChecked.value = !isChecked.value;
  const updatedTodos = todos.value.map((todo) => {
    if (todo.id === item.id) {
      return {
        ...todo,
        isChecked: !todo.isChecked,
      };
    }
    return todo;
  });

  todos.value = updatedTodos;
  persistTodos();
}

function deleteTodo() {
  todos.value = todos.value.filter((todo) => todo.id !== item.id);
  persistTodos();
}
</script>

<template>
  <li
    class="w-96 mx-auto max-h-16 flex justify-between items-center gap-3 px-3 mb-1 py-2"
  >
    <vscode-checkbox :checked="isChecked" @change="toggleChecked" />
    <span class="flex-1 overflow-y-auto py-1">{{ item.text }}</span>
    <vscode-button @click="deleteTodo">
      <Icon icon="mdi:trash-can" />
    </vscode-button>
  </li>
</template>
