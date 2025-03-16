// Undo-Redo functionality

class UndoRedo {
  constructor() {
    this.undoStack = [];
    this.redoStack = [];
  }
  performAction(action) {
    this.undoStack.push(action);
    this.redoStack = [];
    console.log(`Action performed`, action);
  }
  undo() {
    if (!this.undoStack.length) {
      return "Nothing to undo";
    }
    const item = this.undoStack.pop();
    this.redoStack.push(item);
    console.log(`Undo Action`, item);
  }
  redo() {
    if (!this.redoStack.length) {
      return "Nothing to redo";
    }
    const action = this.redoStack.pop();
    this.undoStack.push(action);
    return `Redo Action ${action}`;
  }
}
