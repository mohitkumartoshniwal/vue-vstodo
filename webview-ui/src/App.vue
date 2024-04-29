<script setup lang="ts">
import {
  allComponents,
  provideVSCodeDesignSystem,
} from "@vscode/webview-ui-toolkit";
import { onMounted } from "vue";
import { vscode } from "./vscode";
import InputBox from "./components/InputBox.vue";
import TodoItem from "./components/TodoItem.vue";
import { todos } from "./store";

provideVSCodeDesignSystem().register(allComponents);

onMounted(() => {
  vscode.postMessage({
    command: "ready",
  });
});
</script>

<template>
  <div class="h-screen flex flex-col items-center p-10 gap-5">
    <InputBox />
    <ul class="max-h-96 overflow-y-auto py-2 px-2">
      <TodoItem v-for="item in todos" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
