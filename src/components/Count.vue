<template>
  <div>
    <h1>当前求和为{{ $store.getters.bigSum }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="oddIncrement">奇数+</button>
      <button @click="asyncIncrement">async + 1</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Count",
  data() {
    return { n: 1 };
  },
  methods: {
    increment() {
      this.$store.dispatch("increment", this.n);
    },
    decrement() {
      this.sum -= this.n;
    },
    oddIncrement() {
      if (this.sum % 2 !== 0) this.sum += this.n;
    },
    asyncIncrement() {
      setTimeout(() => {
        this.sum += this.n;
      }, 1000);
    },
  },
};
</script>
<style scoped></style>
