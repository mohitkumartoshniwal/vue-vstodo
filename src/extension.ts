import { commands, ExtensionContext } from "vscode";
import { TodoPanel } from "./panels/TodoPanel";

export function activate(context: ExtensionContext) {
  // Create the show hello world command
  const showHelloWorldCommand = commands.registerCommand(
    "vue-vstodo.run",
    () => {
      TodoPanel.render(context.extensionUri);
    }
  );

  // Add command to the extension context
  context.subscriptions.push(showHelloWorldCommand);
}
