<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <PeopleList /> -->
    <TodoList />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import PeopleList from "./components/PeopleList.vue";
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: {
    TodoList,
    PeopleList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
