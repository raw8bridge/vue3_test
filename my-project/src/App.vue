<template>
  <div id="app">
    <Calc v-bind:title="message" 
      v-on:result-event="appAction"/>
    <div class="mt-3 text-left">
      <table class="table" v-html="log"></table>
    </div>
    <div>
      <button class="btn btn-danger" 
        v-on:click="doClear">Clear Log</button>
    </div>
  </div>
</template>

<script>
import Calc from './components/Calc.vue'

export default {
  name: 'app',
  components: {
    Calc
  },
  data() {
    return {
      message:'CALC',
      result:[],
    }
  },
  computed: {
    log() {
      let table = '<tr><th>Expression</th><th>Value</th></tr>'
      if (this.result.length > 0) {
        for(var i in this.result) {
          table += '<tr><td>' + this.result[i][0] + '</td><th>' 
            + this.result[i][1] + '</th></tr>'
        }
      }
      return table
    }
  },
  created() {
    let items = localStorage.getItem('log')
    let logs = JSON.parse(items)
    if (logs != null){ this.result = logs }
  },
  methods: {
    appAction(exp, res) {
      this.result.unshift([exp, res])
      var log = JSON.stringify(this.result)
      localStorage.setItem('log', log)
    },
    doClear() {
      if (confirm('ログをすべて消去します。')) {
        localStorage.removeItem('log')
        this.result = []
      }
    }
  }
}
</script>
