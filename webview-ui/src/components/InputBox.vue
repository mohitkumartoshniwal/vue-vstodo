<script setup lang="ts">
import { ref } from "vue";
import { nanoid } from "nanoid";
import { Icon } from "@iconify/vue";
import { Item } from "../types";
import { persistTodos, todos } from "../store";

const text = ref("");

function addTodo() {
  if (text.value.length === 0) return;

  const todoItem: Item = {
    id: nanoid(),
    isChecked: false,
    text: text.value,
  };
  todos.value.push(todoItem);
  persistTodos();
  text.value = "";
}
</script>
<template>
  <div class="w-full flex justify-center gap-3">
    <vscode-text-field
      :value="text"
      @change="(event: Event) => text = (event.target as HTMLInputElement).value"
      placeholder="Enter text here"
      className="w-1/2"
    ></vscode-text-field>
    <vscode-button @click="addTodo">
      <Icon icon="mdi:plus" />
    </vscode-button>
  </div>
</template>
