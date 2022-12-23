<template>
  <div>
    <button @click="isShow = !isShow">切换</button>
    <transition name="show" appear>
      <h1 v-show="isShow">你好</h1>
    </transition>
    <transition-group name="show" appear>
      <h1 key="1" v-show="isShow">你好</h1>
      <h1 key="2" v-show="isShow">你好</h1>
    </transition-group>
    <transition
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow">animate</h1>
    </transition>
  </div>
</template>
<script>
import "animate.css";
export default {
  name: "Animatation",
  data: function () {
    return {
      isShow: true,
    };
  },
};
</script>
<style scoped>
h1 {
  background-color: mediumslateblue;
}
/* 进入起点 */
.show-enter,
.show-leave-to {
  transform: translateX(-100%);
}
/* 进入终点 */
.show-enter-to,
.show-leave {
  transform: translateX(0px);
}
.show-enter-active,
.show-leave-active {
  transition: 0.5s linear;
}

/* .show-enter-active {
  animation: appear 1s;
}
.show-leave-active {
  animation: appear 1s reverse;
} */
/* @keyframes appear {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
} */
</style>
