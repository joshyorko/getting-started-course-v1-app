export default {
	init() {
		try {
			data.todos = appsmith.store.todos || data.dummyTodos;
		} catch (error) {
			console.error("Error initializing todos:", error);
		}
	},
	updateTodo (id, update) {
		try {
			data.todos[id] = { ...data.todos[id], ...update };
			storeValue('todos', data.todos);
		} catch (error) {
			console.error("Error updating todo:", error);
		}
	},
	addTodo (title) {
		try {
			this.updateTodo(data.todos.length, { title, completed: false });
		} catch (error) {
			console.error("Error adding todo:", error);
		}
	},
	deleteTodo (id) {
		try {
			data.todos.splice(id, 1);
			storeValue('todos', data.todos);
		} catch (error) {
			console.error("Error deleting todo:", error);
		}
	},
	editTodo (id, title) {
		try {
			data.activeTodo = undefined;
			this.updateTodo(id, { title });
		} catch (error) {
			console.error("Error editing todo:", error);
		}
	},
}