<template>
  <div class="alert alert-primary text-center">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <hr>
    <div class="alert alert-light">
      <h3>Inner Slot</h3>
      <slot />
    </div>
    <ul class="list-group">
      <li class="list-group-item">
        <slot name="first"/>
      </li>
      <li class="list-group-item">
        <slot name="second"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SlotTest',
  data() {
    return {
      title: 'Slot',
      message: 'This is message.',
    }
  },
}
</script>
