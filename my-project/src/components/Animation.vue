<template>
  <div class="alert alert-primary text-center">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <hr>
    <button class="btn btn-primary m-3" v-on:click="doAction">
      {{ btn }}
    </button>
    <transition name="transit">
      <p v-if="flg" class="alert alert-light h5">
        Transition context!
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Animation',
  data() {
    return {
      title: 'Trans&Anim',
      message: 'This is transition sample!',
      flg: true,
      btn: 'Show/Hide'
    }
  },
  methods: {
    doAction() {
      this.flg = !this.flg
    },
  },
}
</script>

<style>
.trans {
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 20pt;
}

.transit-enter-active {
  transition: opacity 0.5s;
}

.transit-leave-active {
  transition: opacity 3.0s;
}

.transit-enter {
  opacity: 0;
}

.transit-enter-from {
  opacity: 0;
}

.transit-enter-to {
  opacity: 1.0;
}

.transit-leave {
  opacity: 1.0;
}

.transit-leave-to {
  opacity: 0;
}

</style>
