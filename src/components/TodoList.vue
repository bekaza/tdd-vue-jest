<template>
  <div>
    <h1 data-testid="title">Todo List</h1>
    <br />
    <input type="text" data-testid="input_todo" />
    <button data-testid="btn_todo">Add</button>
    <hr />
    <input type="text" data-testid="input-search_todo" />
    <ul data-testid="ul-todo">
      <li
        data-testid="list-todo"
        v-for="(todo, index) in todos"
        :key="`todo-${index}`"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      todos: []
    };
  }
};
</script>

<style></style>
