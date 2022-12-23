<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <PeopleList /> -->
    <!-- <TodoList /> -->
    <!-- <Animatation /> -->
    <!-- <SlotDemo title="分类" :list="['a', 'b', 'c']"
      ><img
        src="https://i2.hdslb.com/bfs/face/543624cb0a51d465d229e1b4b76863422e9430b0.jpg@240w_240h_1c_1s.webp"
        alt="noimage"
      />
    </SlotDemo> -->
    <Count />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Animatation from "./components/Animatation.vue";
import PeopleList from "./components/PeopleList.vue";
import TodoList from "./components/TodoList.vue";
import SlotDemo from "./components/SlotDemo.vue";
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: {
    Animatation,
    TodoList,
    PeopleList,
    SlotDemo,
    Count,
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
