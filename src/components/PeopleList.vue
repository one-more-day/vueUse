<template>
  <div class="listCon">
    <input v-model="keywords" />
    <ul>
      <li v-for="people of filterArr" :key="people.id">{{ people.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "PeopleList",
  data: function () {
    return {
      keywords: "",
      peoples: [
        { id: "001", name: "t", age: 18, sex: "男" },
        { id: "002", name: "t1", age: 18, sex: "男" },
        { id: "003", name: "t2", age: 18, sex: "男" },
        { id: "004", name: "t3", age: 18, sex: "男" },
      ],
    };
  },
  computed: {
    filterArr() {
      return this.peoples.filter((item) => item.name.includes(this.keywords));
    },
  },
};
</script>
<style scoped>
.listCon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.listCon li {
  list-style: none;
}
</style>
