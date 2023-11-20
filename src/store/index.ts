import { get, writable } from "svelte/store";
import { apiTodo, type Todo } from "@src/api";

const { todo: t } = await apiTodo.read();
const actions = writable<Array<Todo>>(t);
const todo = get(actions);

export const store = {
  todo: {
    value: todo,
    actions,
    subscribe: () => {
      let todo: Array<Todo> = [];

      actions.subscribe((t) => {
        todo = t;
      })
 
      return todo
    }
  }
}