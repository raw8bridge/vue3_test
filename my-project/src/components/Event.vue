<template>
  <div className="alert alert-primary">
    <h2 class="card-title text-center">{{ data.title }} [{{ name }}]</h2>
    <p>{{ data.message }}</p>
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
import { ref, reactive } from 'vue'

export default {
  props: {
    name: String
  },
  setup(props, context) {
    const data = reactive({
      title: 'Event',
      message: '',
    })

    const type = (event) => {
      if(event.key == 'Enter') { return }
      data.message += event.key + ' '
      event.target.value = ''
    }
    const clear = () => {
      data.message = ''
    }
    const space = () => {
      data.message += '_ '
    }
    const enter = (event) => {
      var res = data.message.split(' ').join('')
      data.message = res.split('_').join(' ')
      event.target.value = ''
    }
    const form_clr = (event) => {
      event.target.value = ''
    }

    return {
      data,
      type,
      clear,
      space,
      enter,
      form_clr
    }
  },
}
</script>
