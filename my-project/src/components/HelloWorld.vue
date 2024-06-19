<template>
  <div className="alert alert-primary">
    <h2 class="card-title text-center">{{ title }}</h2>
    <p>{{ message }}</p>
    <hr>
    <div>
      <input type="text" class="form-control"
        v-on:keypress="type"
        v-on:keydown.delete="clear"
        v-on:keydown.space="space"
        v-on:keydown.enter="enter"
        v-on:keyup="form_clr">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data() {
    return {
      title: 'Event',
      message: '',
    }
  },
  methods: {
    type(event) {
      if(event.key == 'Enter') { return }
      this.message += event.key + ' '
      event.target.value = ''
    },
    clear() {
      this.message = ''
    },
    space() {
      this.message += '_ '
    },
    enter(event) {
      var res = this.message.split(' ').join('')
      this.message = res.split('_').join(' ')
      event.target.value = ''
    },
    form_clr(event) { event.target.value = '' },
  },
}
</script>
