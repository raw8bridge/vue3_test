<template>
  <div className="alert alert-primary">
    <h1 class="text-center">{{ data.title }} [{{ name }}]</h1>
    <p class="text-center h5">{{ data.msg }}</p>
    <hr>
    <p class="text-center">a + b = {{ sum }}</p>
    <div>
      <label for="a">a: </label>
      <input type="number" v-model="data.num1"
        name="a" min="0" class="form-control">
      <label for="b">b: </label>
      <input type="number" v-model="data.num2"
        name="b" min="0" class="form-control">
    </div>
    <button class="btn btn-primary m-3"
      v-on:click="action">Click</button>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  props: {
    name: String,
  },
  setup(props, context) {
    const data = reactive({
      title: 'Hello World',
      msg: 'This is ref-value!',
      num1: 10,
      num2: 20,
    })
    const sum = computed(() => data.num1 + data.num2)
    // data.msg = context.attrs['msg'].toUpperCase()
    const action = () => {
      let total = 0
      for(let i = 1; i <= data.num1; i++) {
        total += i
      }
      data.msg = "Total a: " + total
    }
    return {
      data, sum, action
    }
  }
}
</script>
