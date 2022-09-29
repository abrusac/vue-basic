<template>
     <div id="app">
      <h1>{{ message }}</h1>
      <button type="button" class="btn btn-secondary" v-on:click="novakartica ()">Klikni za više informacija o tome kako naručiti</button>
    </div>
</template>
<script>
export default {

  methods: {
    novakartica () {
      window.open('https://www.facebook.com/earthbox.design/')
    }
  }
}
</script>
