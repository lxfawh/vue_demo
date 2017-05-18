<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getParam">get param</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'apple page'
    }
  },
  methods:{
    getParam(){
      console.log(this.$route.params)
    }
  }
}
</script>

