import { ref } from "vue";
import { Item } from "./types";
import { vscode } from "./vscode";

export const todos = ref<Item[]>([]);

export function persistTodos() {
  vscode.setState(todos.value);
}
