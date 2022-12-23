<template>
  <div
    style="
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 200px;
    "
  >
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "SlotDemo",
  props: ["title", "list"],
};
</script>
<style></style>
