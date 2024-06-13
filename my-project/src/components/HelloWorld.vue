<template>
  <div className="alert alert-primary">
    <h2 class="card-title text-center">{{ title }}</h2>
    <p>{{ message }}</p>
    <hr>
    <div class="form-group text-left">
      <label>Value1:</label>
      <input type="number" v-model="val" class="form-control">
    </div>
    <div class="form-group text-left">
      <label>Value2:</label>
      <input type="number" v-model="val2" class="form-control">
    </div>
    <table class="bg-white table mt-4">
      <tr><th>add:</th><td>{{ add }}</td></tr>
      <tr><th>sub:</th><td>{{ sub }}</td></tr>
      <tr><th>multiple:</th><td>{{ mult }}</td></tr>
      <tr><th>divide:</th><td>{{ div }}</td></tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data() {
    return {
      title: '',
      message: '値の監視',
      val: 0,
      val2: 1,
      add: 0,
      sub: 0,
      mult: 0,
      div: 0,
    }
  },
  watch: {
    val(newValue, oldValue) {
      console.log('val: ' + oldValue + ' -> ' + newValue)
      this.calculate()
    },
    val2(newValue, oldValue) {
      console.log('val2: ' + oldValue + ' -> ' + newValue)
      this.calculate()
    }
  },
  methods: {
    calculate() {
      if(this.val != "" && this.val2 != "") {
        var val = parseInt(this.val)
        var val2 = parseInt(this.val2)
        this.add = Math.floor(val + val2)
        this.sub = Math.floor(val - val2)
        this.mult = Math.floor(val * val2)
        this.div = Math.floor(val / val2)
      } else {
        this.add = 0
        this.sub = 0
        this.mult = 0
        this.div = 0
      }
    },
  },
  created() {
    this.val = 10
  },
}
</script>
