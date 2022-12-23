<template>
  <div class="container">
    <div class="header">
      <input placeholder="搜索" />
    </div>
    <div class="listCon">
      <div class="list">
        <div class="item" v-for="item of listData" :key="item.id">
          <input
            type="checkbox"
            :checked="item.checkd"
            @click="clickItem(item.id)"
          />{{ item.name }}
        </div>
      </div>
    </div>
    <div class="footer">
      <input type="checkbox" :checked="isAll" @click="allDone" /><span
        >已完成{{ hasDone }}/全部{{ allItem }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  data: function () {
    return {
      listData: [
        { id: 1, name: "item1", deadline: "2022-12-21", checkd: false },
        { id: 2, name: "item2", deadline: "2022-12-21", checkd: false },
        { id: 3, name: "item3", deadline: "2022-12-21", checkd: false },
        { id: 4, name: "item4", deadline: "2022-12-21", checkd: false },
      ],
    };
  },
  methods: {
    clickItem: function (id) {
      const item = this.listData.filter((item) => item.id === id);
      if (item.length) {
        item[0].checkd = !item[0].checkd;
      }
    },
    allDone: function () {
      if (!this.isAll) this.listData.forEach((item) => (item.checkd = true));
      else this.listData.forEach((item) => (item.checkd = false));
    },
  },
  computed: {
    hasDone() {
      return this.listData.filter((item) => item.checkd).length;
    },
    allItem() {
      return this.listData.length;
    },
    isAll() {
      return this.hasDone === this.allItem;
    },
  },
};
</script>
<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: 400px;
    input {
      width: 200px;
      height: 20px;
      border-radius: 10px;
      border: 1px solid #a3a3a3;
      text-align: center;
      outline: none;
      &:focus {
        border: 1px solid rgb(116, 16, 216);
      }
    }
  }
  .listCon {
    .list {
      width: 400px;
      height: 160px;
      border-radius: 10px;
      box-shadow: -24px -8px 15px -11px rgba(0, 0, 0, 0.1);
      list-style: none;
      display: flex;
      flex-direction: column;
      .item {
        border: 1px solid rgb(205, 200, 200);
        margin: 4px 0px;
        display: flex;
        height: 30px;
        line-height: 30px;
        border-radius: 10px;
        &:hover {
          background-color: rgb(188, 188, 188);
        }
      }
    }
  }
}
</style>
